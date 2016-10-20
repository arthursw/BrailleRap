paper.install(window);

$(document).ready( function() {

	let canvas = document.getElementById("paperCanvas")

	// canvas.width = window.innerWidth;
	// canvas.height = window.innerHeight;// / window.devicePixelRatio;

	paper.setup(canvas);

	let braille = { marginX: 20, marginY: 20, sizeX: 170, sizeY: 125, letterWidth: 2.54, dotRadius: 1.25, letterPadding: 3.75, linePadding: 5.3, downPosition: -2.0, upPosition: 10, speed: 5000, delta: false, language: "6 dots" };

	let pixelMillimeterRatio = null;

	let text = '';
	let gcode = '';

	let dot6Map = {
		0: {
			0: 1,
			1: 2, 
			2: 3
		},
		1: {
			0: 4,
			1: 5,
			2: 6
		}
	}

	let oldDot8Map = {
		0: {
			0: 1,
			1: 2, 
			2: 3,
			3: 7
		},
		1: {
			0: 4,
			1: 5,
			2: 6,
			3: 8
		}
	}

	let newDot8Map = {
		0: {
			0: 4,
			1: 3, 
			2: 2,
			3: 1
		},
		1: {
			0: 5,
			1: 6,
			2: 7,
			3: 8
		}
	}

	let numberPrefix6 = [6]
	let numberPrefix8 = [4, 5, 7, 8]

	function replaceAt(s, n, t) {
	    return s.substring(0, n) + t + s.substring(n + 1);
	}

	let latinToBrail = new Map();
	let dotMap = null;
	let numberPrefix = null;

	let brailleToGCode = function() {
		let is8dot = braille.language.indexOf("8 dots") >= 0
		let sizeX = braille.sizeX;
		let sizeY = braille.sizeY;

		let canvasWidth = canvas.width / window.devicePixelRatio;
		let canvasHeight = canvas.height / window.devicePixelRatio;

		let realRatio = sizeX / sizeX;
		let pixelRatio = canvasWidth / canvasHeight;

		let finalWidthPixel = 0;
		let finalHeightPixel = 0;

		let pixelMillimeterRatio = Math.min(canvasWidth / sizeX, canvasHeight / sizeY)
	
		let upPosition = braille.upPosition;
		let downPosition = braille.downPosition;
		
		project.clear();

		gcode = 'G90;\r\n' // Set to Absolute Positioning
		gcode += 'F ' + braille.speed + ';\r\n'
		gcode += 'G0 Z' + upPosition + ';\r\n'

		let currentX = braille.marginX;
		let currentY = braille.marginY;
		let letterWidth = braille.letterWidth;

		let bounds = new Path.Rectangle(0, 0, Math.max(braille.sizeX * pixelMillimeterRatio, 0), Math.max(0, braille.sizeY * pixelMillimeterRatio));
		bounds.strokeWidth = 1;
		bounds.strokeColor = 'black';

		console.log("Draw text: " + text);

		let isWritingNumber = false;

		let textCopy = '' + text
		for(let i = 0 ; i < textCopy.length ; i++) {
			let char = textCopy[i]

			let charIsCapitalLetter = /[A-Z]/.test(char)
			let charIsLineBreak = /\r?\n|\r/.test(char)
			
			if(charIsLineBreak) {
				currentY += (is8dot ? 2 : 3) * letterWidth + braille.linePadding;
				currentX = braille.marginX;
				continue;
			}

			if(!latinToBrail.has(char.toLowerCase())) {
				throw new Error('Character ' + char + ' was not translated in braille.')	
			}
			
			let indices = latinToBrail.get(char);

			if(!isWritingNumber && !isNaN(parseInt(char))) { 			// if we are not in a number sequence and char is a number: add a 6 dot and enter number sequence
				indices = numberPrefix;
				i--; 													// we will reread the same character
				isWritingNumber = true;
			} else if(isWritingNumber && char == ' ') {
				isWritingNumber = false;
			} else if( charIsCapitalLetter ) { 							// if capital letter: add prefix
				indices = [4, 6];
				textCopy = replaceAt(textCopy, i, textCopy[i].toLowerCase());
				i--;
			}

			let gx = braille.sizeX - currentX;
			let gy = -currentY;

			if(braille.delta) {
				gx -= braille.sizeX / 2;
				gy += braille.sizeY / 2;
			} else {
				gy += braille.sizeY;
			}

			gcode += 'G0 X' + gx + ' Y' + gy + ';\r\n'

			let charGroup = new Group();
			
			for(let y = 0 ; y < (is8dot ? 4 : 3) ; y++) {
				for(let x = 0 ; x < 2 ; x++) {

					if(indices.indexOf(dotMap[x][y]) != -1) {
						let px = currentX + x * letterWidth
						let py = currentY + y * letterWidth
						let dot = new Path.Circle(new Point(px * pixelMillimeterRatio, py * pixelMillimeterRatio), (braille.dotRadius / 2) * pixelMillimeterRatio);
						dot.fillColor = 'black';

						charGroup.addChild(dot);

						if(x > 0 || y > 0) {

							gx = braille.sizeX - px;
							gy = -py;

							if(braille.delta) {
								gx -= braille.sizeX / 2;
								gy += braille.sizeY / 2;
							} else {
								gy += braille.sizeY;
							}

							gcode += 'G0 X' + gx + ' Y' + gy + ';\r\n'
						}
						
						gcode += 'G0 Z' + downPosition + ';\r\n'
						gcode += 'G0 Z' + upPosition + ';\r\n'
					}
				}
			}

			currentX += braille.letterWidth + braille.letterPadding;

			// Check that we can draw the next letter:
			if(currentX + braille.letterWidth + braille.dotRadius > braille.sizeX - braille.marginX) {
				currentY += (is8dot ? 2 : 3) * letterWidth + braille.linePadding;
				currentX = braille.marginX;
			}
		}

		$("#gcode").val(gcode)
		console.log(gcode)
	}

	brailleToGCode()

	function initializeLatinToBraille() {
		numberPrefix = braille.language == "6 dots" ? numberPrefix6 : numberPrefix8

		dotMap = braille.language == "6 dots" ? dot6Map : braille.language == "old 8 dots" ? oldDot8Map : braille.language == "new 8 dots" ? newDot8Map : null
		
		if(dotMap == null) {
			throw new Error('Dot eight map.')
		}


		// Read in braille description file
		// latinToBrail.set('a', [1, 2]);
		// latinToBrail.set('b', [1, 4, 5]);
		let brailleJSON = braille.language == "6 dots" ? braille6JSON : braille8JSON;
		
		for(let char in brailleJSON) {
			latinToBrail.set(char, brailleJSON[char])
		}
	}
	initializeLatinToBraille();

	var gui = new dat.GUI();
	
	dat.GUI.toggleHide = () => {}

	let createController = function(name, min, max, callback) {
		let controller = gui.add(braille, name, min, max);
		controller.onChange(callback != null ? callback : brailleToGCode);
		controller.onFinishChange(callback != null ? callback : brailleToGCode);
	}

	createController('marginX', 0, 100);
	createController('marginY', 0, 100);

	createController('sizeX', 1, 1000);
	createController('sizeY', 1, 1000);

	createController('letterWidth', 1, 100);
	createController('dotRadius', 1, 30);
	createController('letterPadding', 1, 30);
	createController('linePadding', 1, 30);

	createController('downPosition', -10, 30);
	createController('upPosition', -10, 30);
	createController('speed', 0, 6000);

	createController('delta');

	createController('language', ["6 dots", "new 8 dots", "old 8 dots"], null, function() {
		initializeLatinToBraille();
		brailleToGCode();
	});

	gui.add({download: function(){
		// const fileStream = streamSaver.createWriteStream('gcode.txt')
		// const writer = fileStream.getWriter()
		// const encoder = new TextEncoder()
		// let data = gcode.repeat(1024)
		// let uint8array = encoder.encode(data + "\r\n\r\n")
		// writer.write(uint8array)
		// writer.close()

		var a = document.body.appendChild(
			document.createElement("a")
		);
		a.download = "braille.gcode";
		a.href = encodeURI("data:text/plain;charset=utf-8," + gcode); // .replace(/([^\r])\n/g, "$1\r\n")

		a.click(); // Trigger a click on the element
		a.remove();

	}}, 'download')

	$('#latin').bind('input propertychange', function(event) {
		text = $("#latin").val();
		$('#braille').val(text);
		brailleToGCode(text);
	})


	$('#braille').bind('input propertychange', function(event) {
		text = $("#braille").val();
		$('#latin').val(text);
		brailleToGCode(text);
	})

})
