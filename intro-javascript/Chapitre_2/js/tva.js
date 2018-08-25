var prixHt = Number(prompt("Entrez le prix HT "));
var prixTTC = (prixHt*0.196)+prixHt;
console.log ("le prix TTC est de "+ prixTTC +"€");