/* Il est possible de modifier le style d'un élement
directement en JavaScript. */
var mainElement = document.getElementById('main');
mainElement.style.backgroundColor = 'yellow';

/* Reset manuel sinon l'attribut style="" est
prioritaire sur l'ajout de `class` suivant. */
//mainElement.style = '';


/* Une bonne pratique consiste à plutôt utiliser les
`class` CSS pour séparer le style des interactions. */
mainElement.classList.add('blackBackground');


/* Pourquoi nommer une `class` CSS ainsi est une
mauvaise pratique ? Quelle alternative serait plus
pertinente ? */
