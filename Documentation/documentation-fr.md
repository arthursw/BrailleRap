Braille*Rap*
============

Fabrikarium 2016 : MyHumanKit, Airbus Group 

CC-By-SA

FLOSS Manuals France, Simon Descarpentries

[TOC]

Introduction
===

Braille*Rap* est un projet visant écrire du Braille sur papier à l'aide d'une imprimante 3D. L'imprimante est ainsi utilisée pour creuser le relief des lettres Braille sur la feuille (et non construire des objets en plastique). Les lettres sont ainsi embossées point par point, à la vitesse de déplacement de la buse de l'imprimante utilisée comme pointeau, ce qui s'avère plus rapide et plus fiable que le travail d'un opérateur humain (même avec les machines les plus lentes).

Pour ce faire, le texte à imprimer est d'abord saisi dans le logiciel Braille*Rap* qui le converti en Braille lisible à l'écran puis en instructions de pilotage des outils industriels à commande numérique, le G-Code. Ce G-Code est alors transmis à une imprimantes 3D libres, de la famille des RepRap. C'est d'ailleurs de ces machines de *rép*lication *rap*ide que le projet tire son nom !

Des solutions techniques spécialisées existent dans ce domaine, mais leur coût est prohibitif (plusieurs milliers d'euros), quand des miliers d'imprimantes 3D (coûtant 200 ou 300 € à produire) sont déjà disponibles, partout dans le monde, notamment via le réseau e-Nable, qui imprime déjà en 3D des prothèses de main d'enfant (plus de 400 prothèse à ce jour).

Contexte
===

Les RepRap
---

RepRap est, selon Wikipedia, la contraction de l'anglais *Replication Rapid prototyper*, pouvant se traduire par concepteur de réplication rapide. Il s'agit d'un projet britannique de l'Université de Bath lancé en 2005, visant à créer une imprimante tridimensionnelle en grande partie auto-réplicative et libre (c'est-à-dire sans brevet, et dont les plans sont disponibles pour tout le monde) sous licence Licence publique générale GNU.

RepRap désigne également plus communément les imprimantes 3D réalisées par le projet RepRap. Ce projet est maintenant développé très activement par une communauté mondiale, à la manière du logiciel libre.

Par « auto-réplication » il faut comprendre qu'une imprimante RepRap est en grande partie constituée de pièces elles-même imprimables en 3D, de sorte d'une imprimante fonctionnelle est en mesure d'aider à fabriquer la plupart des pièces d'une nouvelle imprimante.

Des milliers d'imprimantes RepRap ont donc été construites, et elles équipent bon nombre de FabLabs.

Les FabLab
---

Un FabLab (contraction de l'anglais *fabrication laboratory*, ou « laboratoire de fabrication ») est, selon Wikipedia, un tiers-lieu de type makerspace, ouvert au public, où il est mis à sa disposition toutes sortes d'outils, notamment des machines-outils pilotées par ordinateur, pour la conception et la réalisation d'objets.

La caractéristique principale des FabLab est leur « ouverture ». Ils s'adressent aux entrepreneurs, aux designers, aux artistes, aux bricoleurs, aux étudiants ou aux hackers en tout genre, qui veulent passer plus rapidement de la phase de concept à la phase de prototypage, de la phase de prototypage à la phase de mise au point, de la phase de mise au point à celle de déploiement, etc. Ils regroupent différentes populations, tranches d'âge et métiers différents. Ils constituent aussi un espace de rencontre et de création collaborative qui permet, entre autres, de fabriquer des objets uniques: objets décoratifs, objets de remplacement, prothèses, orthèses, outils…

Pour être appelé FabLab, un atelier de fabrication doit respecter la charte des FabLabs. Celle-ci a été mise en place par le [MIT](abbr:Massachusetts Institute of Technology) mais elle est désormais supportée par la FabFoundation.

Les techniques de base des FabLabs sont :

- la conception, modélisation, construction par enlèvement de matière en 2D (fraisage)
- la conception, modélisation et impression 3D (construction par ajout de matière)
- l'algorithmie par l'écriture de code embarqué ou pilotant les outils précédents
- la documentation, libre, du travail réalisé

En mai 2016, il existe selon Wikipedia 673 fab labs dans le monde dont 82 en France (des établissements pioniers, mais aussi beaucoup d'[EPN](abbr:Espaces Publics Numériques) convertis).

Le réseau e-Nable
---

Le 24 octobre 2014, une fillette de 5 ans, née avec une main gauche incomplète, devint le premier enfant anglais équipé d'une prothèse de main réalisée en impression 3D. Sa main fut conçue par l'association e-Nable, une communauté de concepteurs d'objets 3D composée d'un réseau de volontaires répartis dans le monde et comptant plusieurs milliers (7000 en 2016) d'imprimantes 3D de type RepRap. La prothèse était basée par un moulage en plâtre de la main de l'enfant, réalisé par les parents et transmis aux membres du réseau. Des prothèse plus complexes importantes et motorisées ont été réalisés depuis (intégrant des contrôles par impulsion électrique musculaire) par ces volontaires, qui ont à ce jour réalisé plus de 400 prothèses de main d'enfant.

Le projet Braille*Rap* s'inscrit dans cet élan, et vise à apporter, entre autre à ses milliers de bénévoles, un moyen rapide, efficace et peu onéreux d'imprimer à la demande de grandes quantitésde Braille partout dans le monde.

Tour d'horizon de l'existant
---

### Braille e-Book

![Modélisation du concept par Yanko Design](img/Braille_E-Book.jpg =220x271 "Modélisation du concept par Yanko Design") |
--- |
*Modélisation du concept par Yanko Design* |

Un livre numérique (ou e-Book) Braille, est une plage Braille autonome, capable d'afficher l'équivallent, en nombre de lignes, d'une page de livre, d'un coup. Pour y parvenir, des électro-aimants ou de la cire chauffée, plutôt que des plots méchaniquement déplacés pour représenter les points des lettres Brailles. Bien que la technologie ne soit pas particulièrement chère, les faibles volumes de production de ces dispositifs les rendent fort onéreux. Un concept coréen conçu par Yanko Design a attiré l'attention 2009. En 2013, un prototype anglais appelé « Anagraphs » financé par l'Union Européenne a échoué à atteindre le stade de la production. La companie autralienne Blitab a annoncé la production, pour le 4e trimestre 2016 d'une tablette Braille e-Book, à un prix attendu autour de 3000 €.

### Plage Braille

![Exemple de plage Braille, la Tactis100](img/Plage-Braille.jpg =175x90 "") |
--- |
*Exemple de plage Braille, la Tactis100* |

Une plage braille (en anglais *refreshable Braille display*) est un dispositif électro-mécanique utilisé par les aveugles pour afficher en temps réel des caractères braille, le plus souvent issus d'un ordinateur. Habituellement, ces caractères apparaissent sous forme de points saillants sur une surface plane (papier spécifique en général).

En juillet 2015, le coréen Cheonan-Si a lancé son premier modèle de plage Braille à 100 caractères, la Tactis100 (4 lignes de 25 caractères), remontant les standards d'un marché concentrés sur des dispositifs de 20, à 80 caractères. Le prix de la Tactis100 est également présenté par le fabricant comme une évolution du marché, avec 2000 USD pour 100 caractères, contre 7000 USD pour 80 caractères habituellement.

### Lumipocket 3D, une impression 3D plastic

![Modèle 3D d'une plaque Braille à imprimer](img/Lumi_3D_print.jpg =320x280 "") |
--- |
*Modèle 3D d'une plaque Braille à imprimer* |

L'entreprise Lumi Industries a conçu le Lumipocket DLP 3D, une petite imprimante 3D, annoncée en même temps qu'un logiciel capable de convertir du texte en Braille, à imprimer ensuite sous la forme d'une plaque dotée du reliefs des lettres du Braille. Ce logiciel est issu d'une collaboration entre Lumi Industries et Librarylyna, un projet visant à regrouper une grande collection de modèles de plaques Braille éducatives.

Ce principe pose toutefois le problème de la quantité de matière première utilisée pour la production des plaques imprimées.

### Impression de Braille sur papier, jusqu'ici une vision d'artiste

![Imprimante télescopique à l'apparence attrayante](img/Printing_Braille_a_design.jpg =600x461 "") |
--- |
*Le concept d'imprimante et scanner Braille de SimCheong* |

Inspiré par une histoire coréenne, cette imprimante télescopique A6-A4 à l'apparence attrayante a un objectif simple : rendre les ordinateurs plus accessible aux mal-voyants.

Malheureusement, l'artiste à l'origine de ce concept déplorait en 2012 qu'il soit impossible de réaliser l'idée en l'état actuel des technologie.

### Braigo

![Braigo, assemblage Lego Mindstorm imprimant du Braille](img/Braigo.jpg =512x341 "") |
--- |
*Braigo, assemblage Lego Mindstorm imprimant du Braille* |

Braigo (contraction de *Brai*lle + Le*go*) est le nom d'un concept d'imprimante Braille sur papier. La version 1.0 fut construite avec un kit Lego Mindstorms EV3, contenant un microprocesseur, et un ensemble d'effecteurs motorisés et de capteurs. C'est un enfant de 13 ans, Shubham Banerjee, qui l'a réalisé en 2014, dans le cadre d'un projet scolaire.

Cette imprimante présentait l'avantage d'un coût modique réputé entre 250 à 350 euros, quand les imprimantes Braille conventionnelle du marché démarrent à 1 900 USD.

Sa capacité d'impression est toutefois limitée à une bande de papier de facturette.

Le jeune inventeur travaille depuis sur de nouveaux modèles.

### Basic-D v4

![Basic-D v4](img/Basic-D_v4.jpg =400x225 "") |
--- |
*Basic-D v4, exemple d'imprimante Braille du marché* |

La Basic-D v4 se réclamme comme l'une des imprimantes Braille embossant du papier les plus vendue dans le monde.

Pour 2 495 USD, elle affiche une performance de 100 caractères par seconde.

### Plage Braille imprimée en 3D

![BRAVE_COVE](img/BRAVE_COVE_1.jpg =345x259 "") | ![BRAVE_COVE](img/BRAVE_COVE_2.jpg =345x259 "") |
:---: |
*Projets BRAVE et COVE, extraits de modèles de plage Braille imprimée* |

Prototypé pour l'équipe UCMerced Capstone, l'équipe BRAVE (pour Braille Reader for Assisting the Visually impairEd), en partenariat avec l'équipe COVE (the Center of Vision Enhancement), Merced et Solidoodle.

Leur assertion de départ est que le coût élevé des plages Braille que l'on peut trouver dans le commerce, joue un rôle important dans le fait que seuls 10% d'enfants aveugles ont l'opportunité d'apprendre le Braille. Pour améliorer cette situation, ils ont donc conçu une plage Braille imprimable en 3D.

Chaque caractère Braille y est rendu lisible à l'aide d'un dispositif proche des goupilles d'une serrure.

### Braillepost.be et les cécogrammes

L'association Belge Braillepost se propose de jouer l'intermédiaire pour n'importe quelle impression Braille à destination d'un mal-voyant, se basant sur la gratuité faite par les postes aux cécogrammes.

Rappel sur l'utilisation d'une tablette Braille
---

![Tablette d'écriture Braille traditionnelle, feuille, réglette et pointeau][tabBraille] |
--- |
*Tablette d'écriture Braille traditionnelle, feuille, réglette et pointeau* |

[tabBraille]: img/IMG_20161019_140345.jpg =480x640 "Tablette d'écriture Braille traditionnelle"

Une tablette Braille traditionnelle est une composée plaque de métal pré-embossée de plusieurs lignes de de caractères Braille, eux-même composés de 3 lignes de 2 points, ou creux. La tablette est de plus équipée d'ergo pointus à interval réguliers sur le pourtour de la tablette.

À cette plaque s'ajoute un cadre perforé de manière à ce que les trous correspondent aux ergos de la plaque. Il est ainsi possible de maintenir solidement en place une feuille de papier perforée par les ergos et retenue par le contre-cadre. Les trous effectués par les ergos permettent également de 

Papier braille : canson fin, 160g (un peu épais)
Placement de la feuille sur la tablette Braille.
Une fois la feuille alignée, un rabat permet la coince en la poinçonnant, donc la feuille peut être enlevée et remise exactement au bon endroit.
Une règlette peut s'enfiler sur les pointes de fixation du papier, elle définit les lignes.
La règlette comprends des fenêtres où perforer le papier à l'aide d'un pointeau.
Une lettre Braille est une matrice de 6 points écris sous forme de trou droite à gauche, lu sous forme de bosse de gauche à droite en retournant la feuille

### Profondeur des trous du Braille

Profondeur :

- Mesure : 0,35mm
- Théorie : 0,48mm

Espacement entre deux points d'une seule lettre :

- Mesure : 2,7mm
- Théorie : 2,3mm

Les valeurs théoriques sont extraites de : [Braille Authority of North America][bana-size].
[bana-size]: http://www.brailleauthority.org/sizespacingofbraille/index.html


Le Fabrikarium 2016
---

![Affiche du Fabrikarium de MyHumanKit et Airbus Group](img/couv-fabrikarium.jpeg =480x640 "Affiche du Fabrikarium de MyHumanKit et Airbus Group")

Du 19 au 21 octobre 2016, plus de 120 volontaires (bénévoles de l'association MyHumanKit, salariés d'Airbus Group et docsprinters de l'association FLOSS Manuals France), de divers ages et de parcours variés se sont réunis à Toulouse au Lycée Airbus, afin de travailler sur les quelques 11 projets proposés par MyHumanKit, au cours de l'évènement « Fabrikarium 2016 » organisé en collaboration et avec l'appuie technique d'Airbus Group.

Braille*Rap* faisait parti de ces projets, et voici la liste des volontaires qui ont travaillé dessus.

### Équipe du projet Braille*Rap*


- **Hugues Aubin**, coordinateur MyHumanKit (depuis le 1er avril 2016)

  Responsable du projet Braille*Rap*

  « *Le Hackathon n'est pas une compétition, n'hésitez-pas à aider les tables autour.* »
- **Damien Canac**, équique Saint Gobain
- **Simon Descarpentries**, ingénieur en informatique, gérant d'Acoeuro.com

  Présent via l'association [FLOSS Manuals France](https://flossmanuals.net), en temps que docsprinter
- **Yassine El Yacoubi**, BNP Paribas (pôle startup, un incubateur parisien)
- **Élodie Fourment**, élève au Lycée Airbus
- **Arez**, danseur classique puis, élève ingénieur en informatique en alternance via CapGemini
- **François Le Berre**, Airbus Safran (*Les Mureaux*), R&D surveillance de l'espace
  « *Voir passer les satellites…* »

  François est entre autre le garant des réalisations du projet de part sa maitrise du Braille, acquise au début de ses études pour pallier son handicap visuel. De son propre aveu, il utilise peu le Braille au quotidien, si ce n'est pour vérifier de quelle boîte de médicament il se saisi…

   François est membre de la [Fédération des aveugles de France.](http://www.aveuglesdefrance.org/)

- **Arthur Masson**, ingénieur en imagerie numérique, gérant de XXX

  Membre de l'association [Indiens dans la ville (IDLV)](http://idlv.tumblr.com/)
- **Delphine Paillon**, Airbus (bureau du CFO), océanographe de formation

  « *Réaliser l'idée d'un seul, mais à plusieurs…* »

- **Sébastien Rey**, Airbus, costing (études de coûts)

Le logiciel Braille*Rap*
===

Paramètres
---

Le pointeau adatable sur buse d'imprimante 3D
===

[illustration]

La buse d'écoulement du plastique

Exemple d'utilisation
===


Paramètres personnalisables
===

Tests d'embossages : 
--------------------
Num ; Vitesse ; profondeur ; matière embossée ; support ; appréciation du malvoyant

Pour déterminer le G-Code d'un poinçonnage de Braille.
Découverte ? Embosser sur une surface souple non-rémanante très profonde.
Embossage sur une couche de silicone (façon moule à gateau).

### Paramètres identifiés :

C'est un problème de précision, on joue avec 0,48 millimètres de profondeur visée.

- réactivité du support souple d'embossage, sous le papier. (il le faut rapide).
- vitesse de descente
- temps d'attente en position enfoncée
- vitesse de remontée

Fabrication d'un embout pour adapter un pointeau à la RepRap. (une simple bavure de fil plastique poinçonne déjà pas mal).


Pistes d'optimisation
===

- imprimer une ligne d'un coup, et pas lettre par lettre ;
- imprimer sur papier fin en mouillant, thermo-formant, puis séchant ?
- imprimer un caractère à la fois via une tête à 6 plots, un cylindre / boîte à musique ;
- design paramétrique de la taille du capuchon / pointeau, pour s'adapter à toutes les tailles de buses d'imprimante 3D ;
- prise en charge des alphabets Braille étendus (à 4 lignes de 2 points) dans la partie logicielle ;


Un peu d'humour
===
Que dit un aveugle auquel on donne une feuille de papier de verre à lire ?

- Mais que c'est écrit serré !


Lexique
===

**ABS** : Acrylonitrile Buto-Styrene (plastique dur thermoformable), utilisé comme matière première d'imprimante 3D sous la forme de bobines de fil à fondre et thermo-former.

**Braille** : Système d’écriture tactile à points saillants, à l’usage des personnes aveugles ou fortement malvoyantes.

**Buse** : Conduit ou tuyau qui sert à l'écoulement d'un fluide.

**Cécogramme** : Un cécogramme (du latin « caecus », « aveugle », et du grec « γράμμα », « caractère ») est un courrier ou un colis contenant des documents envoyés ou reçus par des déficients visuels (aveugles ou malvoyants) ou par les organisations qui les assistent (associations, établissements d'éducation spécialisée, etc.), et qui bénéficient de ce fait d'une franchise totale ou partielle dans les systèmes postaux de nombreux pays. 

**Embossage** : Faire une bosse, imprimer en relief. Ici, sur une feuille de papier, pour chaque point d'une lettre Braille.

**PLA** : Acide Polylactique (bio-pastique). Matière plastique d'origine végétale, bio-dégradable, utilisée comme matière première d'imprimante 3D, sous la forme de bobines de fil à fondre et thermo-former.


