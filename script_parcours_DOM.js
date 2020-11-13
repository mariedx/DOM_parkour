//1. Combien y a-t-il d'éléments <p> présents dans la page HTML ?
var a = document.querySelectorAll("p");
console.log(a.length);
//20 <p>

//2. Quel est le contenu texte de l'élément portant l'id coucou ?
var b = document.getElementById("coucou").textContent;
console.log(b);
//Le DOM est une interface standardisée pour accéder au contenu HTML d'une page.

//3. Quelle est l'URL vers laquelle pointe le 3ème élément <a> de la page HTML ?
var c = document.getElementsByTagName("a")[2].getAttribute("href");
console.log(c);
//https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3501871-decouvrez-le-dom

//4. Combien d'éléments portent la classe compte-moi ?
var d = document.getElementsByClassName("compte-moi");
console.log(d.length);
//12

//5. Combien d'éléments <li> portent la classe compte-moi ?
var e = document.querySelectorAll("li.compte-moi");
console.log(e.length);
//6

//Combien d'éléments <li> et situés dans une liste ordonnée portent la classe compte-moi ?
var e = document.querySelectorAll("ol li.compte-moi");
console.log(e.length);
//1

//La page contient un seul élément <div>. Celui-ci contient 2 éléments "unordered list" ou <ul>. Dans le second <ul>, le premier élément de la liste (tag <li>) est caché visuellement de l'utilisateur mais toi, tu peux en récupérer le contenu.
var f = document.querySelectorAll("div ul")[1];
var e = f.getElementsByTagName('li')[0];
console.log(e)