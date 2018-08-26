/*

var mois = Number(prompt("Entrez le Mois"));

if ((mois >= 1) && (mois <= 12)) {
    else if (mois == "1") {
        console.log("31 jours");
    }

    else if (mois == "2") {
        console.log("28 jours");
    }

    else if (mois == "3") {
        console.log("Mars");
    }

    else if (mois == "4") {
        console.log("Avril");
    }

    else if (mois == "5") {
        console.log("Mai");
    }

    else if (mois == "6") {
        console.log("Juin");
    }

    else if (mois == "7") {
        console.log("Juillet");
    }

    else if (mois == "8") {
        console.log("Aout");
    }

    else if (mois == "9") {
        console.log("Septembre");
    }

    else if (mois == "10") {
        console.log("Octobre");
    }

    else if (mois == "11") {
        console.log("Novembre");
    }

    else if (mois == "12") {
        console.log("Decembre");
    }

} else {
    console.log("erreur dans les données rentrées");
}

*/

var mois = Number(prompt("Entrez le Mois"));

if ((mois === 1) || (mois === 3) || (mois === 5) || (mois === 7) || (mois === 9) || (mois === 11)) {
    console.log("28 jours");

} else if ((mois == "2") || (mois == "4") || (mois == "6") || (mois == "8") || (mois == "10") || (mois == "12")) {
    console.log("31 jours");
} else {
    console.log("erreur dans les données rentrées");
}