`use strict`;
let number = Math.trunc(Math.random() * 20) + 1;
let btnClickCount = 0;

const validateNumber = function () {
  const typedNumber = Number(document.querySelector('.guess').value);
  if (!typedNumber) {
    document.querySelector('.message').textContent = '🙃 Invalid Number';
  } else if (typedNumber === number) {
    document.querySelector('.message').textContent =
      '🎉🎉 Congratulation you won!';
    const temp = `${Math.max(
      Number(document.querySelector('.score').textContent),
      Number(document.querySelector('.highscore').textContent)
    )}`;
    document.querySelector('.highscore').textContent = temp;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.fontSize = '3rem';
    return;
  } else if (typedNumber > number) {
    document.querySelector('.message').textContent = 'too high';
  } else {
    document.querySelector('.message').textContent = 'too low';
  }
  if (btnClickCount < 20) {
    btnClickCount++;
    document.querySelector('.score').textContent = `${20 - btnClickCount}`;
  }
};
const restartAgain = function () {
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing';
  document.querySelector('.score').textContent = '20';
  btnClickCount = 0;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = number;
};
document.querySelector('.check').addEventListener('click', validateNumber);
document.querySelector('.again').addEventListener('click', restartAgain);
