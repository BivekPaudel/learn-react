import React, { useState } from "react";

const UseState2 = () => {
  let [show, setShow] = useState(true);
  return (
    <div>
      <div style={{display:"flex",justifyContent:"center",align:"center"}}>{show ? <img src=".\favicon.ico" alt=" "></img> : null}</div>
      <br></br>
      <button
        style={{
          borderRadius: "10px",
          cursor: "pointer",
        }}
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "hide" : "show"}
      </button>
    </div>
  );
};

export default UseState2;
