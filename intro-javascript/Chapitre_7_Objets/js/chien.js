// TODO : ajoutez ici la définition de l'objet chien
var chien = {
    nom: "Crockdur",
    race: "matin de naples",
    taille: "75",

    aboyer: function () {
        var grrr = "Grrr ! Grrr !";
        return grrr;
    }
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());


///Correction//////////////////////////////////////////////////////////

/*
Exercice : objet chien
*/

var chien = {
    nom: "Crockdur",
    race: "mâtin de Naples",
    taille: 75,

    // Renvoie l'aboiement du chien
    aboyer: function () {
        return "Grrr ! Grrr !";
    }
};

console.log(chien.nom + " est un " + chien.race + " mesurant " + chien.taille + " cm");
console.log("Tiens, un chat ! " + chien.nom + " aboie : " + chien.aboyer());