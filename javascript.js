//game logic
//ver declerations
let humanScore = 0;
let computerScore = 0;

playerScore = document.getElementById("player-score")
opponentScore = document.getElementById("computer-score")
lastRoundText = document.getElementById("last-round-text")

//creates a random num 1-3, returns number
let rand = 0
function getComputerChoice() {
    rand = Math.round(((Math.random() * 2) + 1))

    if (rand == 1)
    {
        return "rock"
    }
    if (rand == 2)
    {
        return "paper"
    }
    if (rand == 3)
    {
        return "scissors"
    }
}

function playRound(humanChoice, computerChoice) 
{
    let winner = ''

    if (humanChoice === "rock" && computerChoice === "paper")
    {
        winner = "computer"
    }
    if (humanChoice === "rock" && computerChoice === "scissors")
    {
        winner = "player"
    }
    if (humanChoice === "paper" && computerChoice === "scissors")
    {
        winner = "computer"
    }
    if (humanChoice === "paper" && computerChoice === "rock")
    {
        winner = "player"
    }
    if (humanChoice === "scissors" && computerChoice === "rock")
    {
        winner = "computer"
    }
    if (humanChoice === "scissors" && computerChoice === "paper")
    {
        winner = "player"
    }

    if (winner === "player")
    {
        humanScore++
    }
    if (winner === "computer")
    {
        computerScore++
    }

    playerScore.textContent = 'Player Score: ' + humanScore
    opponentScore.textContent = 'Computer Score: ' + computerScore

    if (humanChoice === computerChoice)
    {
        lastRoundText.textContent = 'Its a tie! You both chose ' + humanChoice
    }
    else
    {
        lastRoundText.textContent = 'Last round you chose ' + humanChoice + ' and the computer chose ' + computerChoice + ". " + winner + ' wins!'
    }
    
}

// UI logic
// element creation with selectors
rockImg = document.getElementById("rock")
paperImg = document.getElementById("paper")
scissorsImg = document.getElementById("scissors")

//event listeners
rockImg.addEventListener("click", chooseRock)
paperImg.addEventListener("click", choosePaper)
scissorsImg.addEventListener("click", chooseScissors)

//functions triggered when image is clicked
function chooseRock()
{
    playRound("rock", getComputerChoice()) //sets of "playRound" function in game logic section
}
function choosePaper()
{
    playRound("paper", getComputerChoice())
}
function chooseScissors()
{
    playRound("scissors", getComputerChoice())
}