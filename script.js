let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
    if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')) {
        humanScore++;
        return `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
    } else if (humanChoice === computerChoice) {
        return `It's a tie! You both chose ${humanChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
    }
}

function updateScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
}

function updateResults(result) {
    const resultsDiv = document.getElementById('results');
    const resultParagraph = document.createElement('p');
    resultParagraph.textContent = result;
    resultsDiv.appendChild(resultParagraph);
}

function checkWinner() {
    if (humanScore === 5) {
        alert("Congratulations! You won the game!");
        resetGame();
    } else if (computerScore === 5) {
        alert("Sorry, you lost the game. Try again!");
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
    document.getElementById('results').textContent = '';
}

document.getElementById('rock').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound('rock', computerChoice);
    updateResults(result);
    updateScore();
    checkWinner();
});

document.getElementById('paper').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound('paper', computerChoice);
    updateResults(result);
    updateScore();
    checkWinner();
});

document.getElementById('scissors').addEventListener('click', () => {
    const computerChoice = getComputerChoice();
    const result = playRound('scissors', computerChoice);
    updateResults(result);
    updateScore();
    checkWinner();
});
