var Personnage = {
    // Initialise le personnage
    initPerso: function (nom, sante, force) {
        this.nom = nom;
        this.sante = sante;
        this.force = force;
    }
};

var Joueur = Object.create(Personnage);
// Initialise le joueur
Joueur.initJoueur = function (nom, sante, force) {
    this.initPerso(nom, sante, force);
    this.xp = 0; // L'expérience du joueur est toujours initialisée à 0
};
// Renvoie la description du joueur
Joueur.decrire = function () {
    var description = this.nom + " a " + this.sante + " points de vie, " +
        this.force + " en force et " + this.xp + " points d'expérience";
    return description;
};

var Adversaire = Object.create(Personnage);
// Initialise l'adversaire
Adversaire.initAdversaire = function (nom, sante, force, race, valeur) {
    this.initPerso(nom, sante, force);
    this.race = race;
    this.valeur = valeur;
};

// ...

// ...

var joueur1 = Object.create(Joueur);
joueur1.initJoueur("Aurora", 150, 25);

var joueur2 = Object.create(Joueur);
joueur2.initJoueur("Glacius", 130, 30);

console.log("Bienvenue dans ce jeu d'aventure ! Voici nos courageux héros :");
console.log(joueur1.decrire());
console.log(joueur2.decrire());

var monstre = Object.create(Adversaire);
monstre.initAdversaire("ZogZog", 40, 20, "orc", 10);

console.log("Un affreux monstre arrive : c'est un " + monstre.race + " nommé " + monstre.nom);