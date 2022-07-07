let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
const draw = 'draw';


function compareGuesses(humanGuessInput, computerGuessDisplay, targetNumberDisplay) {
  let humanDiff = Math.abs(humanGuessInput - targetNumberDisplay);
  let compuDiff = Math.abs(computerGuessDisplay - targetNumberDisplay);
  if (humanDiff === compuDiff) {
    return draw;
  } else if (humanDiff < compuDiff) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}