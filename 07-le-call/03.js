/* Une fois les concepts `apply`, `this` et `arguments`
compris, on peut s'amuser à les combiner pour faire des
fonctions génériques. */
var GoodHunter = { bringBack: "Mushrooms" };
var BadHunter = { bringBack: "Nothing" };

function gotMushrooms(people) {
    return people.bringBack === "Mushrooms";
}

console.log(gotMushrooms(GoodHunter)); // => true
console.log(gotMushrooms(BadHunter)); // => false


/* Jusqu'ici tout va bien, maitenant trouvons la
fonction générique permettant de retourner le contraire
d'une fonction existante. */
function not(originalFunc) {
    return function () {
        return !originalFunc.apply(this, arguments);
    };
}
/* On crée dynamiquement une nouvelle fonction. */
var dontHaveMushrooms = not(gotMushrooms);

/* Qui devient directement utilisable. */
console.log(dontHaveMushrooms(GoodHunter)); // => false
console.log(dontHaveMushrooms(BadHunter)); // => true

/* Cela permet de réduire la taille du code sur des
exemples plus complexes/pertinents. */
