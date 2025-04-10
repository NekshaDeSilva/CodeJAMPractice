import React, { useState, useEffect } from "react";
import "../../test01_integratedChatInstance/style/style.css";
const CounterApp = () => {
    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount((prevCount) => prevCount + 1);
    };
  
    const decrement = () => {
      setCount((prevCount) => prevCount - 1);
    };
  
    const reset = () => {
      setCount(0);
    };
  
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>Simple Counter App</h1>
        <h2>Count: {count}</h2>
        <div>
          <button onClick={increment} style={{ margin: "5px" }}>
            Increment
          </button>
          <button onClick={decrement} style={{ margin: "5px" }}>
            Decrement
          </button>
          <button onClick={reset} style={{ margin: "5px" }}>
            Reset
          </button>
        </div>
      </div>
    );
  };
  
  export default CounterApp;