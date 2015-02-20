/* Développez la fonction `spreadify` qui permet
d'arriver au résultat suivant (équivalent de
`...arg`) : */
var someArgs = ["a", "b", "c"];
var moreArgs = [1, 2, 3];

console.log(someArgs, moreArgs);
// => ["a", "b", "c"] [1, 2, 3]

spreadify(console.log, console)(someArgs, moreArgs);
// => "a" "b" "c" 1 2 3









/* Solution */
function spreadify (fn, fnThis) {
    return function (/* accepts unlimited args */) {
        var spreadArgs = [];
        [].slice.call(arguments).forEach(function(arg) {
            if (Array.isArray(arg)) {
                spreadArgs = spreadArgs.concat(arg);
            } else {
                spreadArgs.push(arg);
            }
        });
        return fn.apply(fnThis, spreadArgs);
    };
}

/* Que retourne ceci ? */
var primes = [2, 3, 5, 7, 11];
var squares = [4, 9, 16, 25];
function sum() {
    var result = 0;
    [].slice.call(arguments).forEach(function (arg) {
        result += arg;
    });
    return result;
}
console.log(sum(primes, squares));
console.log(spreadify(sum, null)(primes, squares));


