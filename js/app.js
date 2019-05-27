/**
 * Connect the objects to the DOM
 */
const vsComputerButton = document.querySelector('#vs-computer');
const vsFriendButton = document.querySelector('#vs-friend');
const startButton = document.querySelector('#start-button');
const playerNames = document.querySelector('.player-names')
const start = document.getElementById('start');
const board = document.getElementById('board');
const finish = document.getElementById('finish');
const spaces = document.querySelector('ul.boxes');
const newGameButton = document.querySelector('#finish a.button');
let game;
let vsComputer;

playerNames.style.display = 'none'
startButton.style.display = 'none'
board.style.display = 'none';
finish.style.display = 'none';

vsComputerButton.addEventListener('click', () => {
    hideVsButtons()
    document.querySelector('#player-2-name').style.display = 'none'
    document.querySelector('label[for="player-2-name"]').style.display = 'none'
    showStartActions()
    vsComputer = true
})

vsFriendButton.addEventListener('click', () => {
    hideVsButtons()
    showStartActions()
    vsComputer = false
})

startButton.addEventListener("click", () => {
    start.style.display = 'none';
    board.style.display = 'block';
    handleInitGameClass()
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
    handleInitGameClass()
    game.startGame();
});

/**
 * Handles initiating an instance of the game and will pass a boolean to the game constructor to
 * determine if the player chose to play against a computer or not.
 */
function handleInitGameClass(){
    if (vsComputer){
        game = new Game(vsComputer)
    } else {
        game = new Game()
    }
}

/**
 * Hides the "Play vs Friend" and "Play vs PC" buttons
 */
function hideVsButtons(){
    vsFriendButton.style.display = 'none';
    vsComputerButton.style.display = 'none';
}

/**
 * Shows the player name inputs and the start game button
 */
function showStartActions(){
    playerNames.style.display = 'block';
    startButton.style.display = 'inline-block';
}