//Simple
/*
for (var i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " la valeur est paire");


    } else if ((i % 3 === 0) || (i % 3 === 1) || (i % 3 === 2)){// je suis ici
        console.log(i + " la valeur est impaire");
    }
}
*/
//Amelioré



for (var i = Number(prompt("entrer un nombre")); i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + " la valeur est paire");


    } else if ((i % 3 === 0) || (i % 3 === 1) || (i % 3 === 2)){// je suis ici
        console.log(i + " la valeur est impaire");
    }
}