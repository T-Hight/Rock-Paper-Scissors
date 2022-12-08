//Create function for random computer choice
function getComputerChoice() {
  let rps = ["rock", "paper", "scissors"];
  let random = rps[Math.floor(Math.random() * rps.length)];
  return random;
}

//Create function for a round of RPS between user and computer
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

//Create necessary variables
let userScore = 0;
let computerScore = 0;
let win = "You win this round!";
let lose = "You lose this round!";
let tie = "This round is a tie!";

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

//Create function to play the game
function game() {

  const buttons = document.querySelectorAll('button');

  buttons.forEach((button) => {

    button.addEventListener('click', () => {
      let playerSelection = button.className;
      let computerSelection = getComputerChoice();
      roundWinText.textContent = (playRound(playerSelection, computerSelection));
      playerWinText.textContent = ("Your score = " + userScore);
      computerWinText.textContent = ("Computer's score = " + computerScore);

      endGame();
    });
  });
}

//Create DOM method for container div
const container = document.querySelector('#container');
const resultsDiv = document.createElement('div')
resultsDiv.style.marginTop = '20px';
container.appendChild(resultsDiv);

//Create DOM for playerWinText
const playerWinText = document.createElement('p');
playerWinText.style.color = 'blue';
playerWinText.textContent = ("Your score = " + userScore);
resultsDiv.appendChild(playerWinText);

//Create DOM for computerWinText
const computerWinText = document.createElement('p');
computerWinText.style.color = 'red';
computerWinText.textContent = ("Computer's score = " + computerScore);
resultsDiv.appendChild(computerWinText);

//Create DOM for roundWinText
const roundWinText = document.createElement('p');
roundWinText.style.color = 'green';
resultsDiv.appendChild(roundWinText);

//Create DOM for matchWinText
const matchWinText = document.createElement('p')
matchWinText.style.color = 'purple';
resultsDiv.appendChild(matchWinText);

//Create function to determine who won the game
function endGame() {
  if(userScore === 5) {
    matchWinText.textContent = `You're the winner!!!!`;
    
    //Disable buttons
    document.getElementById('1').disabled = true;
    document.getElementById('2').disabled = true;
    document.getElementById('3').disabled = true;
    
    //Create new DOM button to replay
    const replay = document.createElement('button');
    replay.textContent = 'Play Again?';
    resultsDiv.appendChild(replay);

    //If clicked, reload page
    replay.addEventListener('click', () => {
      location.reload();
    });

  }
  else if(computerScore === 5) {
    matchWinText.textContent = 'The computer is the winner!!!!';
    
    //Disable buttons
    document.getElementById('1').disabled = true;
    document.getElementById('2').disabled = true;
    document.getElementById('3').disabled = true;
    
    //Create new DOM button to replay
    const replay = document.createElement('button');
    replay.textContent = 'Play Again?';
    resultsDiv.appendChild(replay);

    //If clicked, reload page
    replay.addEventListener('click', () => {
      location.reload();
    });
  }
}

game();