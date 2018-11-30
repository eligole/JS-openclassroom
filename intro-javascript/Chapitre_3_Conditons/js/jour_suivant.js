var jour = prompt("taper un jour de la semaine");

if (jour === "Lundi") {
    console.log("le jours suivant est Mardi");
} else if (jour === "Mardi") {
    console.log("Le jours suivant est Mercredi");
} else if (jour === "Mercredi") {
    console.log("Le jours suivant est Jeudi");
} else if (jour === "Jeudi") {
    console.log("le jours suivant est vendredi");
} else if (jour === "Vendredi") {
    console.log("le jours suivant est Samedi");
} else if (jour === "Samedi") {
    console.log("le jours suivant est Dimanche");
} else if (jour === "Dimanche") {
    console.log("le jours suivant est Lundi");
} else {
    console.log("je n'ai pas compris");
}