/* Les chaînes de caractères peuvent être concaténées
et former de nouvelles chaînes. */
console.log('Hello ' + 'World');
var title = 'Chapter 1: ' + 'Strings and Variables';
console.log(title);


/* Il est également possible de concaténer des
variables mais il vaut mieux qu'elles soient du
même type. */
var subtitle = 'An unexpected journey';
console.log(title + ' ' + subtitle);


/* Nous avons vu les chaînes de caractères,
il est également possible de gérer des chiffres. */
var counter = 0;
counter = counter + 1;
console.log(counter);
counter += 1;
console.log(counter);


/* Il est possible d'utiliser les compteurs de boucles
pour afficher des informations. */
var colors = ['red', 'blue', 'yellow'];
for (var i=0, len=colors.length; i < len; i++) {
    var color = colors[i];
    console.log(i + 1 + color);
}

/* Pourquoi ajouter 1 ?
Pourquoi ça n'affiche pas 01red au lieu de 1red ? */
