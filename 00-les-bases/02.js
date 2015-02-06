/* Voici une liste d'éléments. */
var colors = ['red', 'blue', 'yellow'];


/* Il est possible d'itérer sur chaque élément d'une
boucle ainsi. */
for (var i=0, len=colors.length; i < len; i++) {
    var color = colors[i];
    console.log(color);
}


/* Il est possible de tester des conditions, par
exemple sur la taille d'une liste. */
if (colors.length > 2) {
    console.log('OK');
}
if (colors.length > 5) {
    console.log('KO');
}


/* Il est possible de combiner les deux. */
for (var i=0, len=colors.length; i < len; i++) {
    var color = colors[i];
    if (color.length > 5) {
        console.log('OK');
    }
}

/* Combien de 'OK' vont s'afficher dans la console ? */
