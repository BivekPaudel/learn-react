import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReadHouses = () => {
  let navigate = useNavigate();
  let [houses, setHouses] = useState([]);
  let getAllHouses = async () => {
    let result = await axios({
      url: `http://localhost:8000/api/v1/houses`,
      method: "GET",
    });
    //console.log(result.data.data.results);
    setHouses(result.data.data.results);
  };
  useEffect(() => {
    getAllHouses();
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
      {houses.map((value, i) => {
        return (
          <div
            key={i}
            style={{
              border: "3px solid green",
              marginBottom: "10px",
              margin: "10px",
            }}
          >
            <p>my address is {value.address}</p>
            <p>It has {value.bedrooms}bedrooms</p>
            <p>It has {value.bathrooms}bathrooms</p>
            <p>Its price is {value.price}</p>
            <p>it has {value.hasGarden}</p>
            <button
              onClick={async () => {
                let result = await axios({
                  url: `http://localhost:8000/api/v1/houses/`,
                  method: "DELETE",
                });
                getAllHouses();
              }}
            >
              delete
            </button>
            <button
              onClick={() => {
                navigate(`/houses/${value._id}`);
              }}
            >
              View
            </button>
            <button
            onClick={()=>{
              navigate(`/contacts/${value}`)
            }}
            >Update</button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadHouses;
