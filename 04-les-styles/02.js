/* La `classList` contient plusieurs fonctions
permettant de vérifier la présence, d'ajouter ou de
supprimer une `class` d'un élément. */
var contentElement = document.getElementById('content');

function changeBackground() {
    var classList = contentElement.classList;
    if (classList.contains('blackBackground')) {
        classList.remove('blackBackground');
    } else {
        classList.add('blackBackground');
    }
}

contentElement.addEventListener('click',
                                changeBackground);


/* Il existe aussi le raccourci `toggle` lorsque vous
avez juste à permuter la présence d'une `class`. */
(function (win, element) {
    var changeBackground = function(event) {
        element.classList.toggle('blackBackground');
        event.preventDefault();
    };
    element.addEventListener('click',
                             changeBackground);
}(this, document.getElementById('link')));
