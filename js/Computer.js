/**
 * Players of the game have the option of playing against a computer
 * 
 * Computer class exends the "Player" class
 */

class Computer extends Player {
  constructor(...props){
    super(...props)
  }

  /**
   * Randomly picks a space on the board based on the remaining available spaces.
   * Then a click event is forced on the randomly selected DOM element
   */
  makeMove(){
    const boardSpaces = document.querySelectorAll('ul.boxes')[0].children;
    const availalbeSpaces = []
    for (let i = 0; i < boardSpaces.length; i++){
      if (!boardSpaces[i].classList.contains('box-filled-1') && 
          !boardSpaces[i].classList.contains('box-filled-2')) {
        availalbeSpaces.push(boardSpaces[i])
      }
    }
    const randNum = Math.floor(Math.random() * availalbeSpaces.length)
    const selectedSpace = availalbeSpaces[randNum]
    selectedSpace.click()
  }

}