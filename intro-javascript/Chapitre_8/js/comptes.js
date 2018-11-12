// TODO : ajoutez ici la définition des objets nécessaires
var CompteBancaire = {
    initCB: function (nom, solde) {
        this.nom = nom;
        this.solde = solde;
    },
    decrire: function () {
        texte = "Titulaire : " + this.nom + ", solde : " + this.solde + "euros";
        return texte;
    },
    debiter: function (solde) {
        this.solde = this.solde - montant;
        return solde;
    }
};

var CompteEpargne = {

    initCE: function (nom, solde, taux) {
        this.nom = nom;
        this.solde = solde;
        this.taux = taux;
        //this.interet=interet;
    },
    decrire: function () {
        texte1 = "Titulaire : " + this.nom + ", solde : " + this.solde + "euros";
        return texte1;
    },
    crediter: function (solde) {
        this.solde = this.solde + montant;
        return solde;
    },
    //////////////////////////////////probleme ici
    ajouterInterets: function () {
        var interet = this.taux * this.solde;
        this.solde = this.solde + interet;
    }
};
//Création des prototype
var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

// Calcule et ajoute les intérêts au solde du compte
compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());

//Correction///////////////////////////////////////////////

/*
Exercice : comptes bancaires
*/
/*
var CompteBancaire = {
    // Initialise le compte bancaire
    initCB: function (titulaire, solde) {
        this.titulaire = titulaire;
        this.solde = solde;
    },
    // Crédite le compte d'un certain montant
    crediter: function (montant) {
        this.solde = this.solde + montant;
    },
    // Débite le compte d'un certain montant
    debiter: function (montant) {
        this.solde = this.solde - montant;
    },
    // Renvoie la description du compte
    decrire: function () {
        var description = "Titulaire : " + this.titulaire +
            ", solde : " + this.solde + " euros";
        return description;
    }
};

var CompteEpargne = Object.create(CompteBancaire);
// Initialise le compte épargne
CompteEpargne.initCE = function (titulaire, solde, tauxInteret) {
    this.initCB(titulaire, solde);
    this.tauxInteret = tauxInteret;
};
// Calcule et ajoute les intérêts au solde cu compte
CompteEpargne.ajouterInterets = function () {
    var interets = this.solde * this.tauxInteret;
    this.solde += interets;
};

var compte1 = Object.create(CompteBancaire);
compte1.initCB("Alex", 100);
var compte2 = Object.create(CompteEpargne);
compte2.initCE("Marco", 50, 0.05);

console.log("Voici l'état initial des comptes :");
console.log(compte1.decrire());
console.log(compte2.decrire());

var montant = Number(prompt("Entrez le montant à transférer entre les comptes :"));
compte1.debiter(montant);
compte2.crediter(montant);

compte2.ajouterInterets();

console.log("Voici l'état final des comptes après transfert et calcul des intérêts :");
console.log(compte1.decrire());
console.log(compte2.decrire());
*/