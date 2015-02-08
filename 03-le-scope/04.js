/* Compter le nombre de clics sur une page, et,
indépendamment, le nombre de clics sur les liens de
cette page (en utilisant IIFE et closures). */


















/* Solution */
function counter() {
    var count = 0;
    return {
    getCount: function getCount() {
      return count;
    },
    increment: function increment() {
      count += 1;
    }
  };
}
var globalCounter = counter();
var linksCounter = counter();

(function (win, element) {
    "use strict";
    function countClicks(event) {
        globalCounter.increment();
        console.log('Number of clicks: ' +
                    globalCounter.getCount());
        event.preventDefault();
    }
    element.addEventListener('click', countClicks);
}(this, document.body));

(function (win, links) {
    "use strict";
    function countClicklinks(event) {
        linksCounter.increment();
        console.log('Number of links clicked:' +
                    linksCounter.getCount());
        event.preventDefault();
    }
    for (var i = 0, len = links.length; i < len; i++) {
        links[i].addEventListener('click',
                                  countClicklinks);
    }
}(this, document.getElementsByTagName('a')));
