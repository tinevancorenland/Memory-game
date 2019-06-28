// https://www.youtube.com/watch?v=ZniVgo8U7ek
// Make cards flip 

const cards = document.querySelectorAll(".card");

let hasFlippedCard = false;
let lockBoard = false; // lock game during checking for match
let firstCard, secondCard;

cards.forEach(card => card.addEventListener("click", flipCard));

function flipCard() {
  if (lockBoard) return; //game is not locked for unflipping a no-pair
  if (this === firstCard) return; //avoid a pair by clicking the same card twice
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

//Check if cards match and show pair or flip back

function checkForMatch() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {
    //it's a match: disable cards
    disableCards();
  } else {
    //not a match: unflip cards
    unflipCards();
  }
}

function disableCards() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true; //lock game during 1500 for unflipping cards
  setTimeout(() => { //set timeOut because otherwise the flipclass gets removed before you can see the second card
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
    lockBoard = false; //remove lock after flipping back
    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  })
}

shuffle();