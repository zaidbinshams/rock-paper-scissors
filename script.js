// // console.log("connected");

// function getComputerChoice() {
//     let random = Math.floor(Math.random()*3);
//     if (random === 0) {
//         return "Rock";
//     } else if (random == 1) {
//         return "Paper";
//     } else if (random === 2) {
//         return "Scissors";
//     } else {
//         return "she gotchu blushin twin";
//     }
// }
// let computerChoice = getComputerChoice().toUpperCase();
// console.log("computer:",computerChoice);

// // prompt the user for input
// // store input in a variable
// // check rock paper scissors conditions
// // tell the user the computerChoice and whether they won or not

// function getHumanChoice() {
//     let humanChoice = prompt("Rock, Paper, Scissors?").toUpperCase();
//     console.log("you:",humanChoice);
    
//     if (humanChoice === "ROCK") {
//         if (computerChoice === "ROCK") {
//             return "Tie.";
//         } else if (computerChoice === "PAPER") {
//             return "You lose.";
//         } else if (computerChoice === "SCISSORS") {
//             return "You win.";
//         } else {
//             // console.log("line 33");
            
//             return "she gotchu blushin twin";
//         }
//     } else if (humanChoice === "PAPER") {
//         if (computerChoice === "ROCK") {
//             return "You win.";
//         } else if (computerChoice === "PAPER") {
//             return "Tie.";
//         } else if (computerChoice === "SCISSORS") {
//             return "You lose.";
//         } else {
//             return "she gotchu blushin twin";
//         }
//     } else if (humanChoice === "SCISSORS") {
//         if (computerChoice === "ROCK") {
//             return "You lose.";
//         } else if (computerChoice === "PAPER") {
//             return "You win.";
//         } else if (computerChoice === "SCISSORS") {
//             return "Tie.";
//         } else {
//             return "she gothchu blushin twin";
//         }
//     } else {
//         // console.log("line 56");
        
//         return "she gotchu blushin twin";
//     }
// }
// let result = getHumanChoice();
// console.log(result);

// let humanScore = 0;
// let computerScore = 0;

// // if "you win"
// // humanScore++;
// // else if "you lose";
// // computerScore++;
// // else
// // humanScore += 0;
// // computerScore += 0;

// if (result.toUpperCase() === "YOU WIN.") {
//     humanScore++;
// } else if (result.toUpperCase() === "YOU LOSE.") {
//     computerScore++;
// } else if (result.toUpperCase() === "TIE.") {
//     humanScore += 0;
//     computerScore += 0;
// } else {
//     console.log("she gotchu blushin twin");
// }
// console.log("your score:",humanScore);
// console.log("computer score:",computerScore);

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

function getHumanChoice() {
    return prompt("Rock, Paper, Scissors?");
}

let humanScore = 0;
let computerScore = 0;

function score() {
    console.log("Your score:", humanScore);
    console.log("Computer score:", computerScore);
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();
    console.log("Your choice:", humanChoice);
    console.log("Computer choice:", computerChoice.toUpperCase());
    
    if (humanChoice === "ROCK") {
        if (computerChoice === "Rock") {
            console.log("Tie! Rock vs Rock.");
        } else if (computerChoice === "Paper") {
            console.log("You lose! Paper beats Rock.");
            computerScore++;
        } else if (computerChoice === "Scissors") {
            console.log("You win! Rock beats Scissors.");
            humanScore++;
        } else {
            // console.log("line 33");
            
            console.log("she gothchu blushin twin");
        }
    } else if (humanChoice === "PAPER") {
        if (computerChoice === "Rock") {
            console.log("You win! Paper beats Rock.");
            humanScore++;
        } else if (computerChoice === "Paper") {
            console.log("Tie! Paper vs Paper.");
        } else if (computerChoice === "Scissors") {
            console.log("You lose! Scissors beat Paper.");
            computerScore++;
        } else {
            console.log("she gothchu blushin twin");
        }
    } else if (humanChoice === "SCISSORS") {
        if (computerChoice === "Rock") {
            console.log("You lose! Rocks beats Scissors.");
            computerScore++;
        } else if (computerChoice === "Paper") {
            console.log("You win! Scissors beat Paper.");
            humanScore++;
        } else if (computerChoice === "Scissors") {
            console.log("Tie! Scissors vs Scissors.");
        } else {
            console.log("she gothchu blushin twin");
        }
    } else {
        // console.log("line 56");
        
        console.log("she gothchu blushin twin");
    }
    score();
}

// let humanSelection = getHumanChoice();
// let computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);

function playGame(n) {
    for (let i = 0; i < n; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}
let n = prompt("How many rounds do you want to play?");
playGame(n);