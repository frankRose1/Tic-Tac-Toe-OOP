/**
 * Player objects will have an associated icon and spaces that are occupied by the player
 */

class Player {
    constructor(name, id, color, active = false){
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = this.createTokens(5); //method that creates tokens that belong to the player
    }

    /**
     * Determine which tokens havn't been played yet
     * @return {array} unusedTokens - array of tokens whos "played" value is false;
     */
    get unusedTokens(){
        const unusedTokens = this.tokens.filter(token => !token.played);
        return unusedTokens;
    }

    /**
     * Pull one of the player's unused tokens to be used as the next active token
     * @return {object} token - the first token in the unusedTokens array
     */
    get activeToken(){
        return this.unusedTokens[0];
    }

    /**
     * Each Player will get 5 tokens 
     * @param {integer} numOfTokens - number of tokens to create
     * @return {array} tokens - array of token objects
     */
    createTokens(numOfTokens){
        const tokens = [];
        for (let i = 0; i < numOfTokens; i++) {
            const token = new Token(this, i);
            tokens.push(token);
        }
        return tokens;
    }
}