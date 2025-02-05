import React, { useState } from "react";

const Keyboard = ({ onGuess }) => {
  const [input, setInput] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setInput(e.target.value.toUpperCase().slice(0, 5)); // Limit to 5 characters
  };

  // Handle input submission
  const handleSubmit = () => {
    if (input.length === 5) {
      onGuess(input);
      setInput("");
    }
  };

  // Handle "Enter" key press to trigger the same submit behavior
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission if inside a form
      handleSubmit();     // Call the handleSubmit function when Enter is pressed
    }
  };

  return (
    <div className="keyboard">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}  // Listen for key press events
        placeholder="Enter word"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Keyboard;



/*import React, { useState } from "react";

const Keyboard = ({ onGuess }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value.toUpperCase().slice(0, 5));
  };

  const handleSubmit = () => {
    if (input.length === 5) {
      onGuess(input);
      setInput("");
    }
  };

  return (
    <div className="keyboard">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter word"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Keyboard;*/
