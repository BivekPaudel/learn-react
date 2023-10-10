import React, { useEffect, useRef } from 'react'

const UseRef1 = () => {
    let inputRef1=useRef()
    let inputRef2=useRef()
    let nameRef=useRef()
    let addressRef=useRef()
    useEffect(()=>{
        inputRef1.current.style.backgroundColor="green"
    })

  return (
    <div>
        <form>
            <div ref={addressRef}>my address is bhaktapur</div>
            <div ref={nameRef}>My name is Bivek poudel</div>
            
            <input ref={inputRef1}></input><br></br>
            <input ref={inputRef2}></input>
            <br></br>
            <button
            type="button"
            onClick={()=>{
                inputRef1.current.focus()
            }}
            >Click me1</button><br></br>
            <button
            type="button"
            
            onClick={()=>{
                inputRef2.current.focus()
                inputRef2.current.style.backgroundColor="red"
            }}
            >Click me2</button>

            <button
            type="button"
            onClick={()=>{
                nameRef.current.style.color="blue"
            }}
            >Change color of div</button>
            <br></br>
            <button
            type="button"
            onClick={()=>{
                addressRef.current.style.backgroundColor="yellow"
            }}
            >address</button>
        </form>
    </div>
  )
}

export default UseRef1