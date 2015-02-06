/* Faire une fonction qui prend une liste en
paramètre et qui affiche chacun des items.
Si l'item fait moins de 5 caractères, le faire
précéder de la chaîne '$$$'. */
















/* Solution */
function displayList(items) {
    for (var i=0, len=items.length; i < len; i++) {
        var item = items[i];
        if (item.length < 5) {
            item = '$$$' + item;
        }
        console.log(item);
    }
}

var pets = ['dog', 'ornithorynque', 'cat', 'eagle'];

displayList(pets);
// => '$$$dog', 'ornithorynque', '$$$cat', 'eagle'

/* Pourquoi pas '$$$eagle' ? Que faire pour que cela
devienne le cas ? */
