import axios from 'axios';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftColumn from './leftColumn';
import NameSection from './leftColumn/nameSection';
import RightColumn from './rightColumn';
import LearnByPokemon from './leftColumn/learnByPokemon';


// loader function later will be call in the router 
const loader = async ({ params }) => {
    const moveDetails = (await (axios.get(`https://pokeapi.co/api/v2/move/${params.moveName}`))).data;

    return moveDetails;
}

const MoveDetails = () => {
    const moveDetails = useLoaderData()
    return (
        <div className=' bg-whitePaper bg-contain min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid md:grid-cols-2 grid-cols-1 lg:p-6 md:p-4 rounded-lg bg-slate-100'>
                    <div className=' md:col-span-2 col-span-1'>
                        <NameSection name={moveDetails.name} names={moveDetails.names} />
                    </div>
                    <div>
                        <LeftColumn moveDetails={moveDetails} />
                    </div>
                    <RightColumn moveDetails={moveDetails} />
                </div>
            </div>
        </div>
    )
}


export { loader };
export default MoveDetails;