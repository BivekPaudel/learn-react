import React, { useState } from "react";

const UseState1 = () => {
  //let [name] = useState("Bivek");
  let [name,setName]=useState("Bivek")
  let [age,setAge]=useState(0)
  
  return <div>
   name is  {name}
    <br></br>
    <button
    onClick={()=>{
      setName("ram")
    }}
    >Change name</button><br></br>
   age is {age}
    <br></br>
    <button
    onClick={()=>{
      setAge(22)
    }}
    >Change Age</button><br></br>

    <button
    onClick={()=>{
      setName("Sandesh")
      setAge(22)
    }}
    >Change name and age</button>
  </div>;
};

export default UseState1;
