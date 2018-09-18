/**
 * Connect the objects to the DOM
 */
const startButton = document.querySelector('#start a.button');
const start = document.getElementById('start');
const board = document.getElementById('board');
const finish = document.getElementById('finish');
const spaces = document.querySelector('ul.boxes');
const newGameButton = document.querySelector('#finish a.button');
let game;

board.style.display = 'none';
finish.style.display = 'none';

startButton.addEventListener("click", () => {
    game = new Game();
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

newGameButton.addEventListener("click", () => {
    finish.style.display = 'none';
    spaces.innerHTML = '';
    board.style.display = 'block';
    game = new Game();
    game.startGame();
});