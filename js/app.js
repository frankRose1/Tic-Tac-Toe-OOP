/**
 * Connect the objects to the DOM
 */
const startButton = document.querySelector('#start a.button');
const start = document.getElementById('start');
const board = document.getElementById('board');
const finish = document.getElementById('finish');
const spaces = document.querySelector('ul.boxes');
const game = new Game();
console.log(game);

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