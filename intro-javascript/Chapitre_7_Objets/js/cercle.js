var r = Number(prompt("Entrez le rayon d'un cercle :"));

// TODO : ajoutez ici la définition de l'objet cercle

var cercle = {
    rayon: r,

    perimetre: function () {
        peri = 2 * Math.PI * this.rayon; //avec le this pour la vatiable rayon, dans l'objet
        return peri;
    },

    aire: function () {
        aire = Math.pow(r, 2) * Math.PI; //sans le this pour la vatiable r ,en dehor de l'objet.
        return aire
    }
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());

//Correction/////////////////////////////////////////////////////////////////////////////////

/*
Exercice : objet cercle
*/
/*
var r = Number(prompt("Entrez le rayon d'un cercle :"));

var cercle = {
    rayon: r,

    // Renvoie le périmètre du cercle
    perimetre: function () {
        return 2 * this.rayon * Math.PI;
    },
    // Renvoie l'aire du cercle
    aire: function () {
        return this.rayon * this.rayon * Math.PI;
        // Autre possibilité
        //return Math.pow(this.rayon, 2) * Math.PI;
    }
};

console.log("Son périmètre vaut " + cercle.perimetre());
console.log("Son aire vaut " + cercle.aire());
*/