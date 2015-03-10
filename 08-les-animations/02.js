/* Nous allons utiliser la bibliothèque animate.css
(http://daneden.github.io/animate.css/) pour animer
un bouton d'envoi de mail lors de la soumission. */

// On démarre avec une IIFE classique sur `sendmail`.
(function (win, element) {
  "use strict";
  var animateButton = function(event) {
    // On ne souhaite pas que l'utilisateur soit
    // redirigé lors de la soumission.
    event.preventDefault();

    // Lorsque le bouton est soumis on le fait
    // clignoter et on le désactive pour éviter la
    // double soumission.
    element.classList.add("flash");
    element.innerHTML = 'Mail envoyé !';
    element.disabled = true;

    // Après un moment, on affiche un message.
    setTimeout(function(){
      var p = document.createElement('p');
      p.innerHTML = 'Vous recevrez une réponse.';
      document.body.appendChild(p);
    }, 1000);
  };
  element.addEventListener('click', animateButton);
}(this, document.getElementById('sendmail')));

/* Comment faire en sorte que le message s'affiche
uniquement à la fin de la première animation ?
Discussion sur les `promises` ? */
