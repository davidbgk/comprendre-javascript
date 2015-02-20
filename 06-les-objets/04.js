/* Écrivez un objet magasin de glaces qui hérite d'un
autre objet magasin générique. Servez des glaces ! */


















/* Solution possible. */
var Shop = {
    init: function (initial) {
        this.stock = initial;
        return this;
    },
    serve: function () {
        this.stock--;
        console.log("Bon appétit !");
    },
    restock: function (amount) {
        this.stock += amount;
        console.log("Livrés !");
    }
};
var IcecreamShop = Object.create(Shop, {
    check: {
        value: function () {
            console.log(this.stock + " glaces restantes");
        }
    }
});

icecream = IcecreamShop.init(0);
icecream.check();
// => "0 glaces restantes"
icecream.restock(10);
// => "Livrés !"
icecream.check();
// => "10 glaces restantes"
icecream.serve();
// => "Bon appétit !"
icecream.check();
// => "9 glaces restantes"
