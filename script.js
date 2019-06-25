//Randomize card positions

//Make cards turn on click - got stock, to figure out further

let card = document.getElementsByClassName("card");
let cards = [...card];
let img = document.getElementsByClassName("cardIMG");
let imgs = [...img];
let i;

console.log(cards);
console.log(imgs);

for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", turnAround);
}

function turnAround() {
  console.log("hi there");
}

//Make every seperate card turn on click
//ardeche
document.getElementById("ardeche").addEventListener("click", showArdeche);

function showArdeche() {
  document.getElementById("ardecheIMG").classList.toggle("showIMG");
}
//bbq
document.getElementById("bbq").addEventListener("click", showBbq);

function showBbq() {
  document.getElementById("bbqIMG").classList.toggle("showIMG");
}
//roadtrip
document.getElementById("roadtrip").addEventListener("click", showRoadtrip);

function showRoadtrip() {
  document.getElementById("roadtripIMG").classList.toggle("showIMG");
}
//tent
document.getElementById("tent").addEventListener("click", showTent);

function showTent() {
  document.getElementById("tentIMG").classList.toggle("showIMG");
}
//ardecheMatch
document
  .getElementById("ardecheMatch")
  .addEventListener("click", showArdecheMatch);

function showArdecheMatch() {
  document.getElementById("ardecheMatchIMG").classList.toggle("showIMG");
}
//bbqMatch
document.getElementById("bbqMatch").addEventListener("click", showBbqMatch);

function showBbqMatch() {
  document.getElementById("bbqMatchIMG").classList.toggle("showIMG");
}
//roadtripMatch
document
  .getElementById("roadtripMatch")
  .addEventListener("click", showRoadtripMatch);

function showRoadtripMatch() {
  document.getElementById("roadtripMatchIMG").classList.toggle("showIMG");
}
//tentMatch
document.getElementById("tentMatch").addEventListener("click", showTentMatch);

function showTentMatch() {
  document.getElementById("tentMatchIMG").classList.toggle("showIMG");
}
//joker
document.getElementById("joker").addEventListener("click", showJoker);

function showJoker() {
  document.getElementById("jokerIMG").classList.toggle("showIMG");
}
