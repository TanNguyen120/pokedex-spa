import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {
    const growthRatePokeList = ((await (axios.get(`https://pokeapi.co/api/v2/growth-rate/${params.growthName}`))).data);

    return growthRatePokeList;
}


const GrowthRatePokeList = () => {
    const pokeList = useLoaderData();
    return (
        <div className=' bg-whiteGreen min-h-screen bg-repeat font-serif'>
            <div className='lg:container lg:mx-auto md:mx-1'>
                <div className='grid grid-cols-1 bg-slate-100 rounded-lg m-2 p-4'>
                    <div className=' text-2xl capitalize'>Growth Rate: {pokeList.name}</div>
                    <table class="table border border-collapse w-full font-normal text-base border-slate-500">
                        <thead className=' bg-slate-300'>
                            <tr>
                                <th>Pokemon</th>
                                <th>Sprite</th>
                                <th>Draw</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                pokeList.pokemon_species.map((e, i) => <tr className=' border-collapse border p-4 border-slate-500 odd:bg-slate-200' key={i} ><th className='border-collapse border border-slate-500 p-4 capitalize'>{e.name}</th><th className='border-collapse border-slate-500 border p-4'>{e.experience}</th></tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export { loader }
export default GrowthRatePokeList