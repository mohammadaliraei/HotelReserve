import React, { useState } from "react";

const YourComponent = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [textInput, setTextInput] = useState("");

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event: any) => {
    setTextInput(event.target.value);
  };

  return (
    <div>
      <label htmlFor="options">Select an option:</label>
      <select
        id="options"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="">Choose an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      <br />

      <label htmlFor="textInput">Text Input:</label>
      <input
        type="text"
        id="textInput"
        value={textInput}
        onChange={handleInputChange}
        placeholder="Enter something"
      />

      <br />

      <p>Selected Option: {selectedOption}</p>
      <p>Text Input: {textInput}</p>
    </div>
  );
};

export default YourComponent;
