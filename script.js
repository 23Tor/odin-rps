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
// Computer choice
function getComputerChoice() {
    const computerRoll = Math.floor(Math.random() * 100)
    if (computerRoll < 33) {
        return 'rock'
    } else if (computerRoll >= 33 && computerRoll < 66) {
        return 'paper';
    } else {
        return 'scissors'
    }
}

// Play a single round
function playRound(playerSelection, computerSelection) {
    const results = {
        rock: 'scissors',
        paper: 'rock',
        scissors: 'paper'
    }
    
    // Tie
    if (playerSelection === computerSelection) {
        console.log("Tie")
        return 'tie'
    // Win
    } else if (results[playerSelection] === computerSelection) {
        console.log("Player")
        return `player`
    // Lose
    } else {
        console.log("Computer")
        return `computer`;
    }
}

// Update the scores
function updateScore(result) {
    if (result === 'player') {
        playerScore++
    } else if (result === 'computer') {
        computerScore++
    }

    // Display the score
    const playerScoreElement = document.getElementById('player-score')
    const computerScoreElement = document.getElementById('computer-score')

    playerScoreElement.textContent = `PLAYER SCORE: ${playerScore}`
    computerScoreElement.textContent = `COMPUTER SCORE: ${computerScore}`
}

// Event listener on card click
const cards = document.querySelectorAll('.card')
cards.forEach(card => {
    card.addEventListener('click', () => {
        const playerSelection = card.dataset.choice
        const computerSelection = getComputerChoice()
        const roundResult = playRound(playerSelection, computerSelection)

        updateScore(roundResult)
    })
})

// Set score variables to 0
let playerScore = 0
let computerScore = 0