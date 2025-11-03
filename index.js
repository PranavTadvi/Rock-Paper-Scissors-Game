const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreId = document.getElementById("user-score");
const computerScoreId = document.getElementById("computer-score");
const resetId = document.getElementById("refresh");

let playerScore = 0;
let computerScore = 0;

resetId.addEventListener("click", (event) => {
  location.reload();
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const result = playRound(button.id, computerPlay());
    resultEl.textContent = result;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie !";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissiors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreId.innerText = playerScore;

    return "You won! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    computerScoreId.innerText = computerScore;
    return "You lost! " + computerSelection + " beats " + playerSelection;
  }
}
