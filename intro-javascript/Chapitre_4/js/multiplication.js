// Verison A
/*
var table = "";

while ((table >= 1) || (table <= 10)) {
    var table = Number(prompt("entre la table de multiplication"));
    if (table === 1) {
        console.log
        console.log("1x0=");
    }
    if (table === 2) {
        console.log("2x0=");
    }
    if (table === 3) {
        console.log("3x0=");
    }
    if (table === 4) {
        console.log("4x0");
    }
    if (table === 5) {
        console.log("5x0=");
    }
    if (table === 6) {
        console.log("6x0=");
    }
    if (table === 7) {
        console.log("7x0=");
    }
    if (table === 8) {
        console.log("8x0");
    }
    if (table === 9) {
        console.log("9x0");
    }
    if (table === 10) {
        console.log("10x0");
    }
}*/

//Version B (while + for)

/*
var table ="";

while((table <= 2) || (table >=9)){
var table = Number(prompt("entrer la table de multiplication"));
}

for (i=1 ; i<=10 ; i++){
console.log(table+ "x" +i +"=" +table * i);
}
*/

// Version C (While)

var table = "";

while ((table <= 2) || (table >= 9)) {
    var table = Number(prompt("entrer la table de multiplication"));
}

var i = "";
while ( i <= 10) {

    console.log(table + "x" + i++ + "=" + table * i);

// ou 

/*
console.log(table + "x" + i + "=" + table * i);
i++;
*/

}
