import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
    let [fullName, setFullName] = useState("");
    let [address, setAddress] = useState("");
    let [phoneNumber, setPhoneNumber] = useState("");
    let [email, setEmail] = useState("");
    let navigate=useNavigate()
    return (
      <div>
        <form
          onSubmit={async(e) => {
            e.preventDefault();
            let data={
                fullName:fullName,
                address:address,
                phoneNumber:phoneNumber,
                email:email
            }
            //console.log(data)
            let result=await axios({
              url: "http://localhost:8000/api/v1/contacts",
              method:"POST",
              data:data

            })
            navigate("/contact")
          }}
        >
            <div>
            <label htmlFor="fullName">FullName</label>
            <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e)=>{
                setFullName(e.target.value)
            }}
            ></input>
            </div>
            <div>
            <label htmlFor="address">Address</label>
            <input
            type="text"
            id="fullName"
            value={address}
            onChange={(e)=>{
                setAddress(e.target.value)
            }}
            ></input>
            </div>
            <div>
            <label htmlFor="phoneNumber">PhoneNumber</label>
            <input
            type="number"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e)=>{
                setPhoneNumber(e.target.value)
            }}
            ></input>
            </div>
            <div>
            <label htmlFor="email">Email</label>
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e)=>{
                setEmail(e.target.value)
            }}
            ></input>
            </div>
  
          
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default ContactForm;