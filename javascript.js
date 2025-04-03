let humanScore = 0;
let computerScore = 0;


//creates a random num 1-3, returns number
let rand = 0
function getComputerChoice() {
    rand = Math.round(((Math.random() * 2) + 1))
    
    // if (rand === 1) {
    //     output = "rock"
    // }
    // if (rand === 2) {
    //     output = "paper"
    // }
    // if (rand === 3) {
    //     output = "scissors"
    // }

    return rand
}

//prompts the user to enter a number 1-3, returns number

function getHumanChoice(){
    let input = 0
    while(input <= 0 || input >= 4 || isNaN(input) == true)
    {
        input = parseInt(prompt("Please enter either 1, 2, or 3. \n 1 = rock, 2 = paper, 3 = scissors \nHuman score: " + humanScore + "\nComputer score: " + computerScore))
    }


    // if (input === 1) {
    //     output = "rock"
    // }
    // if (input === 2) {
    //     output = "paper"
    // }
    // if (input === 3) {
    //     output = "scissors"
    // }
    
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

for (let i = 0; i < 5; i++)
{
    console.log(playRound(getHumanChoice(), getComputerChoice()));
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}