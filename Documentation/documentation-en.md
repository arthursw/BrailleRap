<!-- ![Logo_BrailleRap](../Logo/logo_BrailleRap.png =743x360 "BrailleRap")-->
<h1><img src="../Logo/logo_BrailleRap.png" height="360" width="743" title="BrailleRap" alt="Logo_BrailleRap" /></h1>

Fabrikarium 2016 : [MyHumanKit](http://myhumankit.org/), Airbus Group

CC-By-SA - [FLOSS Manuals](https://flossmanuals.net) - Simon Descarpentries

<ul>
 <li><a href="#Introduction">Introduction</a></li>
 <li><a href="#Contexte">Context</a>
 <ul>
  <li><a href="#Reprap">RepRaps</a></li>
  <li><a href="#Fablab">FabLabs</a></li>
  <li><a href="#The-e-nable-network">e-Nable Networks</a></li>
  <li><a href="#tour-dhorizon-de-lexistant">Overview of existing solutions</a>
  <ul>
   <li><a href="#braille-e-book">Braille e-Book</a></li>
   <li><a href="#plage-braille">Braille boards</a></li>
   <li><a href="#lumipocket-3D-une-impression-3D-plastic">Lumipocket 3D, 3D plastic printing</a></li>
   <li><a href="#impression-de-braille-sur-papier-jusquici-une-vision-dartiste">Braille embossing, an artist vision</a></li>
   <li><a href="#braigo">Braigo</a></li>
   <li><a href="#basic-d-v4">Basic-D v4</a></li>
   <li><a href="#plage-braille-imprimée-en-3d">Plage Braille imprimée en 3D</a></li>
   <li><a href="#braillepost.be-et-les-cécogrammes">Braillepost.be et les cécogrammes</a></li>
  </ul>
  </li>
  <li><a href="#rappel-sur-lutilisation-dune-tablette-braille">Rappel sur l'utilisation d'une tablette Braille</a>
  <ul>
   <li><a href="#profondeur-des-trous-du-braille">Profondeur des trous du Braille</a></li>
  </ul>
  </li>
  <li><a href="#le-fabrikarium-2016">Le Fabrikarium 2016</a>
  <ul>
   <li><a href="#Équipe-du-projet-braillerap">Équipe du projet Braille<em>Rap</em></a>
</li>
  </ul>
  </li>
 </ul>
 </li>
 <li><a href="#le-logiciel-braillerap">Le logiciel Braille<em>Rap</em></a>
 <ul>
  <li><a href="#paramètres">Paramètres</a></li>
 </ul>
 </li>
 <li><a href="#le-pointeau">Le pointeau</a>
 <ul>
  <li><a href="#la-bavure">La bavure</a></li>
  <li><a href="#lembout-adaptable">L'embout adaptable</a></li>
  <li><a href="#supports-dembossages">Supports d'embossages</a></li>
 </ul>
 </li>
 <li><a href="#exemple-d-utilisation">Exemple d'utilisation</a>
 <ul>
  <li><a href="#préparation-de-limprimante-3d">Préparation de l'imprimante 3D</a></li>
  <li><a href="#préparation-de-limpression">Préparation de l'impression</a></li>
  <li><a href="#préparation-du-texte">Préparation du texte</a></li>
  <li><a href="#lancement-de-limpression">Lancement de l'impression</a></li>
 </ul>
 </li>
 <li><a href="#vidéo-démo">Vidéo démo</a></li>
 <li><a href="#pistes-doptimisation">Pistes d'optimisation</a></li>
 <li><a href="#un-peu-dhumour">Un peu d'humour</a></li>
 <li><a href="#lexique">Lexique</a></li>
</ul>

# Traduction Documentation BrailleRap

Introduction
===

Braille*Rap* is a project to write Braille on paper using a 3D printer. The printer is used to dig the relief of Braille letters on the paper sheet (and not to print plastic objects). The letters are embossed point by point, at the speed of the nozzle of the printer (which is used as a needle) which is faster and more reliable than the work of a human operator (even with the slowest machines), and definitely less noisy than a commercial Braille printer.

The text to emboss is first entered in the Braille*Rap* software which converts it into Braille (which you can read on screen) and in `G-Code` instructions to control industrial tools. The G-Code is then transmitted to a 3D printer (we tried with a RepRap). It is also from these machines of *rep*lication that the project gets its name!

Specialized technical solutions exist in this field, but their cost is prohibitive (several thousand euros), when thousands of 3D printers (costing 150 to 300 € to produce) are already available, everywhere in the world, especially via the network e-Nable, which already prints 3D hand prostheses 3D (more than 400 prostheses to date).

Context
===

RepRap
---

RepRap is, according to Wikipedia, the contraction of *Replication Rapid Prototype*. This is a British project from the University of Bath, launched in 2005, to create a largely self-replicating and free three-dimensional printer (that is, without a patent, and with plans available) for everyone, under GNU General Public License.

RepRap also refers more commonly to 3D printers made by the RepRap project. This project is now very actively developed by a global community, like free software.

By "self-replication" it should be understood that a RepRap printer is largely made up of parts themselves printable in 3D, so that a functional printer is able to help make most parts of a new printer.

Thousands of RepRap printers have been built, and they equip many FabLabs.

FabLab
---

A FabLab (contraction of *fabrication laboratory*) is, according to Wikipedia, a third place of type makerspace, open to the public, where it is made available all kinds of tools, including computer-controlled machine tools for designing and producing objects.

The main feature of FabLab is their "openness". They are intended for entrepreneurs, designers, artists, do-it-yourselfers, students or hackers of all kinds, who want to move quickly from the concept phase to the prototyping phase, from the prototyping phase to the development, from the development phase to the deployment phase, etc. They group different populations, age groups and different trades. They also consists in meeting places to promote collaborative creation that allows, among other things, to make unique objects: decorative objects, replacement objects, prostheses, tools ...

To be called FabLab, a manufacturing workshop must respect the FabLabs charter. This was set up by the *MIT* (Massachusetts Institute of Technology) but is now supported by the FabFoundation.

The basic techniques of FabLabs are:

- design, modeling, construction by 2D material removal (milling)
- 3D design, modeling and printing (construction by adding material)
- algorithms by writing embedded code or driving the previous tools
- free documentation of the projects

In May 2016, there are according to Wikipedia 673 FabLabs in the world, including 82 in France (pioneer establishments, but also many *EPN* (Digital Public Spaces) converted).

The e-Nable network
---

On October 24, 2014, a 5-year-old girl, born with an incomplete left hand, became the first English child equipped with a hand prosthesis made in 3D printing. His hand was designed by the association e-Nable, a community of 3D object designers made up of a network of volunteers spread around the world and counting several thousand (7000 in 2016) of 3D printers RepRap type. The prosthesis was based on a plaster cast of the child's hand, made by the parents and passed on to the members of the network. More complex, important and motorized prostheses have since been made (incorporating muscular electrical impulse controls) by these volunteers, who have so far produced more than 400 hand-held prostheses.

The Braille*Rap* project builds on this momentum and aims to provide, among other things, its thousands of volunteers with a fast, efficient and inexpensive way to print on demand large quantities of Braille around the world.

Overview of the existing
---

### Braille e-Book

! [Modeling the concept by Yanko Design] (img / Braille_E-Book.jpg "Modeling the concept by Yanko Design") |
--- |
* Modeling concept by Yanko Design * |

A Braille e-Book is a stand-alone Braille display capable of displaying the equivalent number of lines of a book page at a time. To achieve this, electro-magnets or heated wax, rather than pins, mechanically move to represent the dots composing Braille letters. Although the technology is not particularly expensive, the low production volumes of these devices make them very expensive. A Korean concept designed by Yanko Design caught the eye in 2009. In 2013, an English prototype called "Anagraphs" funded by the European Union failed to reach the production stage. The Australian company Blitab has announced the production, for the 4th quarter of 2016 of a Braille e-Book tablet, at an expected price around 3000 €.

### Refreshable Braille display

! [Refreshable Braille display, the Tactis100] (img / Braille-Beach.jpg "") |
--- |
* Example of a refreshable Braille display, the Tactis100 * |

A refreshable Braille display is an electromechanical device used by blind people to display real-time Braille characters, most often from a computer. Usually, these characters appear as highlights on a flat surface (specific paper in general).

In July 2015, Korea's Cheonan-Si launched its first 100-character Braille model, the Tactis100 (4 lines of 25 characters), which is up to the standards of a market focused on 20 to 80 character devices. The price of the Tactis100 is also presented by the manufacturer as an evolution of the market, with 2000 USD for 100 characters, against 7000 USD for 80 characters usually.

### Lumipocket 3D, a 3D plastic printing

<! -! [3D model of a Braille plate to print] (img/Lumi_3D_print.jpg=320x280 "") | ->
<img src="img/Lumi_3D_print.jpg" height = "280" width = "320" alt = "3D model of a Braille plate to print" /> |
--- |
* 3D model of a Braille plate to print * |

Lumi Industries has designed the Lumipocket DLP 3D, a small 3D printer, announced along with software that can convert text to Braille, and print it as a plate with the relief of Braille letters. This software is a collaboration between Lumi Industries and Librarylyna, a project to bring together a large collection of educational Braille plate models.

This principle, however, poses the problem of the amount of raw material used for the production of the printed plates.

### Print Braille on paper, so far an artist's vision

! [Attractive looking telescopic printer](img/Printing_Braille_a_design.jpg) |
--- |
* SimCheong Braille Printer and Scanner Concept * |

Inspired by a Korean story, this appealing A6-A4 telescopic printer has a simple goal: to make computers more accessible to the visually impaired.

Unfortunately, the artist at the origin of this concept regretted in 2012 that it is impossible to realize the idea in the current state of technology.

### Braigo

<! -![Braigo, Lego Mindstorm Assembly Printing Braille](img/Braigo.jpg "") | ->
<img src = "img / Braigo.jpg" height = "341" width = "512" alt = "Braigo, Lego Mindstorm assembly printing Braille]" /> |
--- |
* Braigo, Lego Mindstorm assembly printing Braille * |

Braigo (contraction of *Braille* Le*go*) is the name of a Braille printer concept on paper. Version 1.0 was built with a Lego Mindstorms EV3 kit, containing a microprocessor, and a set of motorized effectors and sensors. It was a 13-year-old child, Shubham Banerjee, who made it in 2014 as part of a school project.

This printer had the advantage of a low cost (between 250 to 350 euros), when the conventional Braille printers market start at 1900 USD.

Its printing capacity is, however, limited to a strip of paper.

The young inventor has since worked on new models.

### Basic-D v4

! [Basic-D v4] (img / Basic-D_v4.jpg "") |
--- |
* Basic-D v4, Braille printer example from the market * |

The Basic-D v4 claims to be one of the world's best-selling paper embossing Braille printers.

For $ 2,495, it has a performance of 100 characters per second.

### 3D printed Braille board

! [BRAVE_COVE] (img / BRAVE_COVE_1.jpg "")! [BRAVE_COVE] (img / BRAVE_COVE_2.jpg "") |
--- |
* BRAVE and COVE Projects, Braille Beach Template Extracts Printed * |

Prototyped for the UCMerced Capstone team, the BRAVE team (Braille Reader for Assisting the Visually OddEd), in partnership with the COVE team (the Center of Vision Enhancement), Merced and Solidoodle.

Their initial assertion is that the high cost of commercially available Braille tracks plays an important role in the fact that only 10% of blind children have the opportunity to learn Braille. To improve this situation, they have designed a printable Braille 3D screen.

Each Braille character is made readable by means of a device close to the pins of a lock.

### Braillepost.be and the cecograms

The Belgian association Braillepost intends to play the intermediary for any Braille printing for a blind person, based on the fact that the posts grant free of charge to the cecograms.

Reminder on the use of a Braille tablet
---

<img src = "img / IMG_20161019_140345.jpg" height = "640" width = "480" title = "Traditional Braille Writing Pad" alt = "Traditional Braille Writing Pad, Sheet, Pad and Needle" /> |
--- |
* Traditional Braille writing pad, foil, ruler and needle * |

A traditional Braille tablet consists of a metal plate pre-embossed with several lines of Braille characters, themselves composed of 3 lines of 2 points, or hollow. The tablet is also equipped with pointed lugs at regular intervals around the edge of the tablet.

A perforate frame is added to the plate so that the holes correspond to the lugs of the plate. It is thus possible to hold securely in place a sheet of paper perforated by the lugs and retained against the frame. The holes made by the lugs also allow to release and reposition exactly the embossed sheets.

The sheets used are preferably thick paper, 160 g / m 2. It is quite possible to recycle paper, magazine covers, cardboard folders ...

Once the sheet is positioned, a rule is embedded on the frame, positioned on pins pointing outside the frame. This rule has two sets of windows to guide the needle that will emboss the sheet, dot by dot.

As part of the initial project Braille*Rap*, being accompanied by a visually impaired person who knew how to use such a tablet was essential. In particular to show us how it works.

### Depth of Braille holes

We made a series of measurements on embossed Braille letters using a traditional Braille tablet.

Depth of a dot:

- Measurement: 0.35mm
- Theory: 0.48mm

Spacing between two dots of a letter:

- Measure: 2.7mm
- Theory: 2,3mm

Theoretical values are taken from: [Braille Authority of North America](http://www.brailleauthority.org/sizespacingofbraille/index.html)

We note that precision is important. The goal is to produce hollows of half a millimeter in paper.


The 2016 Fabrikarium
---

<! -! [MyHumanKit and Airbus Group Fabrikarium Poster] (img / couv-fabrikarium.jpeg = 480x640 "MyHumanKit and Airbus Group Fabrikarium Poster") | ->
<img src = "img / couv-fabrikarium.jpeg" height = "640" width = "480" title = "Fabrikarium poster from MyHumanKit and Airbus Group" alt = "Fabrikarium poster from MyHumanKit and Airbus Group" /> |
--- |
* Poster of the Fabrikarium 2016 * |

From 19 to 21 October 2016, more than 120 volunteers (MyHumanKit volunteers, employees of the sponsors and docsprinters of the FLOSS Manuals association), of various ages and backgrounds, met in Toulouse at the *Lycée Professionnel* of Airbus, to work on 11 projects proposed by MyHumanKit, during the event "Fabrikarium 2016", the biggest European hackathon dedicated to handicaps.

Braille*Rap* was one of these projects, and here is the list of volunteers who worked on it:

### Braille Project Team * Rap *

- **Hugues Aubin**, coordinator MyHumanKit (since April 1st, 2016)
  - Project Leader Braille*Rap*
  - "*The Hackathon is not a competition, do not hesitate to help the tables around.*"
- **Damien Canac**, Saint Gobain equine
- **Simon Descarpentries**, computer engineer, manager of Acoeuro.com
  - Present via the [FLOSS Manuals association] (https://flossmanuals.net), as docsprinter,
  "*No looser in a winner team, no winner in a looser team...*"
- **Yassine El Yacoubi**, BNP Paribas (innovation division, Parisian startup incubator)
- **Élodie Fourment**, student at Airbus High School
   - "*Do not doubt your abilities under the pretext that you do not know what you can bring to the team*"
- **Arezki Gastaud**, classical dancer then student computer engineer in alternation via CapGemini
- **François Le Berre**, Airbus Safran (*Les Mureaux*), R&D space surveillance
  - "*See the satellites pass...*"
  - François is, among other things, the guarantor of the project's achievements thanks to his mastery of Braille, acquired at the beginning of his studies to overcome his visual handicap. By his own admission, he uses little Braille on a daily basis, except to check which medicine box he grabs ...
  - François will present the project in December 2016 at the conference *New technology* organized by the [Federation of the Blind of France](http://www.aveuglesdefrance.org/) at the Cité des Sciences in Paris.
- **Arthur Masson**, Digital Imaging Engineer
  - Member of the Association[Indians in the City (IDLV)](http://idlv.co/)
- **Delphine Paillon**, Airbus Bureau Group, Finance Community Manager at the CFO's office, oceanographer by training, reconverted in HR and Skills Management following an evening MBA and ardent defender of collaborative intelligence.
  - "*All alone we go faster, together we go further...*"
- **Sébastien Rey**, Airbus, costing (cost studies)

Braille*Rap* software
===

Free Braille*Rap* software can be used directly at: https://arthursw.github.io/BrailleRap/

Its source code is also available in this code repository, under MIT license.

Its use is extremely simple, enter the desired text in the 1st box of text. With each letter entered, the Braille representation of the text is displayed in the box below. The 3rd frame presents the G-Code to communicate to the 3D printer.

In the top left, a window flies over these 3 frames. It presents a series of parameters and a "download" button to download the G-Code product, in the event that it would facilitate the transmission to the management software of the targeted 3D printer.

Settings
---

All dimensions are in millimeters.

- Paper dimensions:
  - **paperWidth**: width of the sheet to print
  - **paperHeight **: height of the sheet to print
  - **marginWidth**: side margin inside the printable area
  - **marginHeight**: margin above and below the printed text
- Braille letter dimensions:
  - **letterWidth**: width of the letters
  - **dotRadius**: diameter of the dots (in the braille representation on the screen)
  - **letterPadding**: margin around the letters
  - **linePadding**: gap between the lines
- Printer settings:
  - **headDownPosition**: low position of the needle when embossing the paper
  - **headUpPosition**: high position of the needle between two embossed dots
  - **speed**: speed of movement of the needle between two embossed dots (in millimeters per second)
  - **delta**: to check if the printer used is a delta printer (with three columns) as opposed to cartesian coordinate printers (close to a plotter)
- **language**: type of Braille used (letters coded on 6 or 8 points, new or old)

In this same window, the last line is a **saveGCode** button, allowing you to download the G-Code produced as an importable file then in the control software of the selected printer.

The needle
===

To obtain a good embossing, it is necessary to mark the paper sufficiently deeply, but without piercing it (the latter could lose of its mechanical resistance, and thus its capacity to be read many times).

The burr
---

A first idea, which makes it possible to obtain a correct embossing, is to use directly the nozzle of the printer, prolonged of a burr of 2 to 10 millimeters made of the generally printed plastic. Too short burr would not result in embossing deep enough to be comfortably read, and a burr that was too long would eventually bend under duress.

The adaptable tip
---

<! -! [Tip on nozzle] (img / 20161021_093329.jpg = 640x360 "Needle tip on nozzle") | ->
<img src = "img / 20161021_093329.jpg" height = "360" width = "640" title = "Needle tip on nozzle" alt = "Tip on nozzle" /> |
--- |
* Needle tip mounted on 3D printer nozzle (delta) * |

To work in a more sustainable way, we recommend using a tip, itself printed in 3D from the models provided in this repository:

- [Customizable OpenSCAD file](../Pointeau/Braille_buse.scad)
- [Printable STL file for 10 mm hex nozzle](../Stitch/covers_election_element_9.2.STL)
- [Industrial drawing in PDF format](../Pointeau/Plan_couvre_buse_9.2.PDF)

The idea was to adapt or copy the needle used by the Braillists, then to mount it on the 3D printer so that it becomes "Braillist" in turn. To do this, we took inspiration from a standard Braille tablet and needle.

<! -! [Stamped_Terminal] (img / 20161021_093451.jpg = 640x360 "Printed tip") | ->
<img src = "img / 20161021_093451.jpg" height = "360" width = "640" title = "Printed toe" alt = "Printed toe" /> |
--- |
* Printed tip seen from 3/4 top * |

This tip is a cylinder that will always have the same height once completed. This cylinder is hollow, "perforated" with a hexagonal hole to print the size of the flaps of the nozzle of your printer so as to be able to nest, with enough stress to hold it in place.

The other extremity of the cylinder is full, with the exception of a central hole, through which a pointed object, such as a nail of a upholsterer, which must be glued once positioned (a drop of strong glue fast-setting cyanoacrylates are sufficient). A good nail is 1 to 2 millimeters in diameter, about 1 to 2 centimeters long. If the nail fits hard in the nozzle, it is possible to heat it with a lighter or a soldering iron, because once warm it will soften the plastic of the tip.

The protruding tip must be filed, however, to be rounded, so as not to pierce the embossing paper.


Embossing brackets
---

<! -! [Numerous_essents] (img / 20161020_141323.jpg = 640x360 "Numerous_essays") | ->
<img src = "img / 20161020_141323.jpg" height = "360" width = "640" title = "Many_essential" alt = "Many_essential" /> |
--- |
* "Shots" of embossing tests * |

Many embossing tests were carried out during the Fabrikarium 2016. At different speeds, and different depths, on different media...

A key element for a good embossing is to place the sheet on a flexible support, not remanent (which will therefore take shape between two embossed points):

- silicone layer, 3 millimeters thick, like a pie dish;
- felt, 3 millimeters thick also (at least);
- layer of floor mats...

Overlaying a layer of felt on a layer of silicone resulted in good results.

Example of use
===

Preparation of the 3D printer
---

Measure the hex nut of the extrusion nozzle to print a needle tip compatible with the intended printer (for example from our models).

Preparation of printing
---

Provide a flexible but strong support to protect the tray (a glass in our case) from the printer.

As seen previously, we recommend a silicone plate (type cake baking equipment, Flexipan, old carpet mouse upside down or felt). We used a silicone plate covered with a piece of felt.

Place this support on the printer tray and secure it (for example with pliers).

It is important to carry out a good installation of the printing, with a careful calibration of the zero, because the problem dealt with here is a question of precision, it is about printing with paper of the hollows of 0,48 millimeters.

To do this, lower the new printhead (equipped with your needle) manually to the support on the printing plate. The ideal 0 height setting is achieved when the needle head is flush with the top of the embossing pad, that is, just flush with the felt (or other supports). To verify that you are at the right level, you can try to slide a sheet of paper, the sheet should not be able to pass under the head of the needle.

In our case, this zero position was then stored in the printer driver software via the following G-Code command: **G92 Z0**

Then raise the 10 mm printhead (command **G1 Z10**), so that you can slide the paper or cardboard to be printed and to position it on the flexible support. Your printer is ready!


Text preparation
---

Load the following URL into a browser: https://arthursw.github.io/BrailleRap/

In the first frame, enter the alphabetical version of the text to be printed in Braille. The equivalent text translated into Braille appears in the second frame. Then, in the 3rd frame, the corresponding G-Code sequence is also generated automatically according to the specified parameters.

It is then possible to copy / paste this code directly into the console of the printer driver software, or download the G-Code file to transmit it on the right machine.

Launch of printing
---

It is now possible to start Braille printing, validating your entry.

It is recommended to keep the sheet to be printed so that it does not move during printing, but watch out for the fingers!

<! -! [Attention_to_fingers] (img / 20161020_175141_.jpg = 480x640 "Be careful of the fingers!") | ->
<img src = "img / 20161020_175141_.jpg" height = "640" width = "480" title = "Be careful with fingers!" alt = "Attention_aux_digts" /> |
--- |
* Launch printing, watch out for fingers! * |

Demo video
===

[Click here to see an animated GIF print] (img / 20161020_VIDEO_FABRIKARIUM_320.gif).

Optimization tracks
===

- Support extended Braille alphabets (4 lines of 2 points) in the software part;
- Parametric design of the cap / needle size, to fit all sizes of 3D printer nozzles;
- print one character at a time via a 6-stud head, a cylinder / music box;
- print a line at once, and not letter by letter;
- print on thin paper by wetting, thermoforming, then drying?

A bit of humour
===

What does a blind man say to a sheet of sandpaper to read?
- But that's tightly written!


Lexicon
===

**ABS**: Acrylonitrile Buto-Styrene (thermoformable hard plastic), used as raw material of 3D printer in the form of coils of wire to melt and thermo-form.

**Braille**: High-pitched tactile writing system for use by blind or visually impaired people.

**Nozzle**: A pipe or pipe used for the flow of a fluid.

**Cécogramme**: A Cécogramme (from the Latin "caecus", "blind", and the Greek "γράμμα", "character") is a mail or a package containing documents sent or received by visually impaired (blind or visually impaired) ) or by the organizations assisting them (associations, institutions of specialized education, etc.), which thus benefit from a total or partial exemption in the postal systems of many countries.

**Embossing**: Make a bump, print in relief. Here, on a sheet of paper, for every point of a Braille letter.

**PLA**: Polylactic acid (bio-pastic). Plant-based plastic material, bio-degradable, used as raw material of 3D printer, in the form of coils of wire to melt and thermo-form.