import axios from "axios";
import { useEffect, useState } from "react";

const UpdateBlog = () => {
    let [title, setTitle] = useState("");
    let[description,setDescription]=useState();
    
    let blogId=`64f9dcd0be8b466d34cbf9d2`

    const getBlogs=async()=>{
      let result=await axios({
        url:`http://localhost:8000/api/v1/blogs/${blogId}`,
        method:`PATCH`,
       

      })
      let blogs=result.data.data
      setTitle(blogs.title)
      setDescription(blogs.description)

    useEffect(()=>{
      getBlogs()
    },[])
    return (
      <div>
        <form
          onSubmit={async(e) => {
            e.preventDefault();
            let data={
            title:title
              description:description,
              
            }
            //console.log(data)
            let result=await axios({
              url: ``,
              method:"PATCH",
              data:data

            })
          }}
        >
          
            <div>
            <label htmlFor="address">Addresss</label>
            <input
            type="text"
            id="address"
            value={address}
            onChange={(e)=>{
                setAddress(e.target.value)
            }}
            ></input>
            </div>
          
            <div>
            <label htmlFor="bedrooms">Bedrooms:</label>
            <input
            type="number"
            id="bedrooms"
            value={bedrooms}
            onChange={(e)=>{
                setBedrooms(e.target.value)
            }}
            ></input>
            </div>
          
            <div>
            <label htmlFor="bathrooms">Bathrooms</label>
            <input
            type="number"
            id="bathrooms"
            value={bathrooms}
            onChange={(e)=>{
                setBathrooms(e.target.value)
            }}
            ></input>
            </div>
            <div>
            <label htmlFor="price">Price</label>
            <input
            type="number"
            id="price"
            value={price}
            onChange={(e)=>{
                setPrice(e.target.value)
            }}
            ></input>
            </div>
            <div>
            <label htmlFor="hasgarden">hasGarden</label>
            <input
            type="checkbox"
            id="hasgarden"
            value={hasgarden}
            onChange={(e)=>{
                setHasGarden(e.target.checked)
            }}
            ></input>
            </div>
  
          
          <button type="submit">update</button>
        </form>
      </div>
    );
  };
  
  export default UpdateBlog;