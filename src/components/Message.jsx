import React from "react";

const Message = ({ status, word }) => {
  return (
    <div className="message">
      {status === "won" ? (
        <h2>You guessed the word! 🎉</h2>
      ) : (
        <h2>You lost! The word was: {word} 😢</h2>
      )}
    </div>
  );
};

export default Message;
