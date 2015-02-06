/* Voici une méthode permettant d'avoir le même
comportement que jQuery, elle provient de :
http://blog.garstasio.com/you-dont-need-jquery/ */

/* On commence par définir un élément `$` sur `window`
qui représente la fenêtre de votre navigateur. */
window.$ = function(selector) {
    /* Par défaut c'est `querySelectorAll` qui va être
    utilisé pour sélectionner une liste d'éléments. */
    var selectorType = 'querySelectorAll';

    /* Mais dans le cas où l'élément demandé commence
    par `#`, on présage qu'il s'agit de récupérer un
    élément par son `id`. C'est optimiste et ça exclue
    la possibilité de faire `#site .introduction` par
    exemple. */
    if (selector.indexOf('#') === 0) {
        /* `getElementById` est aussi plus rapide. */
        selectorType = 'getElementById';
        /* On retire ici le premier caractère (`#`). */
        selector = selector.substr(1, selector.length);
    }

    return document[selectorType](selector);
};

/* On peut ensuite l'utiliser directement comme avec
jQuery. On récupère une liste */
var bodyElement = $('body');
console.log(bodyElement);

var bodyElement = $('.site');
console.log(bodyElement);

/* Dans le cas d'un `id`, un seul élément est
retourné car un `id` doit être unique. */
var bodyElement = $('#main');
console.log(bodyElement);
