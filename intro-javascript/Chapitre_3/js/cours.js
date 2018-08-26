var nombre = Number(prompt("Entrez un nombre :"));

if (nombre > 0) {
    console.log(nombre + " est positif");
}else {
    
    if (nombre < 0){
        console.log(nombre + " est negative");
    }else {
        console.log (nombre + " est nul");
    }
}


// Version similaire (plus courte)******

/*
var nombre = Number(prompt("Entrez un nombre :"));
if (nombre > 0) {
    console.log(nombre + " est positif");
} else if (nombre < 0) {
    console.log(nombre + " est négatif");
} else {
    console.log(nombre + " est nul");
}

*/


var meteo = prompt("Quel temps fait-il dehors ?");
if (meteo === "soleil") {
    console.log("Sortez en t-shirt.");
} else if (meteo === "vent") {
    console.log("Sortez en pull.");
} else if (meteo === "pluie") {
    console.log("Sortez en blouson.");
} else if (meteo === "neige") {
    console.log("Restez au chaud à la maison.");
} else {
    console.log("Je n'ai pas compris !");
}

//  !! Operateur d'egalité !! ********

/* (il y a 2 operateurs d'egalités)
l'égalité stricte (ou identité ou « triple égal ») utilisant ===,
l'égalité faible (ou « double égal ») utilisant ==,

Exemples (sources : https://developer.mozilla.org/fr/docs/Web/JavaScript/Les_différents_tests_d_égalité)
*/

//Autre methode pour les conditions ********

/*
var meteo = prompt("Quel temps fait-il dehors ?");
switch (meteo) {
case "soleil":
    console.log("Sortez en t-shirt.");
    break;
case "vent":
    console.log("Sortez en pull.");
    break;
case "pluie":
    console.log("Sortez en blouson.");
    break;
case "neige":
    console.log("Restez au chaud à la maison.");
    break;
default:
    console.log("Je n'ai pas compris !");
}
*/
