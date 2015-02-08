/* Il existe de nombreux évènements comme le hover
(mouseover) ou le double-click (dblclick). */
var contentEl = document.getElementById('content');
function callConsole() {
    console.log('You double-clicked the "#content"' +
                ' element.');
}
contentEl.addEventListener('dblclick', callConsole);


/* Vous pouvez attacher plusieurs réactions au même
évènement. */
var linkEl = document.getElementById('link');
function callConsoleOnce(event) {
    console.log('You clicked the "#link" element.');
    event.preventDefault();
}
function callConsoleAgain(event) {
    console.log('"#link" element clicked again.');
    event.preventDefault();
}
linkEl.addEventListener('click', callConsoleOnce);
linkEl.addEventListener('click', callConsoleAgain);

/* Essayez d'inverser l'ordre d'appel de ces fonctions.
*/
