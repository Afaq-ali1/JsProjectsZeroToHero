let myScr = localStorage.getItem("Score");
let score;
resetScore(myScr);
function resetScore(myScr) {
  score = myScr
    ? JSON.parse(myScr)
    : {
      win: 0,
      lose: 0,
      tie: 0,
    };

  score.displayScore = function () {
    return ` Won :${score.win}, Lost :${score.lose}, Tie :${score.tie}`;
  };
  display();
}

function generateSystemChoice(userChoice, systemChoice) {
  if (userChoice === "rock") {
    if (systemChoice === "Paper") {
      score.lose++;
      return "System won";
    } else if (systemChoice === "Scissor") {
      score.win++;
      return "Congratulations User won !!!";
    } else {
      score.tie++;
      return `It's tie`;
    }
  } else if (userChoice === "paper") {
    if (systemChoice === "Scissor") {
      score.lose++;
      return "System won";
    } else if (systemChoice === "Rock") {
      score.win++;
      return "Congratulations User won !!!";
    } else {
      score.tie++;
      return `It's tie`;
    }
  } else {
    if (systemChoice === "Rock") {
      score.lose++;
      return "System won";
    } else if (systemChoice === "Paper") {
      score.win++;
      return "Congratulations User won !!!";
    } else {
      score.tie++;
      return `It's tie`;
    }
  }
}

function randomChoice() {
  let randomNum = Math.random() * 3;
  if (randomNum > 0 && randomNum < 1) {
    return "Paper";
  } else if (randomNum >= 1 && randomNum < 1.8) {
    return "Rock";
  } else {
    return "Scissor";
  }
}

function display(displayUserChoice, displaySystemChoice, displayResult) {
  localStorage.setItem("Score", JSON.stringify(score));
  document.querySelector("#userSection").innerHTML =
    displayUserChoice
      ? `You have choosen ${displayUserChoice}`
      : "";
  document.querySelector("#systemSection").innerHTML =
    displaySystemChoice
      ? `System choosed ${displaySystemChoice}`
      : "";
  document.querySelector("#resultSection").innerHTML =
      displayResult || '';

  document.querySelector("#finalSection").innerHTML = 
      `Score :  ${score.displayScore()}`;

}
