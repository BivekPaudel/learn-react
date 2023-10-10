import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ReadSpecificContact = () => {
  let [data,setData]=useState({})
  // let ContactId="64f6c04fc722e5cb9555c26f"
  let params=useParams()

  let getContact=async()=>{
    let result=await axios({
        url:`http://localhost:8000/api/v1/contacts/${params.contactId}`,
        method:"GET"
        
    })
    setData(result.data.data)
  }
  useEffect(()=>{
    getContact()
  },[])

    return (
    <div>
        <p>fullName:{data.fullName}</p>
        <p>email:{data.email}</p>
        <p>phoneNumber:{data.phoneNumber}</p>
    </div>
  )
}

export default ReadSpecificContact