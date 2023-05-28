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
    <div className=' bg-xWhite bg-scroll   font-serif'>
      <div className='md:container md:mx-auto'>
        <div className='grid grid-cols-1'>
          {JSON.stringify(moveCategoryList)}
        </div>
      </div>
    </div>
  )
}

export { loader };
export default MoveCategory;