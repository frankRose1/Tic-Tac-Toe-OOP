/**
 * Game Object maintains the state of the game
 */

class Game {
    constructor(){
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false; //controlls wether or not the game can be interacted with
    }

    /**
     * Create two players
     */
    createPlayers(){
        const players = [
            new Player("John", 1, "#FFA000", true),
            new Player("Jane", 2, "#3688C3")
        ];
        return players;
    }

    /**
     * Initialize the Game
     */
    startGame(){
        console.log('game started');
        this.board.renderBoard();
        this.ready = true;
    }
}