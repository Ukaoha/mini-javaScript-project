"use strict";
let secretNumber = Math.trunc(Math.random() * 50 + 1);
console.log(secretNumber);
let score = 50;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".display").textContent = " No number ⛔";
  } else if (guess === secretNumber) {
    document.querySelector(".display").textContent = "Correct Number 💥";
    document.querySelector(".secret").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";

    if (highScore > score) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore; 
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".display").textContent = "Guess is too high😏";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".score").textContent = "You lost the game!😥";
      document.querySelector(".score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".display").textContent = "Guess is too low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".display").textContent = "You lost the game 😥";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 50;
  secretNumber = Math.trunc(Math.random() * 50 + 1);
  document.querySelector(".display").textContent = "Start guessing ....";
  document.querySelector(".score").textContent = score;
  document.querySelector(".secret").textContent = "?";
  const guess = Number((document.querySelector(".guess").value = " "));

  document.querySelector("body").style.backgroundColor = "#222";
});










