import React from "react";

const getLetterClass = (letter, index, word) => {
  if (!word.includes(letter)) return "absent";
  if (word[index] === letter) return "correct";
  return "present";
};

const Grid = ({ guesses, word }) => {
  return (
    <div className="grid">
      {Array.from({ length: 6 }).map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {Array.from({ length: 5 }).map((_, colIndex) => {
            const letter = guesses[rowIndex]?.[colIndex] || "";
            const className = letter ? getLetterClass(letter, colIndex, word) : "";
            return <div key={colIndex} className={`cell ${className}`}>{letter}</div>;
          })}
        </div>
      ))}
    </div>
  );
};

export default Grid;
