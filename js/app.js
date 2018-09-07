/**
 * Connect the objects to the DOM
 */
const startButton = document.querySelector('#start a.button');
const start = document.getElementById('start');
const board = document.getElementById('board');
const finish = document.getElementById('finish');
const spaces = document.querySelector('ul.boxes');
const game = new Game();

//hide the board and finish screen
board.style.display = 'none';
finish.style.display = 'none';

startButton.addEventListener("click", () => {
    start.style.display = 'none';
    board.style.display = 'block';
    game.startGame();
});

spaces.addEventListener("mouseover", (e) => {
    game.handleMouseOver(e);
});

spaces.addEventListener("mouseout", (e) => {
    game.handleMouseOut(e);
});

spaces.addEventListener("click", (e) => {
    game.handleClick(e);
});

//TODO: When a click happens
// change gamestate to false
// mark a token as played
//mark the DOM element as occupied
// check for a winner
// switch players
//pull a new token for a player