let flippedCards = [];
let lockBoard = false;
let pairsLeft = 6;

let cards = document.querySelectorAll(".card");

cards = Array.from(cards);

cards = shuffle(cards);

let board = document.querySelector(".board");
board.innerHTML = "";
for (let card of cards) {
  board.appendChild(card);
  card.addEventListener("click", flipCard);
}

function flipCard() {
  if (lockBoard) return;
  if (this === flippedCards[0]) return;
  
  this.classList.add("flipped");

  if (flippedCards.length === 0) {
    flippedCards[0] = this;
    return;
  } else {
    lockBoard = true;
    flippedCards[1] = this;
    checkForMatch();
  }
}

function checkForMatch() {
  let isMatch = flippedCards[0].dataset.card === flippedCards[1].dataset.card;
  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  flippedCards[0].removeEventListener("click", flipCard);
  flippedCards[1].removeEventListener("click", flipCard);
  pairsLeft--;
  if (pairsLeft === 0) {
    showGameOver();
  }
  resetBoard();
}

function unflipCards() {
  setTimeout(() => {
    flippedCards[0].classList.remove("flipped");
    flippedCards[1].classList.remove("flipped");
    resetBoard();
  }, 1500);
}

function resetBoard() {
  flippedCards = [];
  lockBoard = false;
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function showGameOver() {
  let gameOver = confirm("Congratulations, you won! Play again?");
  if (gameOver) {
    window.location.reload();
  } else {
    window.close();
  }
}
