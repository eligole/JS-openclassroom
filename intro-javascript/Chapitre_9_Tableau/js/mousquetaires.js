console.log("Voici les trois mousquetaires");
var Mousquetaires = ["Athose" , "Pothose" , "Aramis"] ;

for (var i = 0 ; i < Mousquetaires.length ; i++){
console.log(Mousquetaires[i]);
}

console.log("à present il sont quatre !")
Mousquetaires.push("D'artagnan");
//console.log(Mousquetaires[3]);

Mousquetaires.forEach(function(chevalier){
console.log(chevalier);

});

//correction///////////////////////////
/*
Exercice : les trois mousquetaires
*/
/*
var mousquetaires = ["Athos", "Porthos", "Aramis"];

console.log("Voici les trois mousquetaires :");
for (var i = 0; i < mousquetaires.length; i++) {
    console.log(mousquetaires[i]);
}

mousquetaires.push("D'Artagnan");

console.log("A présent, ils sont quatre !");
mousquetaires.forEach(function (mousquetaire) {
    console.log(mousquetaire);
});
*/






