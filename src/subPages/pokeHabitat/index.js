import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';


// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const pokeHabitatListNumber = ((await (axios.get(`https://pokeapi.co/api/v2/pokemon-habitat/`))).data).count;
    const pokeHabitatList = ((await (axios.get(`https://pokeapi.co/api/v2/pokemon-habitat/?offset=0&limit=${pokeHabitatListNumber}`))).data).results;
    return pokeHabitatList;
}
const PokemonHabitat = () => {
    const habitatList = useLoaderData();
    return (
        <div className=' bg-whiteVoid  min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className=' grid md:grid-cols-4 grid-cols-1 border-2 border-slate-600  bg-slate-100 rounded-lg lg:m-4'>
                    <div className=' lg:col-span-3 md:col-span-2'>
                        {
                            JSON.stringify()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader };
export default PokemonHabitat;