import axios from 'axios'
import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import CategoryMenu from './categoryMenu'
import CategoryDetails from './categoryDetails'


// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {

  const moveCategoryList = (await (axios.get(`https://pokeapi.co/api/v2/move-category`))).data

  return moveCategoryList.results
}


const MoveCategory = () => {

  const moveCategoryList = useLoaderData();

  const [currentCategory, setCurrentPalpark] = useState(moveCategoryList[0].name);
  const setPalparkChoose = (palparkName) => {
    setCurrentPalpark(palparkName);
  }
  return (
    <div className=' bg-xWhite bg-scroll   font-serif'>
      <div className='md:container md:mx-auto'>
        <div className='grid grid-cols-1 bg-slate-50 rounded-lg p-4'>
          <div className=' m-2 p-4 rounded-lg bg-white border border-slate-500 text-2xl'>
            Very general categories that loosely group move effects.
          </div>
          <CategoryMenu categoryList={moveCategoryList} setCurrentPalpark={setPalparkChoose} currentCategory={currentCategory} />
          <CategoryDetails categoryName={currentCategory} />
        </div>
      </div>
    </div>
  )
}

export { loader };
export default MoveCategory;