/* Le DOM est l'arbre XML qui représente votre page
web, vous pouvez l'afficher dans votre navigateur
via clic-droit > Afficher la source. */

/* Il est possible d'accéder aux différents éléments
en JavaScript de plusieurs manières : */

/* Certains éléments sont directement accessibles via
les attributs du `document`. */
var bodyElement = document.body;
console.log(bodyElement);


/* Il est plus courant d'avoir recours à la méthode
getElementsByTagName qui retourne une liste. */
var bodyElement = document.getElementsByTagName('body');
console.log(bodyElement);


/* Vous pouvez aussi y accéder via son `id`.
Il ne retourne qu'un seul élément car un `id` est
censé être unique dans une même page. */
var bodyElement = document.getElementById('main');
console.log(bodyElement);


/* Ou sa `class` qui retourne aussi une liste. */
var bodyElement = document.getElementsByClassName('site');
console.log(bodyElement);


/* Testez les différentes méthodes pour récupérer le
paragraphe qui est dans le html proposé. */
