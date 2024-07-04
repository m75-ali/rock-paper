/*First we will get the computers choice 
Then we will get the humans choice
Then we initialize the scores for the human and computer at 0
Then we will play a round of rock, paper, scissors
If the human chooses rock and the computer chooses scissors, the human wins and the human score increases by 1 and so forth for all the other possible outcomes
If the human and computer choose the same thing, it is a tie
If the human chooses something other than rock, paper, or scissors, it is an invalid choice
We will play 5 rounds of rock, paper, scissors
After 5 rounds, we will determine the winner based on the scores
If the human has a higher score than the computer, the human wins
If the computer has a higher score than the human, the computer wins
If the human and computer have the same score, it is a tie
*/




function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)
    switch(randomNumber){
        case 0:
            return 'rock'
            break
        case 1:
            return 'paper'
            break
        case 2:
            return 'scissors'
            break
    }
}
console.log(getComputerChoice())
function getHumanChoice() {
    let humanChoice = prompt('Please enter your choice: rock, paper, or scissors.')
    humanChoice = humanChoice.toLowerCase()
    if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors'){
    return humanChoice
    } else {
    return 'You entered an invalid choice. Please enter rock, paper, or scissors.'
    }
}
console.log(getHumanChoice())

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, getComputerChoice){
    if(humanChoice === 'rock' && getComputerChoice === 'scissors'){
        humanScore++
        return 'You win! Rock beats scissors.'
    } else if(humanChoice === 'scissors' && getComputerChoice === 'rock'){
        computerScore++
        return 'You lose! Rock beats scissors.'
    } else if(humanChoice === 'scissors' && getComputerChoice === 'paper'){
        humanScore++
        return 'You win! Scissors beats paper.'
    } else if(humanChoice === 'paper' && getComputerChoice === 'scissors'){
        computerScore++
        return 'You lose! Scissors beats paper.'
    } else if(humanChoice === 'paper' && getComputerChoice === 'rock'){
        humanScore++
        return 'You win! Paper beats rock.'
    } else if(humanChoice === 'rock' && getComputerChoice === 'paper'){
        computerScore++
        return 'You lose! Paper beats rock.'
    } else if(humanChoice === getComputerChoice){
        return 'It\'s a tie!'
    } else {
        return 'You entered an invalid choice. Please enter rock, paper, or scissors.'
    }
}

console.log(playRound('rock', 'scissors'))
console.log(playRound('scissors', 'rock'))
console.log(playRound('scissors', 'paper'))
console.log(playRound('paper', 'scissors'))
console.log(playRound('paper', 'rock'))
console.log(playRound('rock', 'paper'))

function playGame(){
    for(let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        console.log(playRound(humanChoice, computerChoice))
    }
    if(humanScore > computerScore){
        return 'You win the game!'
    } else if(humanScore < computerScore){
        return 'You lose the game!'
    } else {
        return 'The game is a tie!'
    }
}

console.log(playGame());
