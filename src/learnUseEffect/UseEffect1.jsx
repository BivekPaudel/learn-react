import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    let [count,setCount]=useState(0)
    let [count1,setCount1]=useState(100)
    useEffect(()=>{
        console.log("I am useEffect")
    },[count,count1])
  return (
    <div>
        count is {count}
        <br></br>
        count1 is {count1}
        <br></br>
   <button
   onClick={()=>{
    setCount(count+1)
   }}
   >Change Count</button>
   <br></br>
   <button
   onClick={()=>{
    setCount1(count1+1)
   }}
   >change count1</button>

    </div>
  )
}

export default UseEffect1