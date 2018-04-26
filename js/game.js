
//                      GAME CONSTRUCTOR AND ALL RELATED AND METHODS START
//create a game constructor that also has player objects within it
class Game {
  constructor() {
    this.players = [];
    this.gameOver = false;
    this.moves = 0;
    this.currentPlayer = '';
  }

  //add player to the game
  addPlayer(player) {
    this.players.push(player);
  }

  playerTurn() {
    //keeps track of turns
  }

  nextTurn() {
    //go to next player
  }

  outputSVG() {
    //output the svg to the game based on player's turn
  }

  restartGame() {
    //restart game based on scorer or if users resets
  }

}//end class
//////////////////////////////////////////////////

//                    INDIVIDUAL PLAYER CONSTRUCTOR AND METHODS START
class Player {
  constructor(name) {
    this.name = name;
  }
}

//start a new game
let game = new Game();
//create new players
let player1 = new Player('Player 1');
let player2 = new Player('Player 2');
//add the players to the game
game.addPlayer(player1);
game.addPlayer(player2);
