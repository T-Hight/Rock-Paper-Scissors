function getComputerChoice() {
  let rps = ["rock", "paper", "scissors"];
  let random = rps[Math.floor(Math.random() * rps.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() === "rock") {
      if (computerSelection === "paper") {
        computerScore++;
        return lose;
      } else if (computerSelection === "rock") {
        return tie;
      } else {
        userScore++;
        return win;
      }
    }

    if (playerSelection.toLowerCase() === "paper") {
      if (computerSelection === "scissors") {
        computerScore++;
        return lose;
      } else if (computerSelection === "paper") {
        return tie;
      } else {
        userScore++;
        return win;
      }
    }

    if (playerSelection.toLowerCase() === "scissors") {
      if (computerSelection === "rock") {
        computerScore++;
        return lose;
      } else if (computerSelection === "scissors") {
        return tie;
      } else {
        userScore++;
        return win;
      }
    }
  }

let userScore = parseInt(0);
let computerScore = parseInt(0);
let win = "You win!";
let lose = "You lose!";
let tie = "It a tie!";

function game() {
  for (let i = 0; i < 5; i++) {
  let playerSelection = prompt("1 2 3 Shoot!");
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  console.log("Your score = " + userScore);
  console.log("Computer's score = " + computerScore);
  }
}

game();