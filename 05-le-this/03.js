/* Les IIFE sont un moyen de rendre le code indépendant
du `this` global. */

var lockedRoom = (function () {
    var status = "closed";

    return {
        checkStatus: function () {
            console.log("The room is " + status);
        }
    };
})();

console.log(lockedRoom.status);
// => undefined

lockedRoom.checkStatus();
// => "The room is closed"

/* Même en forçant le `status`, on ne pourra ouvrir. */
var status = "opened";
lockedRoom.status = status;
lockedRoom.checkStatus();
// => "The room is closed"


/* Il est possible de rendre un objet chainable avec
`this` mais ce n'est pas forcément recommandé car cela
est plus difficile à débugger. */
var Man = {
    steps: 0,
    walk: function () {
        this.steps++;
        return this;
    },
    run: function () {
        this.steps += 3;
        return this;
    }
};
Man.walk().run();
console.log(Man.steps);
// => 4

var steps = 10;
Man.walk();
console.log(Man.steps);
// => à votre avis ? :)
