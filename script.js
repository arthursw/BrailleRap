paper.install(window);

$(document).ready( function() {
	
	let brailleJSON = {
		"a": [1],
		"b": [1,2],
		"c": [1,4],
		"d": [1,4,5],
		"e": [1,5],
		"f": [1,2,4],
		"g": [1,2,4,5],
		"h": [1,2,5],
		"i": [2,4],
		"j": [2,4,5],
		"k": [1,3],
		"l": [1,2,3],
		"m": [1,3,4],
		"n": [1,3,4,5],
		"o": [1,3,5],
		"p": [1,2,3,4],
		"q": [1,2,3,4,5],
		"r": [1,2,3,5],
		"s": [2,3,4],
		"t": [2,3,4,5],
		"u": [1,3,6],
		"v": [1,2,3,6],
		"w": [2,4,5,6],
		"x": [1,3,4,6],
		"y": [1,3,4,5,6],
		"z": [1,3,5,6],
		" ": [],
		".": [2,5,6],
		",": [2],
		"?": [2,6],
		";": [2,3],
		":": [2,4],
		"!": [2,3,5],
		"(": [2,3,6],
		")": [3,5,6],
		"'": [3],
		"-": [3,6],
		"/": [3,4],
		"*": [3,5],
		"+": [2,3,5],
		"=": [2,3,5,6],
		"0": [3, 4, 5, 6],
		"1": [1, 6],
		"2": [1, 2, 6],
		"3": [1, 4, 6],
		"4": [1, 4, 5, 6],
		"5": [1, 5, 6],
		"6": [1, 2, 4, 6],
		"7": [1, 2, 4, 5, 6],
		"8": [1, 2, 5, 6],
		"9": [2, 4, 6]
	};

	let canvas = document.getElementById("paperCanvas")

	// canvas.width = window.innerWidth;
	// canvas.height = window.innerHeight;// / window.devicePixelRatio;

	paper.setup(canvas);

	let braille = { marginX: 20, marginY: 20, sizeX: 210/2, sizeY: 297/2, letterWidth: 2.54, dotRadius: 1.25, letterPadding: 3.75, linePadding: 5.3, downPosition: 1, upPosition: 10, speed: 4000 };

	let pixelMillimeterRatio = null

	let text = ''
	let gcode = ''

	let upPosition = 1
	let downPosition = 0.2

	let brailleToGCode = function() {
		
		let sizeX = braille.sizeX
		let sizeY = braille.sizeY

		let canvasWidth = canvas.width / window.devicePixelRatio;
		let canvasHeight = canvas.height / window.devicePixelRatio;

		let realRatio = sizeX / sizeX;
		let pixelRatio = canvasWidth / canvasHeight;

		let finalWidthPixel = 0;
		let finalHeightPixel = 0;

		let pixelMillimeterRatio = Math.min(canvasWidth / sizeX, canvasHeight / sizeY)
	
		project.clear();

		gcode = 'G90\n' // Set to Absolute Positioning
		gcode += 'G0 Z' + upPosition + '\n'

		let currentX = braille.marginX;
		let currentY = braille.marginY;
		let letterWidth = braille.letterWidth;

		let bounds = new Path.Rectangle(0, 0, Math.max(braille.sizeX * pixelMillimeterRatio, 0), Math.max(0, braille.sizeY * pixelMillimeterRatio));
		bounds.strokeWidth = 1;
		bounds.strokeColor = 'black';

		console.log("Draw text: " + text);

		let isWritingNumber = false;

		for(let i = 0 ; i < text.length ; i++) {
			let char = text[i]

			if(!latinToBrail.has(char)) {
				throw new Error('Character ' + char + ' was not translated in braille.')	
			}
			
			let indices = latinToBrail.get(char);

			if(!isWritingNumber && !isNaN(parseInt(char))) { 			// if we are not in a number sequence and char is a number: add a 6 dot and enter number sequence
				indices = [6];
				i--; 													// we will reread the same character
				isWritingNumber = true;
			} else if(isWritingNumber && char == ' ') {
				isWritingNumber = false;
			} else if( /[A-Z]/.test(char)) { 							// if capital letter: add prefix
				indices = [4, 6];
				i--;
			}

			gcode += 'G0 X' + currentY + ' Y' + (braille.sizeX - currentX) + '\n'

			let charGroup = new Group();
			
			for(let y=0 ; y<3 ; y++) {
				for(let x=0 ; x<2 ; x++) {

					if(indices.indexOf(x*3+y+1) != -1) {
						let px = currentX + x * letterWidth
						let py = currentY + y * letterWidth
						let dot = new Path.Circle(new Point(px * pixelMillimeterRatio, py * pixelMillimeterRatio), (braille.dotRadius / 2) * pixelMillimeterRatio);
						dot.fillColor = 'black';

						charGroup.addChild(dot);

						if(x > 0 || y > 0) {
							gcode += 'G0 X' + (braille.sizeX - px) + ' Y' + py + '\n'
						}
						
						gcode += 'G0 Z' + downPosition + '\n'
						gcode += 'G0 Z' + upPosition + '\n'
					}
				}
			}

			currentX += braille.letterWidth + braille.letterPadding;

			// Check that we can draw the next letter:
			if(currentX + braille.letterWidth + braille.dotRadius > braille.sizeX - braille.marginX) {
				currentY += 2 * letterWidth + braille.linePadding;
				currentX = braille.marginX;
			}
		}

		$("#gcode").val(gcode)
	}

	var gui = new dat.GUI();
	
	dat.GUI.toggleHide = () => {}

	let createController = function(name, min, max) {
		let controller = gui.add(braille, name, min, max);
		controller.onChange(brailleToGCode);
		controller.onFinishChange(brailleToGCode);
	}

	createController('marginX', 0, 100);
	createController('marginY', 0, 100);

	createController('sizeX', 1, 1000);
	createController('sizeY', 1, 1000);

	createController('letterWidth', 1, 100);
	createController('dotRadius', 1, 30);
	createController('letterPadding', 1, 30);
	createController('linePadding', 1, 30);

	createController('downPosition', 0, 30);
	createController('upPosition', 0, 30);
	createController('speed', 0, 4000);

	gui.add({download: function(){
		// const fileStream = streamSaver.createWriteStream('gcode.txt')
		// const writer = fileStream.getWriter()
		// const encoder = new TextEncoder()
		// let data = gcode.repeat(1024)
		// let uint8array = encoder.encode(data + "\n\n")
		// writer.write(uint8array)
		// writer.close()

		var a = document.body.appendChild(
			document.createElement("a")
		);
		a.download = "gcode.txt";
		a.href = "data:text/html," + gcode;
		a.click(); // Trigger a click on the element
		a.remove();

	}}, 'download')

	// Read in braille description file
	let latinToBrail = new Map();

	// latinToBrail.set('a', [1, 2]);
	// latinToBrail.set('b', [1, 4, 5]);

	for(let char in brailleJSON) {
		latinToBrail.set(char, brailleJSON[char])
	}

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
