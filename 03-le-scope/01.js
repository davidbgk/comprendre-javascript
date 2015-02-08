/* Les variables JavaScript peuvent être accessible
globalement ou localement. */

/* Une variable définie à la racine d'un import devient
globale. Elle peut être appelée au sein d'une fonction.
*/
var globalThing = 'A global var';

function displayThing() {
    console.log(globalThing);
}
displayThing();


/* Si cette variable est écrasée dans une autre
fonction cela peut être dangereux car elle va établir
une dépendance entre les deux fonctions. */
function modifyThing() {
    globalThing = 'A hacked global var';
    console.log('globalThing has been hacked!');
}
modifyThing();
displayThing();


/* Une solution est de ne définir que des variables
locales au sein des fonctions. */
function goodCitizen() {
    var localThing = 'A local var';
    console.log(localThing);
}
goodCitizen();

/* Quelle sera l'erreur retournée par cet appel ? */
// console.log(localThing);
