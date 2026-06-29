const playerScoreEl = document.getElementById("playerScore");
const computerScoreEl = document.getElementById("computerScore");
const gameStatusEl = document.getElementById("gameStatus");
const choicesStatusEl = document.getElementById("choicesStatus");
const resetBtn = document.getElementById("resetBtn");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

let playerScore = 0;
let computerScore = 0;

const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function playRound(playerChoice) {
  const computerChoice = getComputerChoice();
  
  if (playerChoice === computerChoice) {
    gameStatusEl.textContent = "It's a tie!";
    choicesStatusEl.textContent = `You both chose ${playerChoice}.`;
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice === "Paper" && computerChoice === "Rock") ||
    (playerChoice === "Scissors" && computerChoice === "Paper")
  ) {
    playerScore++;
    playerScoreEl.textContent = playerScore;
    gameStatusEl.textContent = "You win this round!";
    choicesStatusEl.textContent = `${playerChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    computerScoreEl.textContent = computerScore;
    gameStatusEl.textContent = "Computer wins this round!";
    choicesStatusEl.textContent = `${computerChoice} beats ${playerChoice}.`;
  }
}

rockBtn.addEventListener("click", () => playRound("Rock"));
paperBtn.addEventListener("click", () => playRound("Paper"));
scissorsBtn.addEventListener("click", () => playRound("Scissors"));

resetBtn.addEventListener("click", () => {
  playerScore = 0;
  computerScore = 0;
  playerScoreEl.textContent = playerScore;
  computerScoreEl.textContent = computerScore;
  gameStatusEl.textContent = "Make your move to start the game!";
  choicesStatusEl.textContent = "";
});
