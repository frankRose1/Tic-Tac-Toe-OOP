//GENERAL VARAIBLES start
const $gameBoard = $('#board');
//player 1 is O player 2 is X
const $player1 = $('#player1');
const $player2 = $('#player2');
const $boxes = $('li.box');
let placeholder = 'O'
startGame();

//this is the newMove function
$boxes.on('click', (e) =>{
  e.target.innerText = placeholder;
  nextTurn();//call the nextTurn to change the contents of placeholder
});

function startGame() {
  let placeholder = "O";
}


function nextTurn() {
  if(placeholder == "O") {
    placeholder = "X";
  } else {
      placeholder = "O";
  }
}
