/* L'héritage de vos objets dépend de la façon dont
vous les avez construits (`prototype` ou
`Object.create`). */

/* Dans le cas de `prototype` : */
function Animal(name) {
    this.name = name;
}
Animal.prototype.hunt = function () {
    console.log(this.name + " is hunting!");
};
function Bird(name) {
    // Initialisation manuelle de l'Animal.
    Animal.call(this, name);

    this.wings = true;
}
Bird.prototype = new Animal();
Bird.prototype.fly = function () {
    console.log(this.name + " is flying.");
};

var eagle = new Bird("Eagle");
eagle.fly();
// => Eagle is flying.
eagle.hunt();
// => Eagle is hunting!


/* Dans le cas de `Object.create` : */
var book = {
    opening: function() {
        console.log(this.name + " is opened.");
    }
};
var comic = Object.create(book, {
    name: { value: "Kenshin" },
    reading: {
        value: function() {
            console.log(this.name + " is read!");
        }
    }
});

comic.opening();
// => Kenshin is opened.
comic.reading();
// => Kenshin is read!

/* Comment vérifier/documenter que `this.name` existe
dans `book.opening` ? */

/* Que se passe-t-il lorsqu'on passe `null` en premier
paramètre de `Object.create` ? */
