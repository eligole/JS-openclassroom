var films = ["Le loup de Wall Street", "Vice-Versa", "Babysitting"];

console.log(films.length); // Affiche 3

//////////////////////////
//Voir tous les elements du tableau
//Methode 1
for (var i = 0; i < films.length; i++) {
    console.log(films[i]);
}
//Methode 2

films.forEach(function (film) {
    console.log(film);
});

//////////////////////////
//Ajouter un element au tableau , fonction push
films.push("Les Bronzés");
console.log(films[3]); // Affiche "Les Bronzés"

///////////////////////
//Tableau d'objet
var Film = {
    // Initialise le film
    init: function (titre, annee) {
        this.titre = titre;
        this.annee = annee;
    },
    // Renvoie la description du film
    decrire: function () {
        var description = this.titre + " (" + this.annee + ")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013);

var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015);

var film3 = Object.create(Film);
film3.init("Babysitting", 2013);

var films = [];
films.push(film1);
films.push(film2);
films.push(film3);

films.forEach(function (film) {//ici on peux aussi utiliser une boucle "for" au lieu de forEach.
    console.log(film.decrire());
});









