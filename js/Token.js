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
}