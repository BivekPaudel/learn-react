import axios from "axios";
import { useEffect, useState } from "react";

const UpdateHouses = () => {
    let [address, setAddress] = useState("");
    let [bedrooms, setBedrooms] = useState();
    let [bathrooms, setBathrooms] = useState();
    let [price, setPrice] = useState();
    let [hasgarden, setHasGarden] = useState(true);
     let houseId="64c322d61bd38aa632b8a2d9"
    

    const getHouses=async()=>{
      let result=await axios({
        url:`http://localhost:8000/api/v1/houses/${houseId}`,
        method:`GET`,
       

      })
      let houses=result.data.data
      setAddress(houses.address)
      setBedrooms(houses.bedrooms)
      setBathrooms(houses.bathrooms)
      setPrice(houses.price)
      setHasGarden(houses.hasgarden)
    }
    useEffect(()=>{
      getHouses()
    },[])
    return (
      <div>
        <form
          onSubmit={async(e) => {
            e.preventDefault();
            let data={
              address:address,
              bedrooms:bedrooms,
              bathrooms:bathrooms,
              price:price,
              hasgarden:hasgarden
            }
            //console.log(data)
            let result=await axios({
              url: `http://localhost:8000/api/v1/contacts/${houseId}`,
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
  
  export default UpdateHouses;