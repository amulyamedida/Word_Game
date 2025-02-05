# Wordle Clone

## Objective
This project is a Wordle Clone built with React. The goal is to replicate the core gameplay of the popular Wordle game, where the user has to guess a 5-letter word within 6 attempts. After each guess, the game provides feedback with color codes indicating whether the guessed letter is correct, in the wrong position, or not in the word at all.

## Game Rules
- **Word Length**: The word to guess is always a 5-letter word.
- **Attempts**: You have 6 attempts to guess the word correctly.
- **Feedback**:
  - **Green**: Correct letter in the correct position.
  - **Yellow**: Correct letter but in the wrong position.
  - **Gray**: Incorrect letter that does not appear in the word.
- **Winning Condition**: If you guess the correct word within 6 attempts, you win.
- **Losing Condition**: If you use all 6 attempts without guessing the word, you lose.
- **New Game**: After either winning or losing, you can click the "New Game" button to start a new game with a random word.

## Features
- **Responsive Design**: The app is fully responsive and works well on both desktop and mobile devices.
- **Animations**: The color feedback for each letter uses smooth animations to make the game visually appealing.
- **Keyboard Input**: You can submit your guess by either clicking the "Submit" button or pressing the Enter key on your keyboard.
- **Game Reset**: You can restart the game with a new random word using the "New Game" button.

## Tech Stack
- React for building the app.
- CSS for styling and animations.
- No backend is used; the words are hardcoded.

## How to Run the Project
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/amulyamedida/wordle-clone.git
