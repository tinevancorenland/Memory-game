// https://www.youtube.com/watch?v=ZniVgo8U7ek
// Make cards flip 

const cards = document.querySelectorAll(".card");

let hasFlippedCard = false;
let firstCard, secondCard;

cards.forEach(card => card.addEventListener("click", flipCard));

function flipCard() {
  this.classList.add("flip");

  if (!hasFlippedCard) {
    //first click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    //second click
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
  }
}

function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    //it's a match: disable cards
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
  } else {
    //not a match: unflip cards
    setTimeout(() => {
      firstCard.classList.remove("flip");
      secondCard.classList.remove("flip");
    }, 1500);
  }
}