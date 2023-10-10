import axios from 'axios';
import React, { useState } from 'react'

const HousesForm = () => {
    let [address, setAddress] = useState("");
    let [bedrooms, setBedrooms] = useState();
    let [bathrooms, setBathrooms] = useState();
    let [price, setPrice] = useState();
    let [hasGarden, setHasGarden] = useState(true);
    
    
    
  return (
    <div style={{border:"3px solid blue",color:"green"}}>
    <form
      onSubmit={async(e) => {
        e.preventDefault();
        let data={
            address:address,
            bedrooms:bedrooms,
            bathrooms:bathrooms,
            price:price,
            hasGarden:hasGarden
        }
        //console.log(data)
        let result=await axios({
          url:`http://localhost:8000/api/v1/houses`,
          method:"POST",
          data:data

        })
      }}
    >
       
        <div style={{marginTop:"10px"}}>
        <label htmlFor="address">Address:</label>
        <input
        type="text"
        id="fullName"
        value={address}
        onChange={(e)=>{
            setAddress(e.target.value)
        }}
        ></input>
        </div>
        <div style={{marginTop:"10px"}}>
        <label htmlFor="bedrooms">Bedroom:</label>
        <input
        type="number"
        id="bedrooms"
        value={bedrooms}
        onChange={(e)=>{
            setBedrooms(e.target.value)
        }}
        ></input>
        </div>
        <div style={{marginTop:"10px"}}>
        <label htmlFor="bathrooms">Bathrooms:</label>
        <input
        type="number"
        id="bathrooms"
        value={bathrooms}
        onChange={(e)=>{
            setBathrooms(e.target.value)
        }}
        ></input>
        </div>
        <div style={{marginTop:"10px"}}>
        <label htmlFor="price">Price:</label>
        <input
        type="price"
        id="price"
        value={price}
        onChange={(e)=>{
            setPrice(e.target.value)
        }}
        ></input>
        </div>
        <div style={{marginTop:"10px"}}>
        <label htmlFor="hasGarden">hasGarden:</label>
        <input
        type="checkbox"
        id="hasGarden"
        value={hasGarden}
        onChange={(e)=>{
            setHasGarden(e.target.checked)
        }}
        ></input>
        </div>

      <div
      style={{marginBottom:"10px",marginTop:"10px"}}
      >
      <button 
      type="submit"
      style={{borderRadius:"5px"}}
      >Submit</button>
      </div>
    </form>
  </div>
);
};

export default HousesForm