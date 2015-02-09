/* Ajouter un/des évènements à la page qui change(nt)
le contenu de l'élement double-cliqué. */


















/* Solution */
var mainElement = document.getElementById('main');
function modifyClicked(event) {
    var target = event.target;
    target.innerHTML = 'foo ' + target.innerHTML;
    event.preventDefault();
}
mainElement.addEventListener('dblclick',
                             modifyClicked);
/* Comment ajouter au `hover` ? Retirer l'ajout
lorsqu'on enlève la souris de l'élement ? */
