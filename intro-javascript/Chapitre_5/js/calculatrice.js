
function calculer(a, b, c) {

    switch (b) {
        case "+":
            var resultat = a + c;
            break;

        case "-":
            var resultat = a - c;
            break;

        case "*":
            var resultat = a * c;

            break;
        case "/":
            var resultat = a / c;
            break;
    }

    return resultat;

}



console.log(calculer(4, "+", 6));
console.log(calculer(4, "-", 6));
console.log(calculer(4, "*", 6));
console.log(calculer(4, "/", 6));

