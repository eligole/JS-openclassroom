
var d = Number(prompt("entre le diametre"));

function perimetre(d) {
    var res_P = 2 * Math.PI * (d/2);
    return res_P;
}


function aire(d) {
    var res_A = Math.PI * ((d / 2) * (d / 2));
    return res_A;
}


console.log("Perimetre = " + perimetre(d));
console.log("Aire = " + aire(d));



/*

//Correction


//Exercice : périmètre et aire d'un cercle

// Renvoie le périmètre d'un cercle
function perimetre(rayon) {
    return 2 * Math.PI * rayon ;
}

// Renvoie l'aire d'un cercle
function aire(rayon) {
    return Math.PI * Math.pow(rayon, 2);
}

var r = Number(prompt("Entrez le rayon d'un cercle :"));
console.log("Son périmètre vaut " + perimetre(r));
console.log("Son aire vaut " + aire(r));

*/