import axios from 'axios';
import React from 'react'
import { json, useLoaderData } from 'react-router-dom';
import GenderColumn from './genderColumn';

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const genDerList = (await (axios.get('https://pokeapi.co/api/v2/gender/'))).data;
    return genDerList.results;
}


const Gender = () => {
    const genderList = useLoaderData();
    return (
        <div className=' bg-whiteHair bg-contain min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' grid grid-cols-4 border border-slate-600 bg-slate-100 rounded-lg lg:m-4'>
                        <div className=' col-span-3 text-left text-lg'>
                            <div className=' p-3 first-letter:ml-5'>
                                Most Pokémon are either male or female. However, depending on the species, players are more likely to encounter a Pokémon of a specific gender than the other. Gender plays a vital role in breeding, as offspring inherit the species of the mother and compatible moves from the father. However, Pokémon of either gender can be used if the partner is a Ditto.
                            </div>
                            <div className=' p-3 first-letter:ml-5'>
                                From Generation III onward, due to how the core series Pokémon games incorrectly determine a Pokémon's gender from its personality value, the ratios stated below are idealized approximations. From Generation III to V, Pokémon are more likely to be male than the nominal ratio; from Generation VI to VII, Pokémon are more likely to be the more common gender than the nominal ratio, with Pokémon with a 1:1 ratio being unaffected; in Generation VIII, Pokémon are more likely to be the more common gender than the nominal ratio, with Pokémon with a 1:1 ratio being more likely to be male. Pokémon which are always one particular gender are unaffected.
                            </div>

                        </div>
                        <div className=' items-center'>
                            <img src='https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/10/Mandibuzz-Gallade-Froslass-Sawk.jpg' alt='egg group artwork' />
                            <div className=' text-sm text-slate-500 mt-4'>
                                specific gender appearance
                            </div>
                        </div>
                    </div>
                    <div className=' bg-slate-100 rounded-lg p-2 m-4 grid grid-cols-2'>
                        {genderList.map((e, i) => <GenderColumn key={i} genderLink={e.url} name={e.name} />)}
                    </div>

                </div>
            </div>
        </div>
    )
}


export { loader }
export default Gender