import React, { useState } from 'react'
import CleanUpFunction from './learnUseEffect/CleanUpFunction'
import ContactForm from './Contact/ContactForm'
import ReadContact from './Contact/ReadContact'
import { NavLink, Route, Routes } from 'react-router-dom'
import ReadSpecificContact from './Contact/ReadSpecificContact'
import UpdateForm from './Contact/UpdateForm'
import HousesForm from './Houses/HousesForm'
import ReadHouses from './Houses/ReadHouses'
import ReadSpecificData from './Houses/ReadSpecificData'
import UpdateHouses from './Houses/UpdateHouses'
import Home from './RouterComponentContact/Home'
import Contact from './RouterComponentContact/Contact'
import About from './RouterComponentContact/About'
import LernToGetParams from './RouterComponentContact/LernToGetParams'
import BlogForm from './Blog/BlogForm'
import ReadBlog from './Blog/ReadBlog'
import ReadSpecificBlog from './Blog/ReadSpecificBlog'
import UseEffect1 from './learnUseEffect/UseEffect1'
import Assignment1 from './Assignment1'
//import Form1 from './LForm/Form1'
import UseState7 from './UseState7'
import UseState2 from './lerarnUsedState/UseState2'
import WhyUseState5 from './lerarnUsedState/WhyUseState5'
import UseState6 from './lerarnUsedState/UseState6'
import UseState1 from './lerarnUsedState/useState1'
import UseState4 from './lerarnUsedState/UseState4'


import InlineCss from './learnComponent/InlineCss'
import TernanryOperator from './learnComponent/TernanryOperator'
import UseRef1 from './LearnUseRef/UseRef1'
import HideShowPass from './learnComponent/HideShowPass'
import Parent from './learnComponent/Parent'

const App = () => /* let [show,setShow]=useState(true)*/ (
  <div>
    {/* <useState1></useState1> */}
    {/* <InlineCss></InlineCss> */}
    {/* <TernanryOperator></TernanryOperator> */}

    {/* <UseState4></UseState4> */}
    {/* <UseState1></UseState1> */}
    {/* <UseState2></UseState2> */}
    {/* <WhyUseState5></WhyUseState5> */}
    {/* <UseState6></UseState6> */}
    {/* <UseState7></UseState7> */}
    {/* <Assignment1></Assignment1> */}
    {/* <Form1></Form1> */}
    {/* <UseEffect1></UseEffect1> */}
    {/* {show?
        <CleanUpFunction></CleanUpFunction>:null}
        <button
        onClick={()=>{
          setShow(false)
        }}
        >hide component</button> */}
    {/* <ReadContact></ReadContact> */}
    {/* <ContactForm></ContactForm> */}
    {/* <UpdateForm></UpdateForm> */}
    {/* <ReadSpecificContact></ReadSpecificContact> */}
    {/* <HousesForm></HousesForm>  */}
    {/* <ReadHouses></ReadHouses> */}
    {/* <ReadSpecificData></ReadSpecificData> */}
    {/* <UpdateHouses></UpdateHouses> */}
    {/* <BlogForm></BlogForm> */}
    {/* <ReadBlog></ReadBlog> */}
    {/* <ReadSpecificBlog></ReadSpecificBlog> */}
    {/*
           <NavLink to="/" style={{marginLeft:"20px"}}>Home</NavLink>
           <NavLink to="/contact" style={{marginLeft:"20px"}}>Contact</NavLink>
           <NavLink to="/about"style={{marginLeft:"20px"}}>About</NavLink> */}

    {/* <Routes>
     
         <Route
         path="/"element={<Home></Home>}
         ></Route>
     
         <Route
         path="/contact"element={<Contact></Contact>}
         ></Route>
     
         <Route
         path="/about"element={<About></About>}
         ></Route>
     <Route path="/:a/b" element={<div>This is a and b</div>}></Route>
     <Route
     path="/a/:id1/b/"
     element={<LernToGetParams></LernToGetParams>}
     ></Route>
      <Route path="*"element={<div style={{display:"flex",justifyContent:"center",marginTop:"50vh",fontSize:"30px"}}>page not found</div>}></Route>
          </Routes>  */}

    {/* <NavLink to="/contacts/create" style={{marginLeft:"10px"}}>Create Contact</NavLink>
        <NavLink to="/contact" style={{marginLeft:"10px"}}>Read all contact</NavLink>
        <NavLink to="/houses/create"style={{marginLeft:"10px"}}>create house</NavLink>
        <NavLink to="/houses"style={{marginLeft:"10px"}}>Read all houses</NavLink> */}
    {/* <Routes>
          <Route
          path="/contacts/create"
          element={<ContactForm></ContactForm>}
        
          ></Route>
          <Route
          path="/contact"
          element={<ReadContact></ReadContact>}
          ></Route>
          <Route
          path="/contact/:contactId"
          element={<ReadSpecificContact></ReadSpecificContact>}
          ></Route>

          <Route
          path="/contacts/update/:contactId"
          element={<UpdateForm></UpdateForm>}
          ></Route>
          <Route
          path="houses/create"
          element={<HousesForm></HousesForm>}
          ></Route>
          <Route
          path="houses"
          element={<ReadHouses></ReadHouses>}
          ></Route>
           <Route
          path="/houses/:houseId"
          element={<ReadSpecificData></ReadSpecificData>}
          ></Route>
          </Routes> */}

{/* <UseRef1></UseRef1> */}
{/* <HideShowPass></HideShowPass> */}
<Parent></Parent>

  </div>

)

export default App