let computerMove = '';

function pickComputerMove() {
  const randomNumber = (Math.random());

  if (randomNumber >= 0 && randomNumber < 1/3){
  computerMove = 'Rock';
  }
  else if (randomNumber >= 1/3 && randomNumber < 2/3){
  computerMove = 'Paper';
  }
  else {
  computerMove = 'Scissors';
  }

}