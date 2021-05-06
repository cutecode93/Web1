'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = [218, 309, 901, 912, 1013, 1204, 1230, 613];
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber[0]) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🙄 Cur...tain?');
    document.querySelector('.number').textContent = secretNumber[0];
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('body').style.backgroundImage = "url('JHOPE_2.jpg')";
    document.querySelector('body').style.backgroundSize = cover;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess === secretNumber[1]) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('😾 ya jajonshimdo upnya!');
    document.querySelector('.number').textContent = secretNumber[1];
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('body').style.backgroundImage = "url('SUGA_2.jpg')";
    document.querySelector('body').style.backgroundSize = cover;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess === secretNumber[2]) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('😣 4...4 Ddalla?');
    document.querySelector('.number').textContent = secretNumber[2];
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('body').style.backgroundImage = "url('JK.jpg')";
    document.querySelector('body').style.backgroundSize = cover;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess === secretNumber[3]) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('😝 bugatiii ggaaaaaang~~~~');
    document.querySelector('.number').textContent = secretNumber[3];
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('body').style.backgroundImage = "url('RM_2.jpg')";
    document.querySelector('body').style.backgroundSize = cover;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess === secretNumber[4]) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🥰 Gudok, Joahyo, Alarm suljeong~ ><');
    document.querySelector('.number').textContent = secretNumber[4];
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('body').style.backgroundImage = "url('JIMIN_2.jpg')";
    document.querySelector('body').style.backgroundSize = cover;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess === secretNumber[5]) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('😘 Gudok, Joahyo, Alarm suljeong ggaji!');
    document.querySelector('.number').textContent = secretNumber[5];
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('body').style.backgroundImage = "url('JIN_2.jpg')";
    document.querySelector('body').style.backgroundSize = cover;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess === secretNumber[6]) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('😃 uh? Ricafrio!!!');
    document.querySelector('.number').textContent = secretNumber[6];
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('body').style.backgroundImage = "url('V.jpg')";
    document.querySelector('body').style.backgroundSize = cover;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess === secretNumber[7]) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🌸 Our Forever HYYH');
    document.querySelector('.number').textContent = secretNumber[7];
    document.querySelector('.number').style.width = '25rem';
    document.querySelector('body').style.backgroundImage = "url('bts.jpg')";
    document.querySelector('body').style.backgroundSize = cover;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage("🤦‍♀️🤦‍♂️ Wrong Number! it's super easy");
      score--;
      document.querySelector('.score').textContent = score;
    } else if (score === 0) {
      displayMessage('👋 You BABO! no more chance');
      document.querySelector('.score').textContent = 0;
    }
  }

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#f7badd';
  document.querySelector('body').style.backgroundImage = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('Start guessing...');
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game reset functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
