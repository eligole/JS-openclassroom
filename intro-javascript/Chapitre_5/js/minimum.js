function petit(a, b) {

    var m = Math.min(a, b);
    //console.log(Math.min(a,b));
    return m;
}
console.log(petit(4.5, 5));
console.log(petit(19, 9));
console.log(petit(1, 1));


//Methode 2 correction

/*

// Renvoie le minimum de 2 nombres
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(4.5, 5)); // Doit afficher 4.5
console.log(min(19, 9)); // Doit afficher 19
console.log(min(1, 1)); // Doit afficher 1

*/