import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'


// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {

  const moveCategoryList = (await (axios.get(`https://pokeapi.co/api/v2/move-category`))).data

  return moveCategoryList
}


const MoveCategory = () => {
  const moveCategoryList = useLoaderData();
  return (
    <div>{JSON.stringify(moveCategoryList)}</div>
  )
}

export { loader };
export default MoveCategory;