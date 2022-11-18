import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { MdOutlinePlace } from 'react-icons/md'
import InfoSmallComponent from '../../component/body/pokeInfo/infoCanvas/inforSmallComponent';
import GameGenName from './gameGenName';
import GameversioGroup from './gameversionGroup';
import GenTypes from './genType';

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {
    const gameGenDetails = (await (axios.get(`https://pokeapi.co/api/v2/generation/${params.gameGen}`))).data

    return gameGenDetails
}
const GameGenDetails = () => {
    const gameGenDetails = useLoaderData();
    return (
        <div className=' bg-whiteTriPattern bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>
                        <GameGenName gameGenName={gameGenDetails.names} />
                        <GenTypes genTypes={gameGenDetails.types} />
                        <div className=' grid grid-cols-2'>
                            <GameversioGroup gameVersion={gameGenDetails.version_groups} />
                            <div className='  rounded-lg border-2 border-slate-500 bg-slate-200 p-3 m-2'>
                                <InfoSmallComponent tile='Main Region' detail_info={gameGenDetails.main_region.name} icon={<MdOutlinePlace className=' inline' />} />
                            </div>
                        </div>
                        {JSON.stringify(gameGenDetails)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader }
export default GameGenDetails