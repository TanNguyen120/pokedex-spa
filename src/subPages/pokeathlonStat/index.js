import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import PokeathlonStatDropDown from './statDropDown';
// loader function later will be call in the router 
const loader = async () => {
    const pokeathlonCount = ((await (axios.get(`https://pokeapi.co/api/v2/pokeathlon-stat/`))).data).count;
    const pokeathlonList = ((await (axios.get(`https://pokeapi.co/api/v2/pokeathlon-stat/?limit=${pokeathlonCount}&offset=0`))).data).results
    return pokeathlonList;
}
const PokeathlonStat = () => {
    const pokeathlonStat = useLoaderData()
    return (
        <div className=' bg-whiteBowl  min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className=' grid grid-cols-1'></div>
                <div className=' grid grid-cols-1 border-2 border-slate-600  bg-slate-100 rounded-lg lg:m-4'>
                    {
                        pokeathlonStat.map((e, i) => <PokeathlonStatDropDown name={e.name} url={e.url} key={i} />)
                    }
                </div>

            </div>
        </div>
    )
}

export { loader }
export default PokeathlonStat