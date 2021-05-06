'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '👍Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); // function부터 끝까지가 event handler.- value로 작용하는 function expression. EventListener의 매개변수로 들어감
  console.log(guess);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = '👀 No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '👍Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤦‍♀️🤦‍♂️Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '👋 You lost the game! lol';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🤦‍♀️🤦‍♂️Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        '👋 You lost the game! lol';
      document.querySelector('.score').textContent = 0;
    }
  }
});
