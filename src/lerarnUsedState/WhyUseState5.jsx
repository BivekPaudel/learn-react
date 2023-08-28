import React, { useState } from 'react'

const WhyUseState5 = () => {
  let [name,setName]=useState("nitan")
    return (
    <div>
        name is {name}
        <br></br>
        <button style={{cursor:"pointer", borderRadius:"5px",display:"flex",justifyContent:"center"}}
        onClick={()=>{
            setName("hari")
        }}
        >change name</button>


    </div>
  )
}

export default WhyUseState5