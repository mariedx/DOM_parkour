//Combien y a-t-il d'éléments <p> présents dans la page HTML ?
var a = document.querySelectorAll("p");
console.log(a.length);
//20 <p>

//Quel est le contenu texte de l'élément portant l'id coucou ?
var b = document.getElementById("coucou").textContent;
console.log(b);
//Le DOM est une interface standardisée pour accéder au contenu HTML d'une page.

//Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ?
var c = document.getElementsByTagName("a")[2].getAttribute("href");
console.log(c);
//https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3501871-decouvrez-le-dom

//Combien d'éléments portent la classe compte-moi ?
var d = document.getElementsByClassName("compte-moi");
console.log(d.length);
//12

//Combien d'éléments <li> portent la classe compte-moi ?
var e = document.getElementsByTagName("li").getElementsByClassName("compte-moi");
console.log(d);
