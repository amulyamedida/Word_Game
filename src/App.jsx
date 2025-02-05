import React, { useState } from "react";
import Grid from "./components/Grid";
import Keyboard from "./components/Keyboard";
import Message from "./components/Message";
import NewGameButton from "./components/NewGameButton";
import { WORDS } from "./utils/words";
import "./styles.css";

const getRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)];

const App = () => {
  const [word, setWord] = useState(getRandomWord().toUpperCase());
  const [guesses, setGuesses] = useState([]);
  const [gameStatus, setGameStatus] = useState("playing"); // "playing", "won", "lost"

  const handleGuess = (guess) => {
    if (guesses.length >= 6 || gameStatus !== "playing") return;
    
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);

    if (guess === word) {
      setGameStatus("won");
    } else if (newGuesses.length === 6) {
      setGameStatus("lost");
    }
  };

  const restartGame = () => {
    setWord(getRandomWord().toUpperCase());
    setGuesses([]);
    setGameStatus("playing");
  };

  return (
    <div className="game-container">
      <h1>Wordle Clone</h1>
      <Grid guesses={guesses} word={word} />
      {gameStatus !== "playing" && <Message status={gameStatus} word={word} />}
      <Keyboard onGuess={handleGuess} />
      <NewGameButton onRestart={restartGame} />
    </div>
  );
};

export default App;
