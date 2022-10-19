function getComputerChoice() {
    x = (Math.floor(Math.random() * 3));
    
    if (x === 0) { return "Rock";
    }
    else if (x === 1) { return "Paper";
    }
    else { return "Scissors";
    }
}

const computerSelection = getComputerChoice();

function playRound(playerSelection, computerSelection) {

    if ((playerSelection === "Rock") && (computerSelection === "Scissors")) { return "You Win! Rock beats Scissors."; 
    }

    else if ((playerSelection === "Paper") && (computerSelection === "Scissors")) { return ("You Lose! Scissors beats Paper."); 
    }

    else if ((playerSelection === "Scissors") && (computerSelection === "Scissors")) { return ("It's a draw!"); 
    }

    else if ((playerSelection === "Rock") && (computerSelection === "Paper")) { return ("You Lose! Paper beats Rock."); 
    }

    else if ((playerSelection === "Paper") && (computerSelection === "Paper")) { return ("It's a draw!"); 
    }

    else if ((playerSelection === "Scissors") && (computerSelection === "Paper")) { return ("You Win! Scissors beats Paper."); 
    }

    else if ((playerSelection === "Rock") && (computerSelection === "Rock")) { return ("It's a draw!"); 
    }

    else if ((playerSelection === "Paper") && (computerSelection === "Rock")) { return ("You Win! Paper beats Rock."); 
    }

    else if ((playerSelection === "Scissors") && (computerSelection === "Rock")) { return ("You Lose! Rock beats Scissors."); 
    }
}

