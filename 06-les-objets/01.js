/* Il existe (au moins) deux moyens de gérer des
objets en JavaScript : via le `prototype` ou via
`Object.create`. */

/* Un exemple utilisant `prototype`. */
function Car(country) {
    this.country = country;
}

Car.prototype.displayOrigin = function () {
    console.log(this.country);
};

var peugeot = new Car("France");

peugeot.displayOrigin();
// => 'France'


/* Un exemple utilisant `Object.create`. */
var Bike = {
    displayOrigin: function () {
        console.log(this.country);
    }
};

var colnago = Object.create(Bike, {
    country: { value: "Italy" }
});

colnago.displayOrigin();
// => 'Italy'


/* La différence est principalement syntaxique mais il
y a des subtilités comme l'usage de `instanceof` vs.
`isPrototypeOf` pour faire des comparaisons. */

/* Quelle manière vous semble la plus intuitive ? */
