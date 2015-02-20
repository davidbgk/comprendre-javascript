/* La fonction `call` permet d'appeler une fonction en
spécifiant son `this` et ses paramètres. */

function testingCall(message) {
    return message;
}

var helloWorld = 'Hello World!';
console.log(testingCall(helloWorld));
// => "Hello World!"

console.log(testingCall.call(this, helloWorld));
// => "Hello World!"


/* La fonction `apply` permet d'appeler une fonction en
spécifian son `this` et ses paramètres sous forme de
tableau. */
console.log(testingCall.apply(this, [helloWorld]));
// => "Hello World!"


/* Les paramètres passés à une fonction se retrouvent
automatiquement dans la variable `arguments`. */
function testingArguments() {
    console.log(arguments[0]);
}
testingArguments('foo', 'bar');
// => "foo"


/* Avec cette notion, on peut rendre des scripts plus
dynamiques. */
function sayWhat() {
    console.log('What' + arguments[0]);
}
function sayWho() {
    console.log('Who' + arguments[0]);
}

function say() {
    return this['say' + arguments[0]](arguments[1]);
}
say('What', ' the fuck');
say('Who', ' the hell');
say('What');
/* Comment faire en sorte de ne pas afficher
`undefined` ? Pourrait-on utiliser `call` ? */
