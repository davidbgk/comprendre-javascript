/* Une closure est souvent une fonction retournant
une ou plusieurs autres fonctions. Elle permet de
conserver des variables locales. */
function counter(initial) {
  var count = initial || 0;
  return {
    getCount: function getCount() {
      return count;
    },
    increment: function increment() {
      count += 1;
    }
  };
}

/* Ici on peut observer que la variable `count` qui est
pourtant définie au sein de la fonction (et donc
locale), est en fait ré-utilisée. */
var myCounter = counter();
console.log(myCounter.getCount());
myCounter.increment();
console.log(myCounter.getCount());

/* Seule l'initialisation permet de la modifier. */
var myBigCounter = counter(1000);
console.log(myBigCounter.getCount());
myBigCounter.increment();
console.log(myBigCounter.getCount());

/* Comment ajouter la possibilité d'incrémenter de
`10` ? Et de la valeur initialement passée ? */
