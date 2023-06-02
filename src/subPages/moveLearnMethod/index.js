import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import MoveLearnDetails from './moveLearnDetails'

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {

    const moveLearnList = (await (axios.get(`https://pokeapi.co/api/v2/move-learn-method`))).data

    return moveLearnList.results
}

const MoveLearnMethod = () => {
    const moveLearnList = useLoaderData();
    return (
        <div className=' bg-whiteNature  bg-scroll   font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1 bg-slate-50 rounded-lg p-4'>
                    <div className=' m-2 p-4 rounded-lg bg-white border border-slate-500 text-2xl'>
                        Methods by which Pokémon can learn moves.
                    </div>
                    {
                        moveLearnList.map((e, i) => <MoveLearnDetails methodName={e.name} key={i} />)
                    }
                </div>
            </div>
        </div>
    )
}

export { loader }
export default MoveLearnMethod