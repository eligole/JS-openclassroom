var stylo = {
    type: "bille",
    couleur: "bleu",
    marque: "Bic"
};
//Syntaxe 1
console.log(stylo.type); // Affiche "bille"
console.log(stylo.couleur); // Affiche "bleu"
console.log(stylo.marque); // Affiche "Bic"
//Syntaxe 2
console.log(stylo['type']); // Affiche "bille"
console.log(stylo['couleur']); // Affiche "bleu"
console.log(stylo['marque']); // Affiche "Bic"

//Modifier et ajouter la proprieté d'un objet.
console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);
stylo.couleur = "rouge"; // Modifie la couleur de l'encre du stylo
console.log("Mon stylo à " + stylo.type + " " + stylo.marque + " écrit en " + stylo.couleur);
stylo.prix = 2.5; // Ajout de la propriété prix à l'objet stylo
console.log("Il coûte " + stylo.prix + " euros");


// Objet avec sa methode 'decrire' (qui est une fonction mais qu'on appel methode)

var perso = {
    nom: "Aurora",
    sante: 150,
    force: 25,

    // Renvoie la description du personnage
    decrire: function () {
        var description = this.nom + " a " + this.sante + " points de vie et " +
            this.force + " en force";
        return description;
    }
};

console.log(perso.decrire());

// Aurora est blessée par une flèche
perso.sante = perso.sante - 20;

// Aurora trouve un bracelet de force
perso.force = perso.force + 10;

console.log(perso.decrire());

//Creer un objet////////////////////////////////////////////

var perso = {}; // Création d'un objet sans aucune propriété
perso.nom = "Zoubida";
perso.sante = 150;
perso.force = 25;
// Renvoie la description du personnage
perso.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie et " +
        this.force + " en force";
    return description;
};