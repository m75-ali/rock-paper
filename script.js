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
