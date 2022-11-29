import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import VersionGroupBtn from '../pokedexDetails/versionGroupBtn'

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const versionGroupList = (await (axios.get(`https://pokeapi.co/api/v2/version-group/`))).data

    return versionGroupList
}
const VersionGroupList = () => {
    const versionGroupList = useLoaderData();
    return (
        <div className=' bg-smallGreyWhite bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>
                        <div className='border border-slate-300 rounded-lg float-right m-1 p-1 '>
                            <img src='https://genk.mediacdn.vn/2018/8/2/bvwv1-890x606-15332115606651861180512.jpg' alt='pokemon game' className='' />
                            Black And White Version Group
                        </div>
                        <div>
                            <p className='text-lg font-medium first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                                        first-letter:mr-3 first-letter:float-left'>
                                Version groups categorize highly similar versions of the games.
                            </p>
                            <div className=' grid md:grid-cols-4 grid-cols-2 gap-y-5 mt-8'>
                                {
                                    versionGroupList.results.map((element, index) => <VersionGroupBtn versionName={element.name} key={index} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader }
export default VersionGroupList