/* Il est maintenant possible de faire des animations
et transitions en CSS assez avancées mais il peut être
parfois utile de le faire via JavaScript aussi lorsque
ça dépend de variables dynamiques. */

/* La base pour afficher/cacher des éléments : */
document.body.style.display = 'none';
document.body.style.display = '';
/* Pour rappel, il vaut mieux pour cela utiliser des
`class` CSS dédiées. */


/* Une simple fonction permettant d'afficher un élément
de manière progressive. */
function fadeIn(el) {
    el.style.opacity = 0;

    var last = Number(new Date());
    var tick = function() {
        el.style.opacity = Number(el.style.opacity) +
                           (new Date() - last) / 4000;
        last = Number(new Date());

        if (el.style.opacity < 1) {
            requestAnimationFrame(tick);
        }
    };

    tick();
}

fadeIn(document.querySelector('.animate'));

/* À quoi servent les appels à `Number()` ? Par quoi
pourrait-on les remplacer ?
http://xkr.us/articles/javascript/unary-add/ */
