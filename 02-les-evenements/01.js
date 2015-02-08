/* Les évènements permettent de définir des actions
à réaliser en fonctions des interactions de
l'utilisateur. */

/* Il faut utilise la méthode `addEventListener` pour
lier un élement, une interaction et une fonction. */
var mainElement = document.getElementById('main');
function callConsole() {
    console.log('You clicked the "#main" element.');
}
mainElement.addEventListener('click', callConsole);


/* Historiquement c'est `onclick` qui était utilisé
pour attacher un évènement à un élement. Ce n'est plus
utilisé car cela écrase les précédents évènements. */
//mainElement.onclick = callConsole;


/* Si vous ajoutez un évènement à un lien `a`, il faut
généralement arrêter la propagation des évènements
suivants pour ne pas être redirigé vers la page liée.
*/
var linkElement = document.getElementById('link');
function callConsoleWithEvent(event) {
    console.log('You clicked the "#link" element.');
    event.preventDefault();
}
linkElement.addEventListener('click',
                             callConsoleWithEvent);

/* Pourquoi est-ce que la console indique que l'élément
`#main` a également été cliqué ? */
