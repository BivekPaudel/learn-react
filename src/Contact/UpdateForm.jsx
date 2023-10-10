import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateForm = () => {
    let [fullName, setFullName] = useState("");
    let [address, setAddress] = useState("");
    let [phoneNumber, setPhoneNumber] = useState("");
    let [email, setEmail] = useState("");
    // let contactId="64f6c04fc722e5cb9555c26f"
let params=useParams
  let contactId=params.contatId
    const getContact=async()=>{
      let result=await axios({
        url:`http://localhost:8000/api/v1/contacts/${contactId}`,
        method:`GET`,
       

      })
      let contact=result.data.data
      setFullName(contact.fullName)
      setAddress(contact.address)
      setPhoneNumber(contact.phoneNumber)
      setEmail(contact.email)
    }
    useEffect(()=>{
      getContact()
    },[])
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
              url: `http://localhost:8000/api/v1/contacts/${params.contactId}`,
              method:"PATCH",
              data:data

            })
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
  
          
          <button type="submit">update</button>
        </form>
      </div>
    );
  };
  
  export default UpdateForm;