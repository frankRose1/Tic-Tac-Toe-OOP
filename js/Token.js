/**
 * Each player will have an array of tokens
 * Each tokens properties largely depend on the player who owns it
 */

class Token {
    constructor(owner, index) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`; //will help us reference the HTML representation if the object
        this.played = false;
    }

    get tokenPath(){
        let tokenPath = "";
        if (this.owner.id === "player1") {
            tokenPath = 'img/o.svg';
        } else {
            tokenPath = 'img/x.svg';
        }
        return tokenPath;
    }

    /**
     * Get the path to the token and store a reference of the object ID
     * player1 gets the O SVG
     * player2 gets the X SVG
     */
    renderHTMLToken(){
        let tokenPath = "";
        if (this.owner.id === "player1") {
            tokenPath = '../img/o.svg';
        } else {
            tokenPath = '../img/x.svg';
        }
        const tokenId = this.id;
        return [tokenPath, tokenId];
    }

    /**
     * Use the ID of the Token object to get the DOM representaion
     */
    get htmlToken(){
        return document.getElementById(this.id);
    }

}