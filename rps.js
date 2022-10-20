function getComputerChoice() {
    x = (Math.floor(Math.random() * 3));
    
    if (x === 0) { return "Rock";
    }
    else if (x === 1) { return "Paper";
    }
    else { return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) { return ("It's a draw!"); 
    }

    else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) { return ("You Lose! Scissors beats Paper."); 
    }

    else if ((playerSelection === "Rock") && (computerSelection === "Paper")) { return ("You Lose! Paper beats Rock."); 
    }

    else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) { return ("You Win! Scissors beats Paper."); 
    }

    else if ((playerSelection === "Paper") && (computerSelection === "Rock")) { return ("You Win! Paper beats Rock."); 
    }

    else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) { return ("You Lose! Rock beats Scissors."); 
    }

    else { return ("You Win! Rock beats Scissors."); 
    }
}

const computerSelection = getComputerChoice();
const playerSelection = prompt("Choose").toLowerCase;

console.log(playRound(playerSelection, computerSelection));

