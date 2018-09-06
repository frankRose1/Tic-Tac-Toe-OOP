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
     * Create an HTML representaion of the object
     */
    renderSpace(){
        const space = document.createElement('li');
        space.setAttribute("class", "box");
        space.setAttribute("id", this.id);
        document.querySelector("ul.boxes").appendChild(space);
    }
}