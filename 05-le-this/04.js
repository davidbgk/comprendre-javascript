/* Utilisez `this` et `bind` pour créer des triangles
particuliers à partir d'une seule fonction. */

















/* Solution. */
function Triangle (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
}
Triangle.prototype.toString = function () {
    return "Triangle(" + this.a + ", " +
                         this.b + ", " +
                         this.c + ")";
};

var RightTriangle = Triangle.bind(null, 4, 3, 5);
var rightTriangle = new RightTriangle();
console.log(rightTriangle.toString());
// => "Triangle(4, 3, 5)"

var IsoscelesTriangle = Triangle.bind(null, 4, 4);
var isoscelesTriangle = new IsoscelesTriangle(7);
console.log(isoscelesTriangle.toString());
// => "Triangle(4, 4, 7)"
