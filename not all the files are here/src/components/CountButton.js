import React, { useState } from "react";
import "./ClickCounter.css";

function ClickCounter() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Click Counter</h1>
      <div>
        <button className="counter-button negative" onClick={() => setCounter(counter - 1)}>-</button>
        <span className="counter-value">{counter}</span>
        <button className="counter-button" onClick={() => setCounter(counter + 1)}>+</button>
      </div>
    </div>
  );
}

export default ClickCounter;