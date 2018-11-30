var unObject = {
    a: 2
};


var unAutreObject= Object.create(unObject);

console.log(unAutreObject.a); // Affiche 2

// Crée encoreUnObjet avec unAutreObjet comme prototype
var encoreUnObjet = Object.create(unAutreObjet);

console.log(encoreUnObjet.a); // Affiche 2
console.log(encoreUnObjet.b); // Affiche undefined