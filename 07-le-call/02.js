/* `call` permet de récupérer les méthodes d'autres
objets. */
var Car = {
    wheels: 4,
    start: function() {
        console.log('Starting with ' + this.wheels +
                    ' wheels');
    }
};

var Bike = {
    wheels: 2
};

Car.start.call(Bike);
// => "Starting with 2 wheels"


/* Ce qui peut s'avérer utile pour transformer des
`arguments`. */
function testingCallBorrow () {
    var args = Array.prototype.slice.call(arguments);
    console.log(arguments, args);
}
testingCallBorrow('foo', 'bar');


/* Ou un `querySelectorAll` en un tableau. */
var links = document.querySelectorAll('a');
for (var i=0, len=links.length; i < len; i++) {
    var link = links[i];
    console.log("Link from for " + link);
}
var linksArray = [].slice.call(links);
linksArray.forEach(function(link) {
    console.log("Link from forEach " + link);
});
/* Le second example est plus esthétique, pourquoi
utilise-t-on `[].slice` ? */
