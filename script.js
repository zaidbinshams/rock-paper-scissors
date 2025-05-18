// initializing score and target
let userScore = 0;
let computerScore = 0;

// let target = Number(prompt("Set target score"));// implement this using an input field later on

// references to DOM nodes
const userChoiceButton = document.querySelectorAll("button.user-selection");
const computerChoiceDiv = document.querySelector("div.computer-choice");
const userChoiceDiv = document.querySelector("div.user-choice");
const update = document.querySelector("div.update");
const userScoreDiv = document.querySelector("div.user-score");
const computerScoreDiv = document.querySelector("div.computer-score");
const mainContainer = document.querySelector("div.main-container");
const inputField = document.querySelector("input.text");
const inputButton = document.querySelector("input.submit");
const targetDec = document.querySelector("div.target-selected");

const restartButton = document.createElement("button");
restartButton.setAttribute("class","restart");
restartButton.textContent = "Restart";
restartButton.style.alignSelf = "center";

// event listeners
userChoiceButton.forEach((button) => {
    button.addEventListener("click", addPlayFunction);
});

restartButton.addEventListener("click", restartGame);

// FUNCTIONS

// set target
// function setTarget() {
//     inputButton.addEventListener("click", () => {
//         let temp = Number(inputField.value);
//         console.log(temp);
        
//         console.log(typeof(temp));
//         console.log(typeof(typeof(temp)));
        
//         inputField.value = null;
//         if (typeof(temp) !== "number" || temp === "NaN") {
//             targetDec.textContent = "Set a valid target!";
//             targetDec.style.textAlign = "center";
//             return;
//         } else return temp;
//     });
// }

// let target = setTarget();

// computer choice
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

// score handling
function score() {
    console.log("Your score:", userScore);
    userScoreDiv.textContent = `Your score: ${userScore}`;
    console.log("Computer score:", computerScore);
    computerScoreDiv.textContent = `Computer score: ${computerScore}`;
}

// logic of the game
function playRound(userChoice, computerChoice) {
    userChoice = userChoice.toUpperCase();
    console.log("Your choice:", userChoice);
    console.log("Computer choice:", computerChoice.toUpperCase());
    if (userChoice === "ROCK") {
        if (computerChoice === "Rock") {
            update.textContent = "Tie! Rock vs Rock.";
        } else if (computerChoice === "Paper") {
            update.textContent = "You lose! Paper beats Rock.";
            computerScore++;
        } else if (computerChoice === "Scissors") {
            update.textContent = "You win this round! Rock beats Scissors.";
            userScore++;
        } else {
            update.textContent = "she gothchu blushin twin";
        }
    } else if (userChoice === "PAPER") {
        if (computerChoice === "Rock") {
            update.textContent = "You win this round! Paper beats Rock.";
            userScore++;
        } else if (computerChoice === "Paper") {
            update.textContent = "Tie! Paper vs Paper.";
        } else if (computerChoice === "Scissors") {
            update.textContent = "You lose! Scissors beat Paper.";
            computerScore++;
        } else {
            update.textContent = "she gothchu blushin twin";
        }
    } else if (userChoice === "SCISSORS") {
        if (computerChoice === "Rock") {
            update.textContent = "You lose! Rocks beats Scissors.";
            computerScore++;
        } else if (computerChoice === "Paper") {
            update.textContent = "You win this round! Scissors beat Paper.";
            userScore++;
        } else if (computerChoice === "Scissors") {
            update.textContent = "Tie! Scissors vs Scissors.";
        } else {
            update.textContent = "she gothchu blushin twin";
        }
    } else {
        update.textContent = "she gothchu blushin twin";
    }
}

// start game and add play functionality to user buttons
function addPlayFunction(event) {
    let userChoice = event.target.textContent;
    userChoiceDiv.textContent = `Your choice: ${userChoice}`;
    let computerChoice = getComputerChoice();
    computerChoiceDiv.textContent = `Computer choice: ${computerChoice}`;
    playRound(userChoice, computerChoice);
    score();
    if ((userScore === target) || (computerScore === target)) {
        if (userScore > computerScore) {
            update.textContent = "You win this game! Restart to play again.";
        } else if (computerScore > userScore) {
            update.textContent = "You lose this game! Restart to play again.";
        }
        userChoiceButton.forEach((button) => {
            button.removeEventListener("click", addPlayFunction);
            button.addEventListener("click", removePlayFunction);
        });
        mainContainer.appendChild(restartButton);
    }
}

// remove play functionality from user buttons
function removePlayFunction(event) {
    update.textContent = "Target reached! Restart the game to play more."
}

function restartGame() {
    userScore = 0;
    computerScore = 0;
    userChoiceDiv.textContent = "Your choice: ";
    computerChoiceDiv.textContent = "Computer choice: ";
    userScoreDiv.textContent = "Your score: ";
    computerScoreDiv.textContent = "Computer score: ";
    update.textContent = "";
    userChoiceButton.forEach((button) => {
        button.addEventListener("click", addPlayFunction);
    });
}