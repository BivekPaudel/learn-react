import axios from "axios";
import React, { useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";

const ReadBlog = () => {
 // let navigate=useNavigate()
  let [blogs,setBlogs]=useState([])
//   let titleId=`64f9dcd0be8b466d34cbf9d2`
  let getAllBlogs = async () => {
    let result = await axios({
      url: `http://localhost:8000/api/v1/blogs`,
      method: "GET",
    });
    //console.log(result.data.data.results);
    setBlogs(result.data.data.results)
  };
  useEffect(() => {
    getAllBlogs();
  }, []);

  // let contacts = [
  //   {
  //     fullName: "nitan thapa",
  //     address: "gagalphedi",
  //     phoneNumber: "9849468999",
  //     email: "nitanthapa425@gmail.com",
  //   },
  //   {
  //     fullName: "utshab thapa",
  //     address: "gagalphedi",
  //     phoneNumber: "9849468998",
  //     email: "utshabthapa425@gmail.com",
  //   },
  //   {
  //     fullName: "ram thapa",
  //     address: "gagalphedi",
  //     phoneNumber: "9849468990",
  //     email: "abthapa425@gmail.com",
  //   },
  // ];
  return (
    <div>
      {blogs.map((value, i) => {
        return (
          <div
            key={i}
            style={{
              border: "3px solid green",
              marginBottom: "10px",
              margin: "10px",
            }}
          >
            <p>title of the blog id {value.title}</p>
            <p>Its description is {value.description}</p>
            
            <button
            onClick={async()=>{
              let result=await axios({
                url: `http://localhost:8000/api/v1/blogs`,
                method:"DELETE"
              })
              getAllBlogs()
            }}
            >delete</button>

            {/* <button
            onClick={()=>{
              navigate(`/contact/${value._id}`)
            }}
            >View</button> */}
          </div>
        );
      })}
    </div>
  );
};

export default ReadBlog;
