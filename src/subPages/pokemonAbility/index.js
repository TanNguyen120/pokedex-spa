import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import AbilityPage from './abilityPage'

//===============================================================================================================================================================================

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {

    const abilityNumber = (await (axios.get(`https://pokeapi.co/api/v2/ability/`))).data

    return abilityNumber.count
}



const AbilityList = () => {
    const pageCount = useLoaderData();
    return (
        <div className=' bg-whiteShineyWave min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' grid grid-cols-4 border border-slate-600 bg-slat bg-slate-200 rounded-lg lg:m-4'>
                        <div className=' col-span-3 text-left text-lg'>
                            <div className=' p-3 first-letter:ml-5'>
                                An Ability (特性とくせい, Tokusei), called Special Ability in Pokémon the Series, is a game mechanic that was introduced in Generation III. They are various powers or characteristics that each Pokémon possesses and uses passively in a Pokémon battle.
                            </div>
                            <div className=' p-3 first-letter:ml-5'>
                                Each and every Pokémon has an Ability, and can only have one at a time (with the exception of Calyrex with its As One Ability). Some Abilities are exclusive to certain Pokémon and evolution lines, while others are known by many Pokémon. A Pokémon's Ability can be changed using an Ability Capsule or an Ability Patch, if applicable.
                            </div>
                        </div>
                        <div className=' items-center'>
                            <img src='https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-switch/e/e3/Ditto2.jpg' alt='ditto ability' />
                            <div className=' text-sm text-slate-500 mt-4'>
                                Ability explain in game
                            </div>
                        </div>
                    </div>
                    <div className=' bg-slate-200 rounded-lg p-4'>
                        <AbilityPage pageCount={pageCount} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export { loader };
export default AbilityList;