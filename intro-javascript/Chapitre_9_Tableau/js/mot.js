
/*fait saisir à l'utilisateur des mots jusqu'à ce qu'il saisisse "stop". 
Le programme affiche alors la liste des mots saisis.*/
var mot = "";
var mots = [];

while (mot !== "stop") {
    mot = prompt("entrer des mots");
    mots.push(mot);
}

mots.forEach(function (reponse) {
    console.log(reponse);
});

//Correction///////////////////////////////

/*
Exercice : saisie d'une liste de mots
*/
/*
var mots = [];

var mot = "";
while (mot !== "stop") {
    mot = prompt("Entrez un mot ou tapez stop pour arrêter :");
    if (mot !== "stop") {
        mots.push(mot);
    }
}

mots.forEach(function (mot) {
    console.log(mot);
});

*/

