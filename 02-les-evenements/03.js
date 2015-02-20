/* Il est parfois nécessaire de déleguer l'évènement à
un élement enfant pour ne pas avoir à attacher trop
d'évènements (sur une liste par exemple). */
var mainElement = document.getElementById('main');
function deleteDoubleClicked(event) {
    var target = event.target;
    target.remove();
    console.log('You deleted ' + target);
    event.preventDefault();
}
mainElement.addEventListener('dblclick',
                             deleteDoubleClicked);

/* Comment afficher un message plus explicite ?
(introduction à `inner/outerHTML`) */

/* Comment retirer les espaces ? */
function trim(string) {
    /* Détection des fonctionnalités disponibles dans
    le navigateur. */
    if (string.trim) {
        return string.trim();
    }
    return string.replace(/^\s+|\s+$/g, '');
}

/* Il est courant de devoir récupérer la classe d'un
élement parent de celui qui est cliqué. */
var linkElement = document.getElementById('link');
function getParentClass(event) {
    var parent = event.target.parentNode;
    console.log('Parent class: ' + parent.className);
    event.preventDefault();
}
linkElement.addEventListener('click', getParentClass);

/* Comment changer la `class` de ce parent ?
(introduction à classList) */
