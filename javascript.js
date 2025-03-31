function getComputerChoice() {
    let output = "";
    let rand = Math.round(((Math.random() * 2) + 1))
    
    if (rand === 1) {
        output = "Rock"
    }
    if (rand === 2) {
        output = "Paper"
    }
    if (rand === 3) {
        output = "Scissors"
    }
}