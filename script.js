let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    const targetNumber = Math.floor(Math.random() * 10);
    return targetNumber;
}

function compareGuesses(userGuess, computerGuess, secretNumber) {
    if (userGuess > 9 || userGuess < 0) {
        alert('Enter a number between 1 and 9');
    }
    const userDiff = Math.abs(userGuess - secretNumber);
    const computerDiff = Math.abs(computerGuess - secretNumber);
    if (userDiff > computerDiff) {
        return false;
    } else {
        return true;
    }
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

function advanceRound() {
    currentRoundNumber += 1;
}