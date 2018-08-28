var heure = Number(prompt("Entrez les heures :"));
var minute = Number(prompt("Entrez les minutes :"));
var seconde = Number(prompt("Entrez les secondes :"));


if ((heure <= 0) || (heure >= 24) || (minute <= 0) || (minute >= 60) || (seconde <= 0) || (seconde >= 60)) {

    console.log("ERREUR");

} else {
    seconde++;

    console.log("Dans une seconde, il sera " + heure + " heures, " + minute + " minutes et " + seconde + " secondes");
}