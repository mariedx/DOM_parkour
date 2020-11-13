//Modification n°1
/* Écris une fonction changeTitles() qui va :
 1. Pointer vers le titre en haut de page ("Album Example") et le changer en "Ce que j'ai appris à THP"
2. Pointer vers le sous-titre ("Something short and leading about…") et le changer en "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel.*/

function changeTitles() {
  document.getElementsByTagName("h1")[0].innerHTML = "Ce que j'ai appris à THP";

  document.querySelectorAll("section p")[0].innerHTML = "THP est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 11 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !";
}
changeTitles()

//Modification n°2
/*Ecris une fonction changeCallToActions() qui va:
Changer le texte du bouton "Main call to action" en "OK je veux tester !"
Ajouter l'URL (un href) vers laquelle le bouton "Main call to action" va pointer : "http://www.thehackingproject.org"
Changer le texte du bouton "Secondary action" en "Non Merci"
Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer : "https://www.pole-emploi.fr/accueil/"*/

function changeCallToActions() {
  document.getElementsByClassName("btn")[0].innerHTML = "OK je veux tester !";
  document.querySelectorAll("section a")[0].setAttribute("href", "http://www.thehackingproject.org");
  document.getElementsByClassName("btn")[1].innerHTML = "Non Merci";
  document.querySelectorAll("section a")[1].setAttribute("href", "https://www.pole-emploi.fr/accueil/");
}
changeCallToActions()

//Modification n°3
/*Écris une fonction changeLogoName() qui va modifier le titre "Album" de la navbar (en haut à gauche) de la façon suivante :
Change "Album" par "The THP Experience" ;
Change la taille du texte pour le passer en 2em.*/

function changeLogoName() {
  document.querySelectorAll("svg")[0].remove()
  document.querySelectorAll("strong")[0].innerHTML = "The THP Experience";
  document.querySelectorAll("strong")[0].style.fontSize = "2em";
}
changeLogoName()
