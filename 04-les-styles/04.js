/* Utiliser la liste des boutons afin de changer la
couleur du background du body au click. */


















/* Solution */
(function (win, element) {
    "use strict";
    function changeColor(event) {
        var target = event.target;
        var style = target.getAttribute('data-class');
        if (style) {
            document.body.classList.add(style);
            event.preventDefault();
        }
    }
    element.addEventListener('click', changeColor);

}(this, document.getElementById('colors')));

/* Comment faire un bouton reset ? Comment éviter
l'accumulation de `class` sur le body ? */
