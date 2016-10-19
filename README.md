## Flan

*english translation below*

Flou + Lent = Flan.

![Flan](https://s-media-cache-ak0.pinimg.com/originals/09/31/6a/09316a3cd644c10866cb9bd0e66e42fb.jpg)

Que devient un son lorsqu'il est flouté ?

L'application _Flan_ vise à répondre à cette question en générant deux éléments:
 - des motifs *NETS*
 - des sons correspondant à ces motifs
 
La correspondance entre motifs et sons est assez triviale:
 - symboles triangles : sons basés sur des [signaux triangles](https://fr.wikipedia.org/wiki/Signal_triangulaire)
 - symboles ronds : sons basés sur des signaux sinusoïdaux,
 - symboles rectangles : sons basés sur des signaux carrés,

Chaque ligne de motif génère un son. La position verticale de chaque ligne va impacter la hauteur du son (fréquence du signal sonore).
Les signaux sonores sont [modulés en fréquence](https://fr.wikipedia.org/wiki/Modulation_de_fr%C3%A9quence). Le nombre de motif sur une ligne va impacter la fréquence de l'onde porteuse.
La hauteur des motifs influe sur le volume du signal sonore correspondant.

La durée des sons est fonction de la largeur de la zone de motif.

L'image et le son peuvent être floutés simultanément, illustrant ainsi l'effet du flou sur ces deux médias.

Le flou appliqué sur le son est un [flou gaussien](https://fr.wikipedia.org/wiki/Fonction_gaussienne), il est appliqué sur le signal sonore généré.

### Utilisation

 - augmenter/diminuer le nombre de symbole possible par ligne: droite/gauche
 - augmenter/diminuer le nombre de ligne: haut/bas

Les controles en haut à gauche permettent de changer la taille de la zone de motif, le nombre de symbole par ligne et le nombre de ligne, la quantité de flou, et l'influence du flou sur le volume sonore.

### A essayer

 - avec une seule ligne
 - avec un seul symbole
 - observer l'influence de la modulation de fréquence sur le signal sonore
 - avec un grand nombre de lignes
 - avec un grand nombre de symboles
 - avec une zone très large, puis très petite 
 - observer l'influence du flou sur le signal sonore

## Custard

*Flan* means *custard* in French, the name comes from the contraction of *flou* (blur) and *lent* (slow).

What does sound become when it is blurred?

_Flan_ aims at answering this question by generating two things:
 - *Clear* Pattern
 - sounds corresponding to those patterns
 
 The link between patterns and sounds is simple:
  - triangle symbol: triangle sound (based on a triangle signal)
  - round symbol: sound based on a sine
  - square symbol: square sound (base on a square signal)
  
Each line of the pattern generates a sound. The pitch of the sound (frequency of the signal) is function of the vertical position of the line. Sounds are [modulated by frequency](https://en.wikipedia.org/wiki/Frequency_modulation).
The number of symbol on a line will impact the frequency of the carrier wave.
The height of the symbol will have an influence on the corresponding sound.

The duration of the sounds depends on the width of the pattern.

The image and the sound can be both blurred, giving an insight about what it means to blur a sound.

The blur applied on the sound is a [gaussian blur](https://en.wikipedia.org/wiki/Gaussian_blur).

### Usage

 - increase/decrease the number of symbols: right/left
 - increase/decrease the number of lines: up/down

The top left controls enable to change the size of the pattern zone, the number of symbol per line and the number of lines, the amount of blur, and the influence of the blur of the volume.

### To try

 - one line only
 - one symbol only
 - check the influence of frequency modulation
 - many lines
 - many symbols
 - large/small zone
 - check how blur impacts sound

