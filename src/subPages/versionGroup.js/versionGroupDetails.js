import axios from 'axios'
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import GameBoxArt from './gameBoxArt'
import MoveLearnMethod from './moveLearnMethod'

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {
    const versionGroupDetails = (await (axios.get(`https://pokeapi.co/api/v2/version-group/${params.versionName}`))).data
    return versionGroupDetails
}



const VersionGroupDetails = () => {
    const versionGroupDetails = useLoaderData();
    return (
        <div className=' bg-smallGreyWhite bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border   m-10 grid grid-cols-1'>
                        <div className=' font-semibold tex'>
                            {versionGroupDetails.name}  Version Group <span> <Link className=' hover:scale-95 hover:cursor-pointer hover:text-red-500' to={`/t-pokedex/generations/${versionGroupDetails.generation.name}`}> ( {versionGroupDetails.generation.name} ) </Link></span>
                        </div>
                        <div className=' m-3 grid grid-cols-1'>
                            <div className=' text-left ml-5 text-base font-semibold'>
                                Games:
                            </div>
                            <div className=' flex flex-row align-middle m-3 rounded-lg bg-slate-100 p-4   '>
                                {
                                    versionGroupDetails.versions.map(element => <GameBoxArt versionName={element.name} />)
                                }
                            </div>
                            <MoveLearnMethod genName={versionGroupDetails.name} moveLearn={versionGroupDetails.move_learn_methods} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader }
export default VersionGroupDetails