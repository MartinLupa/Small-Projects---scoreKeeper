// ----------------------------- Query Selectors -----------------------------
//Variables definition
let score1Counter = 0;
let score2Counter = 0;
let winningScore = 3;
let isGameOver = false; //isGameOver allows to reset the game using a boolean to check whether a player has won or not.

//Text/Headings
let h1 = document.querySelector('h1');

//Scores
let player1Score = document.querySelector('#p1-score');
let player2Score = document.querySelector('#p2-score');

//Match selectors
let optionSelector = document.querySelector('#winningScore');

//Buttons
let player1Btn = document.querySelector('#p1-btn');
let player2Btn = document.querySelector('#p2-btn');
let resetBtn = document.querySelector('#reset-btn');

// ----------------------------- Event listeners -----------------------------

//Listens to the change in score selector.
optionSelector.addEventListener('change', function (e) {
  winningScore = parseInt(e.target.value);
});

//Listens to Button 1 clicks
player1Btn.addEventListener('click', function () {
  if (!isGameOver) {
    score1Counter++;
    player1Score.textContent = `${score1Counter}`;
    console.log('Score1', score1Counter);
    if (score1Counter === winningScore) {
      isGameOver = true;
      h1.textContent = 'Player 1 Wins!';
      player1Score.classList.add('green');
      player2Score.classList.add('red');
    }
  }
});

//Listens to Button 2 clicks
player2Btn.addEventListener('click', function () {
  if (!isGameOver) {
    score2Counter++;
    player2Score.textContent = `${score2Counter}`;
    console.log('Score1', score2Counter);
    if (score2Counter === winningScore) {
      isGameOver = true;
      h1.textContent = 'Player 2 Wins!';
      player2Score.classList.add('green');
      player1Score.classList.add('red');
    }
  }
});

//Listens to Reset Button clicks
resetBtn.addEventListener('click', function () {
  score1Counter = 0;
  score2Counter = 0;
  player1Score.textContent = `${score1Counter}`;
  player2Score.textContent = `${score2Counter}`;
  player1Score.classList.remove('green', 'red');
  player2Score.classList.remove('green', 'red');
  h1.textContent = 'Score Keeper App';
  isGameOver = false;
});
