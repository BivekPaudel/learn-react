import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  let navigate=useNavigate()
  return (
    <div>
      Contact
      <br></br>
      <button
      onClick={()=>{
        navigate("/about")
      }}
      >Click me</button>
    </div>
  )
}

export default Contact