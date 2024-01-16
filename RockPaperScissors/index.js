function generateSystemChoice(userChoice, systemChoice) 
{
  if (userChoice === 'rock') {
    if (systemChoice === 'Paper') {
      return 'System won';
    }
    else if (systemChoice === 'Scissor') {
      return 'User won';
    }
    else {
      return `It's tie`;
    }
  }
  else if (userChoice === 'paper') {
    if (systemChoice === 'Scissor') {
      return 'System won';
    }
    else if (systemChoice === 'Rock') {
      return 'User won';
    }
    else {
      return `It's tie`;
    }
  }
  else
  {
    if (systemChoice === 'Rock') {
      return 'System won';
    }
    else if (systemChoice === 'Paper') {
      return 'User won';
    }
    else {
      return `It's tie`;
    }
  }
}

function randomChoice() 
{
  let randomNum = Math.random() * 3;
  if (randomNum > 0 && randomNum < 1) {
    return 'Paper';
  }
  else if (randomNum >= 1 && randomNum < 1.8) {
    return 'Rock';
  }
  else {
    return 'Scissor';
  }
}

function display(uChoice,sChoice,res)
{
  alert(`You choosed ${uChoice}, system choosed ${sChoice} and ${res}`);
}