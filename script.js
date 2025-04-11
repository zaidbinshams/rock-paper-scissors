// console.log("connected");

function getComputerChoice() {
    let random = Math.floor(Math.random()*3);
    if (random === 0) {
        return "Rock";
    } else if (random == 1) {
        return "Paper";
    } else if (random === 2) {
        return "Scissors";
    } else {
        return "she gotchu blushin twin";
    }
}
let computerChoice = getComputerChoice().toUpperCase();
console.log("computer:",computerChoice);

// prompt the user for input
// store input in a variable
// check rock paper scissors conditions
// tell the user the computerChoice and whether they won or not

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, Scissors?").toUpperCase();
    console.log("you:",humanChoice);
    
    if (humanChoice === "ROCK") {
        if (computerChoice === "ROCK") {
            return "Tie.";
        } else if (computerChoice === "PAPER") {
            return "You lose.";
        } else if (computerChoice === "SCISSORS") {
            return "You win.";
        } else {
            // console.log("line 33");
            
            return "she gotchu blushin twin";
        }
    } else if (humanChoice === "PAPER") {
        if (computerChoice === "ROCK") {
            return "You win.";
        } else if (computerChoice === "PAPER") {
            return "Tie.";
        } else if (computerChoice === "SCISSORS") {
            return "You lose.";
        } else {
            return "she gotchu blushin twin";
        }
    } else if (humanChoice === "SCISSORS") {
        if (computerChoice === "ROCK") {
            return "You lose.";
        } else if (computerChoice === "PAPER") {
            return "You win.";
        } else if (computerChoice === "SCISSORS") {
            return "Tie.";
        } else {
            return "she gothchu blushin twin";
        }
    } else {
        // console.log("line 56");
        
        return "she gotchu blushin twin";
    }
}
let result = getHumanChoice();
console.log(result);
