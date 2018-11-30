/*
En vous inspirant du cours, écrivez un programme films.js qui gère un tableau de films. 
Chaque film est caractérisé par son titre, son année de sortie et son réalisateur.
Le programme ajoute trois films de votre choix dans le tableau, puis l'affiche élément 
par élément comme indiqué ci-dessous.
*/
//var films = [];
//var film = "";

var films = {
    init: function (titre, année, realisateur) {
        this.titre = titre;
        this.année = année;
        this.realisateur = realisateur;
    },

    decrire: function () {
        description = this.titre + "(" + this.année + "," + this.realisateur + ")";
        return description;
    },
};

var titre = "";

while (titre !== "stop") {
    titre = prompt("Entrez un titre ou tapez stop pour arrêter :");
    année = prompt("Entrez une année ou tapez stop pour arrêter :");
    realisateur = prompt("Entrez un realisteur ou tapez stop pour arrêter :");

    if (titre !== "stop") {

       // var film2 = [];
         film2 = Object.create(films);
        //film.init(this.titre , this.année , this.realisateur);
        film2.init(titre, année, realisateur);

        var filmo = [];
        filmo.push(film2);

       // filmo.push(film2,film2);

        //films.push(année);
        //films.push(realisteur);
    }
}

filmo.forEach(function (film) {
    console.log(film.decrire());
});


//Correction//////////////////////////////////////


/*
Exercice : liste de films
*/
/*
var Film = {
    // Initialise le film
    init: function (titre, annee, realisateur) {
        this.titre = titre;
        this.annee = annee;
        this.realisateur = realisateur;
    },
    // Renvoie la description du film
    decrire: function () {
        var description = this.titre + " (" + this.annee + ", " + this.realisateur + ")";
        return description;
    }
};

var film1 = Object.create(Film);
film1.init("Le loup de Wall Street", 2013, "Martin Scorsese");
var film2 = Object.create(Film);
film2.init("Vice-Versa", 2015, "Pete Docter");
var film3 = Object.create(Film);
film3.init("Babysitting", 2013, "Philippe Lacheau et Nicolas Benamou");

var films = [film1, film2, film3];

films.forEach(function (film) {
    console.log(film.decrire());
});

*/