'use strict';
const rollDiceBtn = document.querySelector('.btn--roll');
const diceImg = document.querySelector('.dice');
const holdBtn = document.querySelector('.btn--hold');
document.querySelector('.dice').classList.add('hidden');
let activePlayer = 0;
let gameEnd = false;
const increaseCurrScore = function (score) {
  const currScore = Number(
    document.querySelector(`#current--${activePlayer}`).textContent
  );
  document.querySelector(`#current--${activePlayer}`).textContent =
    currScore + score;
};
const resetPlayer = function () {
  document.querySelector(`#score--${activePlayer}`).textContent = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  if (activePlayer === 0) {
    document.querySelector(`.player--1`).classList.add('player--active');
    document.querySelector(`.player--0`).classList.remove('player--active');
    activePlayer = 1;
  } else {
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    activePlayer = 0;
  }
};
rollDiceBtn.addEventListener('click', function () {
  if (gameEnd) return;
  document.querySelector('.dice').classList.remove('hidden');
  const randomNumber = Math.trunc(Math.random() * 6) + 1;
  diceImg.src = `dice-${randomNumber}.png`;
  switch (randomNumber) {
    case 1:
      resetPlayer();
      break;
    case 2:
      increaseCurrScore(2);
      break;
    case 3:
      increaseCurrScore(3);
      break;
    case 4:
      increaseCurrScore(4);
      break;
    case 5:
      increaseCurrScore(5);
      break;
    case 6:
      increaseCurrScore(6);
      break;
    default:
      console.log('image not found');
  }
  console.log(randomNumber);
});
holdBtn.addEventListener('click', function () {
  if (gameEnd) return;
  const currScore = Number(
    document.querySelector(`#score--${activePlayer}`).textContent
  );
  const currTempScore = Number(
    document.querySelector(`#current--${activePlayer}`).textContent
  );
  document.querySelector(`#score--${activePlayer}`).textContent =
    currScore + currTempScore;
  if (currScore + currTempScore >= 100) {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');
    document.querySelector('.dice').classList.add('hidden');
    gameEnd = true;
    console.log(`Player ${activePlayer} won 🎉🎉`);
  }
  if (activePlayer === 0) {
    document.querySelector(`.player--1`).classList.add('player--active');
    document.querySelector(`.player--0`).classList.remove('player--active');
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = 1;
  } else {
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    activePlayer = 0;
  }
});
const resetGame = function () {
  gameEnd = false;
  document.querySelector(`#score--0`).textContent = 0;
  document.querySelector(`#current--0`).textContent = 0;
  document.querySelector(`#score--1`).textContent = 0;
  document.querySelector(`#current--1`).textContent = 0;
  document.querySelector('.dice').classList.add('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  document.querySelector(`.player--0`).classList.add('player--active');
  document.querySelector(`.player--1`).classList.remove('player--active');
  activePlayer = 0;
};
document.querySelector('.btn--new').addEventListener('click', resetGame);
