/* Pour pallier le problème de variable globale, il
existe les IIFE:
http://benalman.com/news/2010/11/immediately-invoked-function-expression/#iife
*/

/* La partie contenue entre parenthèses devient locale
et découplée des autres scripts. */
var bodyElement = document.body;
(function (win, element) {
    var helloWorld = 'Hello World!';
    function handleClick(event) {
        console.log(helloWorld);
        event.preventDefault();
    }
    element.addEventListener('click', handleClick);
}(this, bodyElement));

/* C'est un pattern courant, la variable `helloWorld`
n'est pas accessible en dehors de l'IIFE. */

/* On lui adjoint généralement l'instruction
`use strict` qui donne des indications supplémentaires
sur le respect du scope sans vérifier les scripts tiers
pour autant (et donc éviter la génération d'erreurs).
*/
(function (win, element) {
    "use strict";
    var helloWorld2 = 'Hello World2!';
    function handleClick(event) {
        console.log(helloWorld2);
        event.preventDefault();
    }
    element.addEventListener('dblclick', handleClick);
}(this, bodyElement));

/* Que se passe-t-il lorsque l'on enlève le mot-clé
`var` de la définition d'`helloWorld`, qu'en est-il
pour `helloWorld2` ? */


/* Attention à la création de fonctions au sein des
boucles, même au sein d'une IIFE ! */
(function(target) {
    var ul = document.createElement('ul');
    for (var i = 0; i < 3; i++) {
        var li = document.createElement('li');
        li.innerHTML = 'link ' + i;
        function displayI(event) {
            alert(i);
            event.preventDefault();
        }
        li.addEventListener('click', displayI);
        ul.appendChild(li);
    }
    target.appendChild(ul);
})(document.body);
/* Qu'affiche systématiquement le `alert()` ? Comment
corriger ce problème ? */
