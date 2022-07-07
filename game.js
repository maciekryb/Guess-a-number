let target;

const roundNumberDisplay = document.getElementById('round-number');
const targetNumberDisplay = document.getElementById('target-number');

const computerScoreDisplay = document.getElementById('computer-score');
const computerGuessDisplay = document.getElementById('computer-guess');

const humanScoreDisplay = document.getElementById('human-score');
const humanGuessInput = document.getElementById('human-guess');

const guessButton = document.getElementById('guess');
const nextRoundButton = document.getElementById('next-round')

const computerWinsDisplay = document.getElementById('computer-wins');
const nooneWinsDisplay = document.getElementById('draw')



guessButton.addEventListener('click', () => {
  target = Math.floor(Math.random() * 10);
  const computerGuess = Math.floor(Math.random() * 10);
  const currentHumanGuess = humanGuessInput.value;

  if (currentHumanGuess > 9 || currentHumanGuess < 0) {
    return alert('Input a number between 0 and 9')
  }

  computerGuessDisplay.innerText = computerGuess;
  targetNumberDisplay.innerText = target;

  const humanIsWinner = compareGuesses(currentHumanGuess, computerGuess, target)

  if (humanIsWinner === 'draw') {
    guessButton.setAttribute('disabled', true)
    nextRoundButton.removeAttribute('disabled');
    nooneWinsDisplay.innerText = 'Draw!!!'
    return
  }

  const winner = humanIsWinner ? 'human' : 'computer'

  updateScore(winner);

  if (humanIsWinner) {
    guessButton.innerText = 'You Win!!!!!';
    guessButton.classList.toggle('winning-text')
  } else {
    computerWinsDisplay.innerText = 'Computer Wins!!!';
  }

  humanScoreDisplay.innerText = humanScore;
  computerScoreDisplay.innerText = computerScore;

  guessButton.setAttribute('disabled', true)
  nextRoundButton.removeAttribute('disabled');
});

nextRoundButton.addEventListener('click', () => {
  advanceRound();
  roundNumberDisplay.innerText = currentRoundNumber;

  guessButton.removeAttribute('disabled');
  nextRoundButton.setAttribute('disabled', true);

  targetNumberDisplay.innerText = '?';
  guessButton.innerText = 'Make a Guess';
  humanGuessInput.value = '0';
  computerGuessDisplay.innerText = '?';
  computerWinsDisplay.innerText = '';
  nooneWinsDisplay.innerText = ''
  guessButton.classList.remove('winning-text');
});

const addButton = document.getElementById('add');
const subtractButton = document.getElementById('subtract');

addButton.addEventListener('click', () => {
  humanGuessInput.value = +humanGuessInput.value + 1;
  handleValueChange(humanGuessInput.value);
});

subtractButton.addEventListener('click', () => {
  humanGuessInput.value = +humanGuessInput.value - 1;
  handleValueChange(humanGuessInput.value);
});

const handleValueChange = value => {
  if (value > 0 && value < 9) {
    subtractButton.removeAttribute('disabled');
    addButton.removeAttribute('disabled');
  } else if (value >= 9) {
    addButton.setAttribute('disabled', true);
  } else if (value <= 0) {
    subtractButton.setAttribute('disabled', true);
  }
}

humanGuessInput.addEventListener('input', function (e) {
  handleValueChange(e.target.value);
});