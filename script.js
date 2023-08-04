// Script for styling
const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}

// Script for gameplay
function getComputerChoice() {
    computerRoll = Math.floor(Math.random() * 100)
    if (computerRoll < 33) {
        return 'Rock'
    } else if (computerRoll < 66 && computerRoll >= 33) {
        return 'Paper'
    } else {
        return 'Scissors'
    }
}

let playerScore = 0
let computerScore = 0
let winner = ''

function playRound(playerSelection, computerSelection) {
    let userChoice = playerSelection.toLowerCase()
    let computerChoice = computerSelection.toLowerCase()

    const results = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }

    // Tie
    if (userChoice === computerChoice) {
        tie = 'Tie!'
    // Win
    } else if (results[userChoice] === computerChoice) {
        winner = `You Win!`
        playerScore++
    // Lose
    } else {
        winner = `You Lose!`;
        computerScore++
    }
}

function game() {
    for (let round = 1; round <= 5000; round++) {
        const playerSelection = prompt('Input "rock", "paper", or "scissors" for round ' + round + ':')
        const computerSelection = getComputerChoice()

        playRound(playerSelection, computerSelection)

        console.log(`Round ${round}: ${winner}`)
        console.log(`Player Score: ${playerScore}, Computer Score: ${computerScore}`)
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!")
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lost the game. Better luck next time!")
    } else {
        console.log("It's a tie! The game ended in a draw.")
    }
}

game()