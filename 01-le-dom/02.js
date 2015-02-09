/* Il existe maintenant 2 méthodes permettant d'accéder
aux éléments de manière plus simple. */

var bodyElement = document.querySelector('body');
console.log(bodyElement);


/* La méthode `querySelectorAll` retourne une liste. */
var bodyElement = document.querySelectorAll('body');
console.log(bodyElement);


/* Il est possible de passer des `id` ou `class` à ces
méthodes. */
var bodyElement = document.querySelector('#main');
console.log(bodyElement);

var bodyElement = document.querySelectorAll('.site');
console.log(bodyElement);


/* Il est possible d'utiliser les sélecteurs CSS
classiques (comme jQuery). */
var pElements = document.querySelectorAll('#main p');
console.log(pElements);


/* Il est possible d'utiliser des sélecteurs plus
complexes comme `nth-child`. */
document.querySelector('p:nth-child(1)');


/* Essayez d'accéder au paragraphe en utilisant sa
`class`. Son `id`. Pourquoi vaut-il mieux utiliser
`getElementById` ? */
