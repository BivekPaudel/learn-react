// A page is rendered if state variable changes
// when conponent gets rendered the state variable will be updated if the component is render by that variable
//else state variable holds previous value
// Too prevent infinite loop we must change state variable on button click
import React, { useState } from "react";
const UseState7 = () => {
  let [count, setCount] = useState(0);
  let [count1,setCount1]=useState(100)
  console.log("hello")
  return (
    <div>
      count is {count}
      <br></br>
      count1 is {count1}
      <br></br>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment count
      </button>
      <br></br>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        increment count1
      </button>
    </div>
  );
};

export default UseState7;
