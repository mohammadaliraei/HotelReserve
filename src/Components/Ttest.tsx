import React, { useState } from "react";
import "./App.css"; // Make sure to import your Tailwind CSS styles

function Ttest() {
  const [buttonColors, setButtonColors] = useState({
    button1: false,
    button2: false,
    button3: false,
  });

  const handleButtonClick = (button: any) => {
    // Clone the current state object to avoid mutating it directly
    const newButtonColors: any = { ...buttonColors };

    // Toggle the color state for the clicked button
    newButtonColors[button] = !newButtonColors[button];

    // Update the state with the new button color
    setButtonColors(newButtonColors);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <button
        className={`border-2 w-[120px] h-[40px] font-Mikhak rounded-md justify-center text-center ${
          buttonColors.button1
            ? "text-white bg-Blue border-Blue"
            : "border-Blue"
        } `}
        onClick={() => handleButtonClick("button1")}
      >
        <h1>یک طرفه</h1>
      </button>

      <button
        className={`border-2 w-[120px] h-[40px] font-Mikhak rounded-md justify-center text-center ${
          buttonColors.button2
            ? "text-white bg-Blue border-Blue"
            : "border-Blue"
        } `}
        onClick={() => handleButtonClick("button2")}
      >
        <h1>رفت و برگشت</h1>
      </button>

      <button
        className={`border-2 w-[120px] h-[40px] font-Mikhak rounded-md justify-center text-center ${
          buttonColors.button3
            ? "text-white bg-Blue border-Blue"
            : "border-Blue"
        } `}
        onClick={() => handleButtonClick("button3")}
      >
        <h1>رفت</h1>
      </button>
    </div>
  );
}

export default Ttest;
