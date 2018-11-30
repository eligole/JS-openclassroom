//console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
//fonction random : chiffre au hazard
//fonction floor : retire les decimales (chiffre apres la virgule)
//+1 = je pense qu'elle permet d'eviter d'avoir un zero.

var solution = Math.floor(Math.random() * 100) + 1;
//console.log(solution);
var x = Number(prompt("entrer une valeur"));
for (var i = 1; i <= 6; i++) {
    //var x = Number(prompt("entrer une valeur"));
    if (i >= 6) {
        console.log("vous avez depassé le nombre d'essai");

    } else if (x < solution) {
        console.log("votre valeur doit etre plus grande");
       var x = Number(prompt("entrer une valeur"));
    } else if (x > solution) {
        console.log("votre valeur doit etre plus petite");
        var x = Number(prompt("entrer une valeur"));
    } else if (x === solution) {
        console.log("vous avez trouvé la bonne réponse");
    }

    /*
    else (x === solution) {
        console.log("vous avez trouvé la bonne réponse");

    }*/

}

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");