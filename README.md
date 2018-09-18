# Tic-Tac-Toe with Object Oriented JavaScript
A functional two person tic tac toe game built with OOJS. Objects represent different aspects of the game and elements in the DOM. The ```Game``` class is where you'll find the bulk of the game logic and where DOM events are handled.

## About the Objects
* ```Game``` manages the state of the game, switching palyer turns, and handling DOM events
* ```Board``` made up of individual ```Space``` objects and renders the game board in the DOM
* ```Space``` represents a space on the board. When a token occupies a space the object is marked as having an owner
* ```Token``` represents an "X" or "O" svg and allows a player to make a move. Each token has a property that points to it's owner
* ```Player``` represents each player in the game. Each player owns a set of tokens that are played each turn

## App Features
* Game alternates active players
* Active player identified on the page (The O or X is highlighted, depending on whose turn it is)
* Empty squares are highlighted with player's symbol when moused over
* Cannot click on already occupied squares
* Occupied squares are identified with an X or O
* Games ends if player has 3 symbols in a row, or the board is full
* Finish screen appears announcing winner (or tie)
* New game button triggers ```new Game()``` and clears the board

## Author
Frank Rosendorf