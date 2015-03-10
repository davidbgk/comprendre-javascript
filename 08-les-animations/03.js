/* Nous allons utiliser la bibliothèque Chart.js
(http://www.chartjs.org/) pour afficher les notes des
élèves de manière dynamique. */

/* On commence par les données à afficher :
2 tableaux comportant les prénoms et les notes. */
var names = [
    "Arthur", "Bertrand", "Charles", "David", "Emilie",
    "Fiona", "Gaëtan", "Hector", "Isidore", "Jérémie"
];
var notes = [13, 12, 16, 14, 11, 14, 13, 15, 13, 15];

/* On modifie les options par défaut pour avoir notre
propre échelle allant de 0 à 20 avec un pas de 1. */
var options = {
    scaleOverride: true,
    scaleSteps: 20,
    scaleStepWidth: 1,
    scaleStartValue: 0,
};

/* On peut maintenant créer la variable `data` conforme
aux attentes de chart.js avec quelques options de
couleurs. */
var data = {
    labels: names,
    datasets: [
        {
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: notes
        }
    ]
};

/* On crée enfin un graphe de type `Radar` en 2D sur
l'élément choisi avec nos données et nos options. */
var noteElement = document.getElementById("noteChart");
var ctx = noteElement.getContext("2d");
var NoteChart = new Chart(ctx).Radar(data, options);

/* Comment afficher un histogramme ? */
