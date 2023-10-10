import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSpecificData = () => {
  let [data, setData] = useState({});
  let params = useParams();

  let getHouses = async () => {
    let result = await axios({
      url: `http://localhost:8000/api/v1/houses/${params.houseId}`,
      method: "GET",
    });
    setData(result.data.data);
  };
  useEffect(() => {
    getHouses();
  }, []);

  return (
    <div>
      <p>Address:{data.address}</p>
      <p>bedrooms:{data.bathrooms}</p>
      <p>bathrooms:{data.bathrooms}</p>
      <p>price:{data.price}</p>
      <p>hasgarden:{data.hasGarden}</p>
    </div>
  );
};

export default ReadSpecificData;
