import React, { useState } from 'react'
// A component will render if seCount or setName or set.... is called 
const UseState6 = () => {
  let [count,setCount]=useState(0)
    return (
    <div>
        count is {count}
        <br></br>
        <button
        onClick={()=>{
            setCount(count+1)
            
        }}
        >Incerment count</button>
    </div>
  )
}

export default UseState6