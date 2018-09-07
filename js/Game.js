/**
 * Game Object maintains the state of the game and handles DOM events
 */

class Game {
    constructor(){
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false; //controlls wether or not the game can be interacted with
    }

    /**
     * Determine which player's turn it is
     * @return {object} activePlayer - player whos "active" property is true
     */
    get activePlayer() {
        return this.players.find(player => player.active);
    }

    /**
     * Create two players
     */
    createPlayers(){
        const players = [
            new Player("John", "player1", "#FFA000", true),
            new Player("Jane", "player2", "#3688C3")
        ];
        return players;
    }

    /**
     * Adjust the HTML for the players turn
     */
    playerTurn(){
        const activePlayer = this.activePlayer;
        document.getElementById(activePlayer.id).style.backgroundColor = activePlayer.color;
    }

    /**
     * Toggle the player's Token image as they hover over a space
     * @param {object} e - the mouseover event
     */
    handleMouseOver(e){
        if (!e.target.classList.contains('box')) {return;}
        console.log(e.target);
        e.target.style.backgroundImage = `url(${this.activePlayer.activeToken.tokenPath})`;
    }

    /**
     * Remove the player's Token image as they mouse out of a  space
     * @param {object} e - the mouseout event
     */
    handleMouseOut(e){
        if (!e.target.classList.contains('box')) {return;}
        console.log(e.target);
        e.target.style.backgroundImage = "";
    }

     /**
     * Occupy a space with a player's SVG token
     * @param {object} e - the click event
     */
    handleClick(e){
        if (!e.target.classList.contains('box')) {return;}
        e.target.style.backgroundImage = `url(${this.activePlayer.activeToken.tokenPath})`;
        e.target.style.backgroundColor = this.activePlayer.color;
    }

    /**
     * Initialize the Game
     */
    startGame(){
        console.log('game started');
        this.board.renderHTMLBoard();
        this.playerTurn();
        this.ready = true;
    }
}