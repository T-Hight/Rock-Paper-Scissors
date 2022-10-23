function getComputerChoice() {
  let rps = ["rock", "paper", "scissors"];
  let random = rps[Math.floor(Math.random() * rps.length)];
  return random;
}

const computerSelection = getComputerChoice();

console.log(computerSelection);

const playerSelection = prompt("1 2 3 Shoot!").toLowerCase();

console.log(playerSelection);


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) { return ("It's a draw!");
    }

    else if ((playerSelection === "rock") && (computerSelection === "paper")) {
    return ("You Lose! paper beats rock."); 
    }

    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
    return ("You Lose! scissors beats paper."); 
    }

    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
    return ("You Win! scissors beats paper."); 
    }

    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
    return ("You Win! rock beats scissors."); 
    }

    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
    return ("You Win! paper beats rock."); 
    }

    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
    return ("You Lose! rock beats scissors."); 
    }

  }

console.log(playRound(playerSelection, computerSelection));