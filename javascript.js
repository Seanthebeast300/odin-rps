//game logic
//ver declerations
let humanScore = 0;
let computerScore = 0;

playerScore = document.getElementById("player-score")
opponentScore = document.getElementById("computer-score")

//creates a random num 1-3, returns number
let rand = 0
function getComputerChoice() {
    rand = Math.round(((Math.random() * 2) + 1))

    return rand
}

function playRound(humanChoice, computerChoice) 
{
    // if (humanChoice === computerChoice)
    // {
        
    // }
    if (humanChoice === 1 && computerChoice === 2)
    {
        computerScore++;
    }
    if (humanChoice === 1 && computerChoice === 3)
    {
        humanScore++;
    }
    if (humanChoice === 2 && computerChoice === 3)
    {
        computerScore++;
    }
    if (humanChoice === 2 && computerChoice === 1)
    {
        humanScore++;
    }
    if (humanChoice === 3 && computerChoice === 1)
    {
        computerScore++;
    }
    if (humanChoice === 3 && computerChoice === 2)
    {
        humanScore++;
    }

    playerScore.textContent = 'Player Score: ' + humanScore
    opponentScore.textContent = 'Computer Score: ' + computerScore
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
    playRound(1, getComputerChoice()) //sets of "playRound" function in game logic section
    alert("Rock") //for debugging
}
function choosePaper()
{
    playRound(2, getComputerChoice())
    alert("Paper")
}
function chooseScissors()
{
    playRound(3, getComputerChoice())
    alert("Scissors")
}