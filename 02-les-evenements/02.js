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
function callConsoleFirst(event) {
    console.log('You clicked the "#link" element.');
    event.preventDefault();
}
function callConsoleSecond(event) {
    console.log('"#link" element clicked again.');
    event.preventDefault();
}
linkEl.addEventListener('click', callConsoleFirst);
linkEl.addEventListener('click', callConsoleSecond);

/* Essayez d'inverser l'ordre d'appel de ces fonctions.
*/
