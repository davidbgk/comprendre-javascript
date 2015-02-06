/* Itérer sur tous les paragraphes qui contiennent la
classe `introduction` et les supprimer. */


















/* Solution */

var pElements = document.querySelectorAll('p.introduction');

for (var i=0, len=pElements.length; i < len; i++) {
    var pElement = pElements[i];
    pElement.remove();
}
/* Comment afficher le contenu du paragraphe avant de
le supprimer ? Comment pourrait-on faire pour le cacher
unqiuement ? */
