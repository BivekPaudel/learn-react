import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const  ReadSpecificBlog= () => {
  let [data,setData]=useState({})
  let blogId=`64f9dcd0be8b466d34cbf9d2`
  
  
 

  let getBlogs =async()=>{
    let result=await axios({
        url:`http://localhost:8000/api/v1/blogs/${blogId}`,
        method:"GET"
        
    })
    setData(result.data.data)
    
  }
  useEffect(()=>{
     getBlogs ()
  },[])

    return (
    <div>
        <p>title:{data.title}</p>
        <p>description:{data.description}</p>
        
    </div>
  )
}

export default ReadSpecificBlog