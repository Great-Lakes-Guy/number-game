let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Generate target number
function generateTarget() {
    const targetNumber = Math.floor(Math.random() * 10);
    return targetNumber;
}

// Determine if user or computer is closer to secret number
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

// Update the score
function updateScore(winner) {
    if (winner === 'human') {
        humanScore += 1;
    } else if (winner === 'computer') {
        computerScore += 1;
    }
}

// Update round number
function advanceRound() {
    currentRoundNumber += 1;
}