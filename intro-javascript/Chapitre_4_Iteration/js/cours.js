//Boucle While
/*
console.log("Debut du programme");
var nombre = 1;

while (nombre <= 5) {

    console.log(nombre);
    nombre++;
}
console.log("Fin du programme");
*/

//Boucle For
/*
for (var nombre = 1 ; nombre <= 5 ; nombre ++){

console.log(nombre);
}
*/

// choix entre while et for

/*
le choix entre un while et un for dépend du contexte. 
Toutes les boucles peuvent s'écrire avec un while.
 Si on peut prévoir à l'avance le nombre de tours
  de boucles à effectuer, la boucle for est le 
  meilleur choix. Sinon, 
  il vaut mieux utiliser le while.
*/

// Exemple
var lettre = "";
while (lettre !== "X") {
    lettre = prompt("Tapez une lettre ou X pour sortir");
    console.log(lettre);
}

// Exemple 2 (avec for)

/*
var lettre = "";
for (; lettre !== "X";) {
    lettre = prompt("Tapez une lettre ou X pour sortir :");
    console.log(lettre);
}
*/
