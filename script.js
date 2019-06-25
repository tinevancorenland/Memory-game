//Randomize card positions

//Make cards turn on click

// function turnArdeche() {
//   let ardeche = document.getElementById("ardeche");
//   ardeche.classList.toggle("imgArdeche");
// }

// function turnArdecheMatch() {
//   let ardecheMatch = document.getElementById("ardecheMatch");
//   ardecheMatch.classList.toggle("imgArdecheMatch");
// }

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

document.getElementById("ardeche").addEventListener("click", show);

function show() {
  document.getElementById("ardecheIMG").classList.toggle("showIMG");
}
