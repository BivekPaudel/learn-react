import React from "react";

const InlineCss = () => {
 let friend=["nitan","ram","hari"]
 let divFriend=friend.map((value,i)=>{
  return <div>my best friend is {value}</div>
 })
  
  return (
    <div>
      <p style={{ backgroundColor: "red", color: "white", padding: "30px" }}>
        My name is Bivek poudel
      </p>

      <p className="bg-blue">I am 22</p>
      <p style={{ border: "solid green 25px" }}>Hello world</p>

      <button
        onClick={() => {
          console.log("button is clicked");
        }}
        style={{ cursor: "pointer" }}
      >
        Click me
      </button>

      <p
        onClick={() => {
          console.log("We can use on onlick props in any tag");
        }}
        style={{ cursor: "pointer" }}
      >
        Bivek
      </p>
      
      {divFriend}


    </div>


  );
};
export default InlineCss;
