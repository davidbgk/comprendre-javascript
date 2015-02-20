/* Il est possible de rendre un objet immutable avec
`Object.freeze`, les propriétés existantes ne seront
pas modifiables et de nouvelles propriétés ne pourront
être ajoutées. */

var artist = {
    name: "Aphex Twin",
    latestAlbum: "Syro"
};

Object.freeze(artist);

(function() {
    "use strict";
    artist.name = "Candy";
    // => TypeError: "name" is read-only

    artist.firstAlbum = "Selected Ambient Works";
    // => TypeError: object is not extensible
})();


/* Dans le cas où l'on souhaite rendre les propriétés
existantes modifiable MAIS l'ajout de nouvelles
propriétés impossible, il existe `Object.seal`. */
var artist = {
    name: "Aphex Twin",
    latestAlbum: "Syro"
};

Object.seal(artist);

(function() {
    "use strict";
    artist.name = "Candy";
    // => No error.

    artist.firstAlbum = "Selected Ambient Works";
    // => TypeError: object is not extensible
})();


/* Il existe également `Object.preventExtensions` qui a
sensiblement le même comportement. Quelles sont les
différences ? Quid de `Object.defineProperty` ? */

/* Possibilité de montrer `isFrozen`, `isSealed` et
`isExtensible`. */
