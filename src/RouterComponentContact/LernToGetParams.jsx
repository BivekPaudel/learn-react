import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom';

const LernToGetParams = () => {

    // get dynamic route parameter
    let params=useParams();
    console.log(params)

    // get query parameter
    let [query]=useSearchParams()
    console.log(query.get("name"))
    console.log(query.get("age"))
  return (
    <div>LernToGetParams</div>
  )
}

export default LernToGetParams