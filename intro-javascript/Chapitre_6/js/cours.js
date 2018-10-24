//Fonction length
console.log("ABC".length)
console.log("je suis une chaine".length)

//Fonction length dans une variable
var mot = "Kangourou";
var longueurMot = mot.length; // longueurMot contient la valeur 9
console.log(longueurMot); // Affiche 9

//Fonction minuscule et majuscule.
var motInitial = "Bora-Bora";
var motEnMinuscules = motInitial.toLowerCase();
console.log(motEnMinuscules); // Affiche "bora-bora"
var motEnMajuscules = motInitial.toUpperCase();
console.log(motEnMajuscules); // Affiche "BORA-BORA"

//Comparaison "strictctement egal"
var chaine = "azerty";
console.log(chaine === "azerty"); // Affiche true
console.log(chaine === "qwerty"); // Affiche false
console.log("Azerty" === "azerty"); // Affiche false à cause du A majuscule

//Comparaison avec l'utilisation d'une fonction
var valeurSaisie = "Quitter";
console.log(valeurSaisie === "quitter"); // Affiche false à cause du Q majuscule
console.log(valeurSaisie.toLowerCase() === "quitter"); // Affiche true

//Acceder a un caractere specifique d'une chaine

var sport = "Tennis-ballon"; // 13 caractères
console.log(sport.charAt(0)); // Affiche "T"
console.log(sport[0]); // Affiche "T"
console.log(sport.charAt(6)); // Affiche "-"
console.log(sport[6]); // Affiche "-"

var longueurSport = sport.length;
console.log(sport[longueurSport - 1]); // Affiche "n" (avec -1 , on affiche le denier caractere)
console.log(sport[longueurSport]); // Affiche undefined : longueur dépassée !

//Parcourir une chaine de caractere
//(mauvaise methode)
var prenom = "Odile"; // 5 caractères
console.log(prenom[0]);
console.log(prenom[1]);
console.log(prenom[2]);
console.log(prenom[3]);
console.log(prenom[4]);
//(bonne methode)//utiliser la boucle while si on ne connait pas le nombre de caractere.
var prenom = "Odile";
for (var i = 0; i < prenom.length; i++) {
    console.log(prenom[i]);
}

