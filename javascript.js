let humanScore = 0;
let computerScore = 0;


//creates a random num 1-3 and chooses type based on that
let rand = 0
function getComputerChoice() {
    let output = "";
    rand = Math.round(((Math.random() * 2) + 1))
    
    if (rand === 1) {
        output = "rock"
    }
    if (rand === 2) {
        output = "paper"
    }
    if (rand === 3) {
        output = "scissors"
    }

    return "Computer chooses " + output
}

//prompts the user to enter a number 1-3, returns what was chosen based on number
let input = 0
function getHumanChoice(){
    let output = ""
    while(input <= 0 || input >= 4 || isNaN(input) == true)
    {
        input = parseInt(prompt("Please enter either 1, 2, or 3. \n 1 = rock, 2 = paper, 3 = scissors"))
    }


    if (input === 1) {
        output = "rock"
    }
    if (input === 2) {
        output = "paper"
    }
    if (input === 3) {
        output = "scissors"
    }
    console.log(input)
    return "Human chooses " + output
    
}

console.log(getHumanChoice())
console.log(getComputerChoice())
