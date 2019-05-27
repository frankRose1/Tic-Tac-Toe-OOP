/**
 * Game Object maintains the state of the game and handles DOM events
 */

class Game {
    constructor(vsComputer = false){
        this.vsComputer = vsComputer
        this.board = new Board();
        this.players = this.createPlayers();
        this.win = false;
        this.turns = 0;
        this._ready = false;
    }

    /**
     * Determine which player's turn it is
     * @return {object} activePlayer - player whos "active" property is true
     */
    get activePlayer() {
        return this.players.find(player => player.active);
    }

    get ready(){
        return this._ready
    }

    set ready(val){
        this._ready = val
    }

    /**
     * Create two players. Player 2 will be an instance of "Computer" if "this.vsComputer"
     * is set to true. Will also randomly choose which player goes first
     */
    createPlayers(){
        const player1Input = document.getElementById("player-1-name").value;
        const player1Name = player1Input.trim().length > 0 ? player1Input : "Player 1";
        const p1Active = Math.floor(Math.random() * 2) === 0;
        let player2;
        if (this.vsComputer){
            player2 = new Computer('Computer', 'player2', '#3688C3', !p1Active)
        } else {
            const player2Input = document.getElementById("player-2-name").value;
            const player2Name = player2Input.trim().length > 0 ? player2Input : "Player 2";
            player2 = new Player(player2Name, 'player2', '#3688C3', !p1Active)
        }
        return [
            new Player(player1Name, "player1", "#FFA000", p1Active),
            player2
        ];
    }

    /**
     * Adjust the HTML for the players turn and if the active player is a computer
     * call the "makeMove" method
     */
    playerTurn(){
        this.ready = true
        const unactivePlayer = this.players.find(player => !player.active);
        const activePlayer = this.activePlayer;
        document.getElementById(unactivePlayer.id).classList.remove('active');
        document.getElementById(activePlayer.id).classList.add('active');
        
        if (activePlayer.name === 'Computer'){
            activePlayer.makeMove()
        }
    }

    /**
     * Switch players after each click
     */
    switchPlayers(){
        for (let player of this.players) {
            player.active = player.active === true ? false : true;
        }
    }

    /**
     * Print the results of the game in the DOM
     * @param {string} message - winner of game or a draw
     */
    gameOver(message, result){
        const finish = document.getElementById('finish');
        const winnerTally = document.querySelector(`.${this.activePlayer.id}-wins span.win-num`)
        finish.classList.remove("screen-win-tie", "screen-win-one", "screen-win-two")
        let screenStyle; 
        document.getElementById('board').style.display = 'none';

        if (result === 'draw') {
            screenStyle = 'screen-win-tie';
            finish.style.backgroundColor = '#54D17A';
        } else {
            screenStyle = this.activePlayer.id == 'player1' ? 'screen-win-one' : 'screen-win-two';
            finish.style.backgroundColor = this.activePlayer.color;
            winnerTally.textContent = parseInt(winnerTally.textContent) + 1
        }
        
        finish.style.display = 'block';
        finish.classList.add(screenStyle);
        document.querySelector('p.message').textContent = message;
    }

    /**
     * If 9 turns pass and a winner isn't found, there is a draw
     * @return {boolean} - draw will be true or false
     */
    checkForDraw(){
        let draw = false;
        if (!this.win && this.turns == 9) {
            draw = true;
        }
        return draw;
    }

    /**
     * Check the spaces horizontal diagonal and vertical from where the space was clicked
     * @param {object} target - space object most recently filled
     * @return {boolean} win - whether or not a winner was found
     */
    checkForWinner(target){
        const owner = target.owner;
        let win = false;

        //vertical
        for (let x = 0; x < this.board.cols - 2; x++) {
            for (let y = 0; y < this.board.rows; y++) {
                if (this.board.spaces[x][y].owner === owner && 
                    this.board.spaces[x + 1][y].owner === owner &&
                    this.board.spaces[x + 2][y].owner === owner ) {
                    win = true;
                    return win;
                }
            }
        }

        //horizontal
        for (let x = 0; x < this.board.cols; x++) {
            for (let y = 0; y < this.board.rows - 2; y++) {
                if (this.board.spaces[x][y].owner === owner && 
                    this.board.spaces[x][y + 1].owner === owner &&
                    this.board.spaces[x][y + 2].owner === owner ) {
                    win = true;
                    return win;
                }
            }
        }

        //diagonal (top left - bottom right)
        if (this.board.spaces[0][0].owner === owner && 
            this.board.spaces[1][1].owner === owner &&
            this.board.spaces[2][2].owner === owner) {
                win = true;
                return win;
        }

        //diagonal (top right - bottom left)
        if (this.board.spaces[0][2].owner === owner && 
            this.board.spaces[1][1].owner === owner &&
            this.board.spaces[2][0].owner === owner) {
                win = true;
                return win;
        }

        return win;
    }

    /**
     * Update the state of the game and check for a winner
     * @param {object} token - token that was most recently played
     * @param {object} targetSpace - space that was most recently occupied
     */
    updateGameState(token, targetSpace){
        this.turns++;

        //mark the space and establish the token has been played
        targetSpace.mark(token);
        token.played = true;
        //check for a win or draw
        const gameIsOver = this.checkForWinner(targetSpace);
        const draw = this.checkForDraw();
        if (gameIsOver) {
            this.win = true;
            this.gameOver(`${this.activePlayer.name} wins!`, 'win');
        } else if (draw) {
            this.gameOver('It\'s a draw!', 'draw');
        } else {
            this.switchPlayers();
            this.playerTurn();
        }
    }

    /**
     * Toggle the player's Token image as they hover over a space only if the game state is ready
     * @param {object} e - the mouseover event
     */
    handleMouseOver(e){
        if (this.ready) {
            if (e.target.classList.contains('box-filled-1') || e.target.classList.contains('box-filled-2')) {
                return;
            }
            if (!e.target.classList.contains('box')) {return;}
            e.target.style.backgroundImage = `url(${this.activePlayer.activeToken.tokenPath})`;
        }
    }

    /**
     * Remove the player's Token image as they mouse out of a space
     * @param {object} e - the mouseout event
     */
    handleMouseOut(e){
        if (this.ready) {
            if (e.target.classList.contains('box-filled-1') || e.target.classList.contains('box-filled-2')) {
                return;
            }
            if (!e.target.classList.contains('box')) {return;}
            e.target.style.backgroundImage = "";
        }
    }

    /**
     * Occupy a space with a player's SVG token
     * @param {object} e - the click event
     */
    handleClick(e){
        if (this.ready) {
            if (e.target.classList.contains('box-filled-1') || e.target.classList.contains('box-filled-2')) { return; }
            if (!e.target.classList.contains('box')) { return; }
            //make game state false while game is updated
            this.ready = false;

            //mark the targeted DOM space
            const fillClass = this.activePlayer.id == 'player1' ? 'box-filled-1' : 'box-filled-2';
            e.target.classList.add(fillClass);

            //update the game state
            const spaceId = e.target.id;
            const token = this.activePlayer.activeToken;
            const targetSpace = this.board.findSpace(spaceId);
            this.updateGameState(token, targetSpace);
        }
    }

    /**
     * Initialize the Game
     */
    startGame(){
        this.board.renderHTMLBoard();
        const p1NameCard = document.querySelector(".player1-name");
        const p2NameCard = document.querySelector(".player2-name");
        p1NameCard.textContent = this.players[0].name;
        p1NameCard.style.color = this.players[0].color;
        p2NameCard.textContent = this.players[1].name;
        p2NameCard.style.color = this.players[1].color;
        this.playerTurn();      
    }
}