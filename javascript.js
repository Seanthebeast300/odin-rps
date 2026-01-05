//game logic
//ver declerations
let humanScore = 0;
let computerScore = 0;

//creates a random num 1-3, returns number
let rand = 0
function getComputerChoice() {
    rand = Math.round(((Math.random() * 2) + 1))

    return rand
}

//prompts the user to enter a number 1-3, returns number
function getHumanChoice(){
    let input = 0
    while(input <= 0 || input >= 4 || isNaN(input) == true)
    {
        input = parseInt(prompt("Please enter either 1, 2, or 3. \n 1 = rock, 2 = paper, 3 = scissors \nHuman score: " + humanScore + "\nComputer score: " + computerScore))
    }

    return input 
}

function playRound(humanChoice, computerChoice) 
{
    if (humanChoice === computerChoice)
    {
        return "You picked the same item, it's a tie"
    }
    if (humanChoice === 1 && computerChoice === 2)
    {
        computerScore++;
        return "Paper beats rock, computer wins"
    }
    if (humanChoice === 1 && computerChoice === 3)
    {
        humanScore++;
        return "Rocks beats scissors, human wins"
    }
    if (humanChoice === 2 && computerChoice === 3)
    {
        computerScore++;
        return "Scissors beats paper, computer wins"
    }
    if (humanChoice === 2 && computerChoice === 1)
    {
        humanScore++;
        return "Paper beats rock, human wins"
    }
    if (humanChoice === 2 && computerChoice === 1)
    {
        humanScore++;
        return "Paper beats rock, human wins"
    }
    if (humanChoice === 3 && computerChoice === 1)
    {
        computerScore++;
        return "Rock beats scissors, computer wins"
    }
    if (humanChoice === 3 && computerChoice === 2)
    {
        humanScore++;
        return "Scissors beats paper, human wins"
    }
}

// for (let i = 0; i < 5; i++)
// {
//     console.log(playRound(getHumanChoice(), getComputerChoice()));
//     console.log("Human score: " + humanScore);
//     console.log("Computer score: " + computerScore);
// }


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
