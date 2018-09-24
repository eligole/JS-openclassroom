//var texte = "";


while ((texte !== "non") || (texte !== "oui")) {
    var texte = prompt("Voulez-vous jouer au ni oui, ni non ?");
}

if ((texte === "oui") || (texte === "non")) {
    console.log("Vous avez perdu");
}