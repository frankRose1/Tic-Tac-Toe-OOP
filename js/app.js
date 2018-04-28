//GENERAL VARAIBLES start
const $startDiv = $('#start');
const $startButton = $('#start a.button');
const $gameBoard = $('#board');
const $finishDiv = $('#finish');
const $restartButton = $('#finish header a');
//player 1 is O player 2 is X
const $player1 = $('#player1');
const $player2 = $('#player2');
const $boxes = $('li.box');
let placeholder = 'O';
let gameWinner = null;


$gameBoard.hide(); //hide the game board at first until user clicks start game
$finishDiv.hide(); //hide the finish div until a winner is found

//clicking the start button begins the game
$startButton.on('click', () => {
  $startDiv.fadeOut(1000);
  $gameBoard.fadeIn(2000);
  startGame();
});


//this is the newMove function
$boxes.on('click', (e) =>{
  if (gameWinner != null) {
    alert(`${placeholder} has already won Game Over`);
    $gameBoard.fadeOut(1000);
    $finishDiv.fadeIn(2000);
  } else if (e.target.innerText == "") {
    e.target.innerText = placeholder;
    disableBox(e);
    nextTurn();//call the nextTurn to change the contents of placeholder
  }
});

function startGame() {
  let placeholder = "O";
  currentPlayer();
}

//this function will keep track of whose turn it is and toggle the active class
function nextTurn() {
  //check for winner before changing to the next turn
  //also set the game winner which will be used in the click handler
  if ( checkWinner(placeholder) == true ) {
    alert(`${placeholder} has won!!`);
     gameWinner = placeholder;
  } else if(placeholder == "O") {
    placeholder = "X";
    $player1.removeClass('active');
    $player2.addClass('active');
  } else {
      placeholder = "O";
      $player1.addClass('active');
      $player2.removeClass('active');
  }
}

function currentPlayer() {
  $player1.addClass('active');
}

//this is called in the click event and is evaluated before the nextTurn is called
// as nextTurn will change the contents of placeholder
function disableBox(e) {
  //add the disabled class based on what is inside placeholder
    if (placeholder == "O") {
      $(e.target).addClass('box-filled-1');
    } else if (placeholder == "X") {
      $(e.target).addClass('box-filled-2');
    }
}

// WIN CONDITIONS START

//here we will check each row to see if it returns true
//if checkRow function returns true then we set the winner of the game to be true
function checkWinner(move){
  let winnerResult = false;
  if( checkRow(0, 1, 2, move) ||
      checkRow(3, 4, 5, move) ||
      checkRow(6, 7, 8, move) ||
      checkRow(0, 3, 6, move) ||
      checkRow(1, 4, 7, move) ||
      checkRow(2, 5, 8, move) ||
      checkRow(0, 4, 8, move) ||
      checkRow(2, 4, 6, move) ) {
        winnerResult = true
  }
  return winnerResult;
}

//this function will check the individual rows and return a boolean
//the params are the indexes that we pass in to the getBoxFunction
//move is going to be the value of parameter
function checkRow(a, b, c, move) {
    let rowResult = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move ) {
      rowResult = true
    }
    return rowResult;
}

//this will retrieve the individual box based on the index value we pass in
function getBox(index) {
  return $boxes[index].innerText;
}



$restartButton.on('click', () =>{
  for(let i = 0; i < $boxes.length; i++) {
    resetGame(i);
  }
  $finishDiv.fadeOut(1000);
  $gameBoard.fadeIn(2000);
});

//reset the game by clearing the boxes
function resetGame(index) {
  $boxes[index].innerText = "";
  $boxes[index].classList.remove('box-filled-1');
  $boxes[index].classList.remove('box-filled-2');
}


$boxes.hover( function (e) {
  $(e.target).toggleClass('toggle-box-filled-2');
});