/**
 * Space Object represents a space on the game board
 * A space will hold a reference to the token that occupies it
 */

class Space {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.id = `space-${x}-${y}`;
        this.token = null;
    }

    /**
     * Get the DOM space to attach an event listener to it
     */
    get htmlSpace(){
        return document.getElementById(this.id);
    }

    /**
     * Checks to see if a player owns this space and returns the owner
     * @return {null || object} null if there is no token associated with the space, else return the owner object
     */
    get owner(){
        if (this.token === null) {
            return null
        } else {
            return this.token.owner.name;
        }
    }

    /**
     * Create an HTML representaion of the object
     */
    renderHTMLSpace(){
        const space = document.createElement('li');
        space.setAttribute("class", "box");
        space.setAttribute("id", this.id);
        document.querySelector("ul.boxes").appendChild(space);
    }

    /**
     * Mark the space object as occupied
     * @param {object} token - token that was dropped in this space
     */
    mark(token){
        this.token = token;
    }

}