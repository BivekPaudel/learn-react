import React from "react";

const Form1 = () => {
  return (
    <div>
      <form>
        <label htmlFor="name">FirstName:</label>
        <input type="text" id="name"></input>
        <br></br>
        <label htmlFor="Lname">LastName:</label>
        <input type="text" id="Lname"></input>
        <br></br>
        <label htmlFor="e-mail">Email:</label>
        <input id="e-mail" type="email"></input>
        <br></br>
        <label htmlFor="ContactNumber">Number:</label>
        <input id="ContactNumber" type="number"></input>
        <br></br>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password"></input>
        <label htmlFor="gender">Gender:</label>
        
      </form>
    </div>
  );
};

export default Form1;
