import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const pokeShapeNumber = ((await (axios.get(`https://pokeapi.co/api/v2/pokemon-shape/`))).data).count;
    const pokeShape = ((await (axios.get(`https://pokeapi.co/api/v2/pokemon-shape/?offset=0&limit=${pokeShapeNumber}`))).data).results;
    return pokeShape;
}
const PokeShape = () => {
    const pokeShapeList = useLoaderData();
    return (
        <div className=' bg-whiteCell min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className=' grid md:grid-cols-4 grid-cols-1 border-2 border-slate-600  bg-slate-100 rounded-lg lg:m-4'>
                    {JSON.stringify(pokeShapeList)}
                </div>
            </div>
        </div>
    )
}


export { loader }
export default PokeShape