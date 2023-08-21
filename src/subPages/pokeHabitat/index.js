import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import HabitatDetails from './habitatDetails';


// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const pokeHabitatListNumber = ((await (axios.get(`https://pokeapi.co/api/v2/pokemon-habitat/`))).data).count;
    const pokeHabitatList = ((await (axios.get(`https://pokeapi.co/api/v2/pokemon-habitat/?offset=0&limit=${pokeHabitatListNumber}`))).data).results;
    return pokeHabitatList;
}


const HabitatBtn = ({ currentHabitat, setCurrentHabitat, habitatName }) => {
    const [bgCss, setBgCss] = useState('');
    useEffect(() => {
        currentHabitat === habitatName ? setBgCss(' bg-slate-300') : setBgCss('')
    }, [currentHabitat, habitatName])
    return (
        <div className={` px-6 py-2 hover:cursor-pointer rounded-lg text-lg m-3 ${bgCss} capitalize`} onClick={e => setCurrentHabitat(habitatName)}>
            {habitatName}
        </div>)
}

const PokemonHabitat = () => {
    const habitatList = useLoaderData();
    const [currentHabitat, setCurrentHabitat] = useState(habitatList[0].name);

    return (
        <div className=' bg-whiteVoid  min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className=' grid md:grid-cols-4 grid-cols-1 border-2 border-slate-600  bg-slate-100 rounded-lg lg:m-4'>
                    <div className=' lg:col-span-3 md:col-span-2 col-span-1 grid grid-cols-1'>
                        <div className=' text-lg font-semibold'>
                            Habitats
                        </div>
                        Habitats are generally different terrain Pokémon can be found in but can also be areas designated for rare or legendary Pokémon.
                    </div>
                    <div className=' lg:col-span-1 md:col-span-2 col-span-1'>
                        <div className=' items-center p-4'>
                            <img src='https://cdna.artstation.com/p/assets/images/images/005/519/152/large/dezra-tayler-3-balls.jpg?1491629359' alt='habitat artwork' className='' />
                            <div className=' text-sm text-slate-500 mt-4'>
                                Habitat ArtWork
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' bg-slate-50 border border-slate-500 p-4 rounded-lg grid grid-cols-1'>
                    <div className=' flex flex-row'>
                        {habitatList.map((e, i) => <HabitatBtn habitatName={e.name} currentHabitat={currentHabitat} setCurrentHabitat={setCurrentHabitat} key={i} />)}
                    </div>
                    <HabitatDetails habitatName={currentHabitat} />
                </div>
            </div>
        </div>
    )
}

export { loader };
export default PokemonHabitat;