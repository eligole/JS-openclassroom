var mot = prompt("entre un mot");

var longueurMot = mot.length;
var motEnMinuscules = mot.toLowerCase();
var motEnMajuscules = mot.toUpperCase();

function nbVoyelle(phrase) {
    var j = 1; //j'ajoute +1 pour ne pas démarrer l'incrmentation a 0.
    var k = 1;
    //
    for (var i = 0; i < mot.length; i++) {
        var lettre = mot[i];
        if ((lettre === "a") || (lettre === "e") || (lettre === "i") || (lettre === "o") || (lettre === "u") || (lettre === "y")) {
            var nbVoyelle = j++;
        } else {
            var nbConsonne = k++;
        }
    }
    var zgeg = "il y a " + nbVoyelle + " voyelles " + " et " + nbConsonne + " consonnes ";
    return zgeg;
}

function inverser(verlan) {
    var inverse = "";
    for (var i = mot.length - 1; i >= 0; i--) { //decrementation , ne pas oublier le -1 pour commencer par la derniere lettre.

        inverse = inverse + mot[i];
    }
    var resultat = inverse;
    return resultat;
}

console.log("le mot " + mot + " contient " + longueurMot + " caracteres");
console.log("il s'ecrit en minucule : " + motEnMinuscules);
console.log("il s'ecrit en majuscule : " + motEnMajuscules);
console.log(nbVoyelle(mot));
console.log("il s'ecrit à l'envers " + inverser(mot));

//Palindrome

if (inverser(mot).toLowerCase() === mot.toLowerCase()) {
    console.log("le mot est un palyndrome");
} else {
    console.log("Ce n'est pas un palyndrome");
}


//leet speak
/*
function trouverLettreLeet(lettre) {
    var a = lettre;

        if (lettre == "a") {
            var a = "4";
          
        } else if (lettre == "b") {
            var a = "8";

        } else if (lettre == "e") {
            var a = "3";

        } else if (lettre == "l") {
            var a = "1";

        } else if (lettre == "o") {
            var a = "0";
        }
    return a;

}*/


function trouverLettreLeet(lettre) {
    if (lettre == "a") {
        lettre = "4";

    } else if (lettre == "b") {
        lettre = "8";


    } else if (lettre == "e") {
        lettre = "3";

    } else if (lettre == "l") {
        lettre = "1";

    } else if (lettre == "o") {
        lettre = "0";
    }
    return lettre;
}

// Renvoie un mot converti en "leet speak"
function convertirEnLeetSpeek(mot) {
    var motLeet = "";
    for (var i = 0; i < mot.length; i++) {
        motLeet = motLeet + trouverLettreLeet(mot[i]);
    }
    return motLeet;
}

console.log(convertirEnLeetSpeek(mot));



//Correction/////////////////////////////////////////////////////

/*
 Exercice : analyse d'un mot


// Renvoie le nombre de voyelles d'un mot

function compterNbVoyelles(mot) {
    var nbVoyelles = 0;
    for (var i = 0; i < mot.length; i++) {
        var lettre = mot[i].toLowerCase();
        if ((lettre === 'a') || (lettre === 'e') || (lettre === 'i') ||
            (lettre === 'o') || (lettre === 'u') || (lettre === 'y')) {
            nbVoyelles++;
        }
    }
    return nbVoyelles;
}

// Renvoie un mot écrit à l'envers
function inverser(mot) {
    var motInverse = "";

    // Solution 1 : ajouter chaque lettre au début du mot inversé
    for (var i = 0; i < mot.length; i++) {
        motInverse = mot[i] + motInverse;
    }

    // Solution 2 : parcourir le mot de la fin vers le début
    /*for (var i = mot.length - 1; i >= 0; i--) {
        motInverse = motInverse + mot[i];
    }*/
/*
    return motInverse;
}

// Renvoie un mot converti en "leet speak"
function convertirEnLeetSpeek(mot) {
    var motLeet = "";
    for (var i = 0; i < mot.length; i++) {
        motLeet = motLeet + trouverLettreLeet(mot[i]);
    }
    return motLeet;
}

// Renvoie l'équivalent "leet speak" d'une lettre
function trouverLettreLeet(lettre) {
    // Par défaut, la lettre ne change pas
    var lettreLeet = lettre;
    switch (lettre.toLowerCase()) {
    case "a":
        lettreLeet = "4";
        break;
    case "b":
        lettreLeet = "8";
        break;
    case "e":
        lettreLeet = "3";
        break;
    case "l":
        lettreLeet = "1";
        break;
    case "o":
        lettreLeet = "0";
        break;
    case "s":
        lettreLeet = "5";
        break;
    case "t":
        lettreLeet = "7";
        break;
        // ...
    }
    return lettreLeet;
}

var motSaisi = prompt("Entrez un mot :");

var longueurMot = motSaisi.length;
console.log("Le mot " + motSaisi + " contient " + longueurMot + " caractère(s)");
console.log("Il s'écrit en minuscules " + motSaisi.toLowerCase());
console.log("Il s'écrit en majuscules " + motSaisi.toUpperCase());

var nbVoyelles = compterNbVoyelles(motSaisi);
console.log("Il contient " + nbVoyelles + " voyelle(s) et " + (longueurMot - nbVoyelles) + " consonne(s)");

var motInverse = inverser(motSaisi);
console.log("Il s'écrit à l'envers " + inverser(motSaisi));

if (motInverse.toLowerCase() === motSaisi.toLowerCase()) {
    console.log("C'est un palindrome");
} else {
    console.log("Ce n'est pas un palindrome");
}

var motLeetSpeak = convertirEnLeetSpeek(motSaisi);
console.log("Il s'écrit en leet speak " + motLeetSpeak);
*/