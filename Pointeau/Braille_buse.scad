// L'équipe Braille Rap
// piece parametrable
// couvre buse d'imprimante 3D
// hauteur de la buse
$hauteurCyl = 13;
// nombre de pan de la buse
$panVide = 6;
// taille (taille de clé) de la tête de la buse
$taillePan = 8;
// diametre de du couvre buse pour que le plastique ne casse pas eb fonction de la taille de la buse
$diametreCyl = 2.1378618*$taillePan;
// hauteur du vide à laisser pour que la buse ne touche pasle couvre buse
$hauteurVide = 10;
// épaisseur du support du pointeau
$decaleVide =[0,0,3];
// diametre des trous optionnels de fixation à la tête
$diametreFixeVide=1;
// diaetre du trou pour le pointeau
diametrePointeau=2;


difference() {        
        cylinder(h=$hauteurCyl, r=$diametreCyl/2, center=false, $fn=200);
        translate($decaleVide){
        cylinder(h=$hauteurVide, r=$taillePan/2, center=false, $fn=$panVide);
            }
        cylinder(h=$hauteurCyl-$hauteurVide, r=$diametrePointeau/2, center=false, $fn=200);
        translate([0,0,($hauteurCyl-2)]) {
            rotate([90,0,0]){
        cylinder(h=$diametreCyl, r=$diametreFixeVide/2, center=true, $fn=200);    
            }
}
}


//echo(version=version());
// Written by Marius Kintel <marius@kintel.net>
//
// To the extent possible under law, the author(s) have dedicated all
// copyright and related and neighboring rights to this software to the
// public domain worldwide. This software is distributed without any
// warranty.
//
// You should have received a copy of the CC0 Public Domain
// Dedication along with this software.
// If not, see <http://creativecommons.org/publicdomain/zero/1.0/>.
