let PlayerChoice = document.getElementById("PlayerChoice")
let ComputerChoice = document.getElementById("ComputerChoice")
let resultText = document.getElementById("Result")
let buttons = document.querySelectorAll(`#button`)
let pScore = document.getElementById(`p-score`)
let cScore = document.getElementById(`c-score`)
let final = document.getElementById(`final`)
let container = document.querySelector(`.buttons-Container`)
let restart = document.getElementById(`restart`).style.display = `none`
document.getElementById(`restart`).addEventListener(`click` , restartGame)
let computerScore = 0;
let playerScore = 0;
let playerSelection;
let computerSelection;

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3) 
    switch(random){
        case 0:
            computerSelection = `ROCK`
            break;
        case 1:
            computerSelection = `PAPER`
            break;
        case 2: 
            computerSelection = `SCISSORS`
            break;
    }
    return random
}

buttons.forEach(button => button.addEventListener(`click`, () => {
        playerSelection = button.className;
        getComputerChoice() 
        PlayerChoice.textContent = `You Picked: ${playerSelection}`
        ComputerChoice.textContent = `Computer Picked : ${computerSelection}`
        playRound()
        console.log(`from buttons ` + playerSelection);
    }))

    function playRound() {
        if(playerSelection == computerSelection) {
            resultText.textContent = `Its a Tie Game!`
            console.log(`its a tie`);
        }
        else if((computerSelection == `ROCK` && playerSelection == `PAPER`)
        ||(computerSelection == `SCISSORS` && playerSelection == `PAPER`) 
        || (computerSelection == `ROCK` && playerSelection == `SCISSORS`)){
        computerScore++;
        cScore.textContent = `Computer Score : ${computerScore}`
        resultText.textContent = `Computer Wins this round!`
    } else if((playerSelection == `ROCK` && computerSelection == `PAPER`)
        ||(playerSelection == `SCISSORS` && computerSelection == `PAPER`) 
        || (playerSelection == `ROCK` && computerSelection == `SCISSORS`)) {
        playerScore = ++playerScore
        pScore.textContent = `Player Score: ${playerScore}`
        resultText.textContent = `You Won This Round!`
    }
    gameOver()
}

function gameOver() {
    if(computerScore == 5){
        final.textContent = `Computer Wins..`
        hide()
        } else if(playerScore == 5) {
        final.textContent = `You are the Winner!!`
        hide()
    }

}
function hide() {
    container.style.display = `none`
    document.getElementById(`restart`).style.display = `inline-block`
}
function restartGame() {
    container.style.display = `flex`
    document.getElementById(`restart`).style.display = `none`
    computerScore = 0
    playerScore = 0

}

