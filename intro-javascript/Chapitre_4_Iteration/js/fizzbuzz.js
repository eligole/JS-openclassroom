
for (var i = 1; i <= 100; i++) {

    var k = '';
    var j = '';


    if ((i % 3 == k) && (i % 5 == j)) {
        console.log(k + j + "FizzBuzz");

    } else if (i % 3 == k) {
        console.log(k + "buzz");


    } else if (i % 5 == j) {
        console.log(j + "fizz");



    } else {
        console.log(i);
    }

}


/*  Corrigé 

for (var nombre = 1; nombre <= 100; nombre++) {
    if ((nombre % 3 === 0) && (nombre % 5 === 0))
        console.log("FizzBuzz");
    else if (nombre % 3 === 0)
        console.log("Fizz");
    else if (nombre % 5 === 0)
        console.log("Buzz");
    else
        console.log(nombre);
}

  */