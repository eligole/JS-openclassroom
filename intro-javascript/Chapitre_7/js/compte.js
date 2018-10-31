
var compte = {
    titulaire: "Alex",
    solde: 0,

    crediter: function (mc) {
         this.solde = this.solde + mc;
        //return solde;
    },

    debiter: function (md) {
        this.solde = this.solde - md;
       // return solde;
    },

    decrire: function () {
        var description = "Titulaire: " + this.titulaire + ", solde: " + this.solde + " euros";
        //var description = "Titulaire: " + this.titulaire + ", solde:" + compte.debiter();
        return description;
    }
};

var mc = Number(prompt("Entrez le montant à créditer :"));
compte.crediter(mc); //on passe le credit en parametre
var md = Number(prompt("Entrez le montant à débiter :"));
compte.debiter(md); //on passe le debit en parametre

console.log(compte.decrire());

///Correction//////////////////////////////////////////////////////////////
/*
Exercice : compte bancaire
*/
/*
var compte = {
    titulaire: "Alex",
    solde: 0,

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

console.log(compte.decrire());
var credit = Number(prompt("Entrez le montant à créditer :"));
compte.crediter(credit);
var debit = Number(prompt("Entrez le montant à débiter :"));
compte.debiter(debit);
console.log(compte.decrire());
*/
