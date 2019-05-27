# Tic-Tac-Toe with Object Oriented JavaScript
A functional two person tic tac toe game built with OOJS. I used ES2015 class syntax, methods, and some getters/setters for this project. The Classes represent different aspects of the game and elements in the DOM. The ```Game``` class is where you'll find the bulk of the game logic and where DOM events are handled.

## About the Classes
* ```Game``` manages the state of the game, switching palyer turns, and handling DOM events
* ```Board``` made up of individual ```Space``` objects and renders the game board in the DOM
* ```Space``` represents a space on the board. When a token occupies a space the object is marked as having an owner
* ```Token``` represents an "X" or "O" svg and allows a player to make a move. Each token has a property that points to it's owner
* ```Player``` represents each player in the game. Each player owns a set of tokens that are played each turn
* ```Computer``` extends the ```Player``` Class. User's of the game have the option of playing against a computer. The computer will make a move based on
  which DOM elements on the game board havn't been selected yet.

## App Features
* Players have the option of playing with a friend or against a computer
* Game alternates active players
* Active player identified on the page (The O or X is highlighted, depending on whose turn it is)
* Empty squares are highlighted with player's symbol when moused over
* Cannot click on already occupied squares
* Occupied squares are identified with an X or O
* Games ends if player has 3 symbols in a row, or the board is full and no winner has been declared
* Finish screen appears announcing winner or a draw
* New game button triggers ```new Game()``` and clears the board

## Author
Frank Rosendorf