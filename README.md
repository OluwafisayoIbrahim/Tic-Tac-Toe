# Tic-Tac-Toe React App

This is a simple Tic-Tac-Toe game built using React. It allows two players to take turns and keeps track of their scores. If you win a game, you'll even hear a celebratory sound effect!

![image](https://github.com/OluwafisayoIbrahim/Tic-Tac-Toe/assets/78263397/4218884b-98a0-46dc-b3a9-eff2e6f324ca)


## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [How to Play](#how-to-play)
- [Components](#components)
- [Sound Effects](#sound-effects)
- [Contributing](#contributing)

## Features

- Classic Tic-Tac-Toe gameplay.
- Scoreboard to keep track of "X" and "O" scores.
- Sound effects for the winning player.
- Option to reset the game board.

## Getting Started

To get started with the Tic-Tac-Toe app, follow these steps:

1. Clone the repository to your local machine:

   ```bash```
   git clone <repository-url>

2. Navigate to the project directory:

```bash```
cd <project-directory>

3. Install the necessary dependencies:

```bash```
npm install

4. Start the development server:

```bash```
npm start

The app should now be running locally in your browser.

## How to Play
1. The game is played on a 3x3 grid.
2. Two players take turns marking a square with their symbol: "X" or "O."
3. The first player to get three of their symbols in a row (horizontally, vertically, or diagonally) wins the game.
4. If all the squares are filled, and no player has three in a row, the game ends in a draw.
   
## Components
The app is structured into several components:

1. Board: Renders the game board and handles player moves.
2. Box: Represents an individual square on the board and responds to player clicks.
3. ResetButton: Provides a button to reset the game board.
4. ScoreBoard: Displays the current scores for "X" and "O" players.
   
These components work together to create the game's user interface and logic.

## Sound Effects
The app includes sound effects to enhance the gaming experience. When a player wins, you'll hear a celebratory sound:

1. "yay.mp3" for the "X" player's win.
2. "uhh.mp3" for the "O" player's win.
   
## Contributing
We welcome contributions to this project. If you'd like to contribute, you can do so by:

1. Opening issues for bug reports or feature requests.
2. Submitting pull requests with improvements or new features.

Your contributions are greatly appreciated!
