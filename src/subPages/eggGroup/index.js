import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import EggGroupsList from './eggGroupsList';
// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {

    const resData = (await (axios.get(`https://pokeapi.co/api/v2/egg-group/`))).data;
    const count = resData.count
    const eggGroupList = (await (axios.get(`https://pokeapi.co/api/v2/egg-group/?offset=0&limit=${count}`))).data
    return eggGroupList.results;
}
const EggGroup = () => {
    const eggGroupsList = useLoaderData();
    return (
        <div className=' bg-whiteOpera bg-contain min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' grid grid-cols-4 border border-slate-600 bg-slate-100 rounded-lg lg:m-4'>
                        <div className=' col-span-3 text-left text-lg'>
                            <div className=' p-3 first-letter:ml-5'>
                                Egg Groups are based on biological traits of Pokémon species, generally allowing biologically similar species to breed. However, there are some oddities within Egg Groups: for example, the Field Group contains a particularly wide variety of Pokémon species, so that seemingly illogical pairings can be noted within it, such as Skitty and Wailord.
                            </div>
                            <div className=' p-3 first-letter:ml-5'>
                                Egg Groups are generally preserved along evolutionary lines; however, baby Pokémon, Nidorina, Nidoqueen, and Shedinja are not in the same group as their evolutionary relatives: baby Pokémon, Nidorina and Nidoqueen are in the No Eggs Discovered Group and thus unable to breed, while Shedinja is in the Mineral Group (although it requires Ditto to breed due to being a gender-unknown Pokémon).                            </div>
                            <div className=' p-3 first-letter:ml-5'>
                                Egg Groups are not displayed in any core series game; however, they have been canonically mentioned in Pokémon Stadium 2 as a part of Earl Dervish's Pokémon Academy's extensive data banks, in Pokédex 3D, and in various strategy guides.
                            </div>
                        </div>
                        <div className=' items-center'>
                            <img src='https://pm1.aminoapps.com/5759/2543a22a20de177fbb925f799c9c0b026e0277cc_hq.jpg' alt='egg group artwork' />
                            <div className=' text-sm text-slate-500 mt-4'>
                                egg group artwork
                            </div>
                        </div>
                    </div>
                    <div>
                        <EggGroupsList eggGroupList={eggGroupsList} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export { loader };
export default EggGroup