const buttons = document.querySelectorAll("button");

let textWin = document.querySelector(".wins");
let textLose = document.querySelector(".losses");
let gameInformation = document.querySelector(".game-information");

let wins = 0;
let losses = 0;

buttons.forEach(button => {
  button.addEventListener('click', playRound)
});

// EFFECTS: returns either "Rock", "Paper", or "Scissors"
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
}

// EFFECTS: plays a round of rock, paper, scissors and returns an appropriate string
function playRound() {
  const playerChoice = this.textContent.toLowerCase();
  const computerChoice = getComputerChoice();

  if (wins >= 5 || losses >= 5) return;
  
  if (playerChoice == computerChoice) {
    gameInformation.textContent = "Draw!";
  } else if (playerChoice == "rock" && computerChoice == "scissors") {
    gameInformation.textContent = "You win! Rock crushes scissors!";
    textWin.textContent += "I";
    wins++;
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    gameInformation.textContent = "You win! Paper wraps rock!";
    textWin.textContent += "I";
    wins++;
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    gameInformation.textContent = "You win! Scissors cuts paper!";
    textWin.textContent += "I";
    wins++;
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    gameInformation.textContent = "You lose! Rock crushes scissors!";
    textLose.textContent += "I";
    losses++;
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    gameInformation.textContent = "You lose! Paper wraps rock!";
    textLose.textContent += "I";
    losses++;
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    gameInformation.textContent = "You lose! Scissors cuts paper!";
    textLose.textContent += "I";
    losses++;
  }

  if (wins === 5) {
    gameInformation.textContent = "You've beat the computer. Congratulations!"
    textWin.style.color = "green";
  } else if (losses === 5) {
    gameInformation.textContent = "You've lossed against the computer. Better luck next time!";
    textLose.style.color = "red";
  }
}
