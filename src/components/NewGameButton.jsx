import React from "react";

const NewGameButton = ({ onRestart }) => {
  return <button className="new-game" onClick={onRestart}>New Game</button>;
};

export default NewGameButton;
