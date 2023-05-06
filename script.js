// EFFECTS: returns either "Rock", "Paper", or "Scissors"
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
}

// EFFECTS: plays a round of rock, paper, scissors and returns an appropriate string
function playRound(playerSelection, computerSelection) {
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  if (playerChoice == computerChoice) {
    return "Draw!";
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    return "You win! Rock crushes scissors!";
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    return "You win! Paper wraps rock!";
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    return "You win! Scissors cuts paper!";
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    return "You lose! Rock crushes scissors!";
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    return "You lose! Paper wraps rock!";
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    return "You lose! Scissors cuts paper!";
  } else {
    return "Please try again!";
  }
}

// EFFECTS: play a best of 5 game of rock, paper, scissors
function game() {
  let wins = 0;
  let losses = 0;

  while (wins + losses < 5) {
    let playerSelection = prompt("Choose rock, paper, or scissors: ");
    let computerSelection = getComputerChoice();

    let result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.substring(4, 5) == "w") {
      wins++;
    } else if (result.substring(4, 5) == "l") {
      losses++;
    }
  }

  console.log(
    wins > losses
      ? "Congratulations! You beat the computer!"
      : "You loss! Better luck next time!"
  );
}
