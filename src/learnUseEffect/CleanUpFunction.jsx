import React, { useEffect } from 'react'

const CleanUpFunction = () => {
console.log("Hello")
    useEffect(()=>{
        console.log("I am useEffect")
       let myInterval=setInterval(()=>{
        console.log("i am set interval")
       },2000)
       return ()=>{
        clearInterval(myInterval)
       }
    },[])
  return (
    <div>

learn component
    </div>
  )
}

export default CleanUpFunction