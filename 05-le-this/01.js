/* `this` correspond à `window` dans un navigateur
(et `global` dans nodejs). */
console.log(this);

/* Vous pouvez y attacher des variables globales, tout
ce qui n'est pas dans un scope limité se retrouve dans
ce `this`. */
this.globalVar = 'Global variable';
var anotherGlobalVar = 'Another global variable';
console.log(this.globalVar);
console.log(this.anotherGlobalVar);


/* Il est possible d'utiliser `bind` pour spécifier
le contenu du `this` pour une fonction donnée. */
function testingThis() {
    console.log(this.globalVar);
}
testingThis();
// => 'Global variable'
testingLocalThis = testingThis.bind({
    globalVar: 'Bind variable!'
});
testingLocalThis();
// => 'Bind variable!'


/* Il est important de toujours savoir quelle est la
nature du `this` utilisé dans une fonction ou un objet.
On peut rapidement s'emmeler les pinceaux. */
var counter = 0;
var module = {
    counter: 10,
    getCount: function() {
        return this.counter;
    }
};

console.log(module.getCount());
// => 10

var getCount = module.getCount;
console.log(getCount());
// => 0, utilise le `this` global!

/* Pour éviter cette situation, on spécifie
explicitement le contenu du `this` avec `bind`. */
var boundgetCount = getCount.bind(module);
console.log(boundgetCount());
// => 10
