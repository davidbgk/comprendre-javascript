/* Les dangers du this. */

/* Si vous omettez le `new` lors de la création d'un
objet, vous allez accéder au `this` global! */

r = "Variable globale";

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

// C'est ici que l'on oublie le `new`.
var blue = Color(0, 0, 255);

console.log(r);
// => 0

console.log(blue);
// => undefined


/* La solution consiste à vérifier que l'instance
est bien du type de l'objet que l'on souhaite créer. */

function Color(r, g, b) {
    // On vérifie que `this` est bien un objet `Color`.
    if (this instanceof Color) {
        this.r = r;
        this.g = g;
        this.b = b;
    } else {
        // Sinon on retourne une erreur.
        throw new Error("`Color` invoked w/o `new`");
        // Autre option moins défensive.
        //return new Color(r, g, b);
    }
}
