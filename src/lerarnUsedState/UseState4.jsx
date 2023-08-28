import React, { useState } from 'react'

const UseState4 = () => {
    let [showError,setShowError]=useState(true)
  return (
    <div>
{
    showError? <div>This is error</div>:null
}

<button
onClick={()=>{
    setShowError(!showError)

}}
>{
    showError? "Hide":"show"
} </button>

    </div>
  )
}

export default UseState4