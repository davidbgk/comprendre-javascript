/* Le style pourrait être (re)défini depuis un
attribut `data-*`, ici au click sur l'élement. */
(function (win, element) {
    "use strict";
    function changeStyle(event) {
        var target = event.target;
        var style = target.getAttribute('data-class');
        if (style) {
            target.classList.toggle(style);
            event.preventDefault();
        }
    }
    element.addEventListener('click', changeStyle);

}(this, document.getElementById('main')));

/* Seuls les élements ayant un attribut `data-class`
sont affectés. */
