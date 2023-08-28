// make  a component that is use for increment and decrement and reset the count
// ie make a state variable initilize 0 as initialvalue
// make a button named Increment when it is clicked the variable must be increase by one
// make a button named Decrement when it is clicked the variable must be decrease by one
// make a button named Reset when it is clicked it rest the count to 0

import React, { useState } from "react";

const Assignment1 = () => {
  let [counter, setCounter] = useState(0);
  return (
    <div>
        
      <div style={{ color: "green" }}> counter is {counter}</div>
      <br></br>
      <button style={{borderRadius:"10px",backgroundColor:"skyBlue",cursor:"pointer"}} 
      onClick={() => [setCounter(counter + 1)]}>Increment</button>
      <br></br>
      <button style={{borderRadius:"10px",backgroundColor:"skyBlue",cursor:"pointer"}}
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
      <br></br>
      <button style={{borderRadius:"10px",backgroundColor:"skyBlue",cursor:"pointer"}}
        onClick={() => {
          setCounter((counter = 0));
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default Assignment1;
