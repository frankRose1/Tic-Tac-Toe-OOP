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
  } else if ( e.target.classList.contains('box-filled-2') === false || e.target.classList.contains('box-filled-1') === false ) {
    disableBox(e); //disable the box that was clicked
    nextTurn(); //call the nextTurn function to change the players turn
  }
});

function startGame() {
  let placeholder = "O";
  currentPlayer();
}

//sets 'O' as the active player when the game starts
function currentPlayer() {
  $player1.addClass('active');
}

//this function will keep track of whose turn it is and toggle the active class
function nextTurn() {
  //check for winner before changing to the next turn
  //also set the game winner which will be used in the click handler
  if ( checkWinner(placeholder) == true ) {
    alert(`${placeholder} has won!!`);
     gameWinner = placeholder;
  } else if( $player1.hasClass('active') ) {
    $player1.removeClass('active');
    $player2.addClass('active');
  } else {
      $player1.addClass('active');
      $player2.removeClass('active');
  }
}


//this is called in the click event and is evaluated before the nextTurn function is called
// evaluate the current active playyer and disable the box that they clicked
function disableBox(e) {
    if ( $player1.hasClass('active') ) {
      $(e.target).addClass('box-filled-1');
    } else if ( $player2.hasClass('active') ) {
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


$boxes.hover( (e) => {
  if ( $player1.hasClass('active') ) {
    $(e.target).toggleClass('box-filled-1');
    $(e.target).css('background-color', '#EFEFEF');
  } else if ($player2.hasClass('active') ) {
    $(e.target).toggleClass('box-filled-2');
    $(e.target).css('background-color', '#EFEFEF');
  }
});
