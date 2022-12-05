function getComputerChoice() {
  let rps = ["rock", "paper", "scissors"];
  let random = rps[Math.floor(Math.random() * rps.length)];
  return random;
}

function playRound(playerSelection, computerSelection) {

  if (playerSelection === 'rock') {
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

  if (playerSelection === 'paper') {
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

    if (playerSelection === 'scissors') {
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
let tie = "It's a tie!";

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');


function game() {

  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {

    button.addEventListener('click', (e) => {
      console.log(e.target);
      let playerSelection = button.className;
      console.log(playerSelection);
      let computerSelection = getComputerChoice();
      console.log(computerSelection);
      console.log(playRound(playerSelection, computerSelection));
      console.log("Your score = " + userScore);
      console.log("Computer's score = " + computerScore);
  
  
      if (userScore > computerScore) {
      console.log("You are the winner!");
      } 
      else if (userScore < computerScore) {
      console.log("The Computer is the winner!");
      }
      else {
        console.log("It's a Tie!")
      }
    });
  });
}



game();