import axios from 'axios';
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
// loader function later will be call in the router 
const loader = async () => {
    const natureCount = ((await (axios.get(`https://pokeapi.co/api/v2/nature/`))).data).count;
    const natureList = ((await (axios.get(`https://pokeapi.co/api/v2/nature/?limit=${natureCount}&offset=0`))).data).results
    return natureList;
}

const Nature = () => {
    const natureList = useLoaderData();
    return (
        <div className=' bg-whiteBowl bg-contain min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' grid grid-cols-4 border-2 border-slate-600  bg-slate-100 rounded-lg lg:m-4'>
                        <div className=' col-span-3 text-left text-lg'>
                            <div className=' text-center text-2xl p-4 text-slate-700'>
                                Nature
                            </div>
                            <div className=' p-3 first-letter:ml-5'>
                                Rather than just being a superficial personality, Natures actually affect the growth of a Pokémon. Each nature increases one of its stats by 10% and decreases one by 10% (by the time it reaches level 100). Five natures increase and decrease the same stat and therefore have no effect.
                            </div>
                            <div className=' p-3 first-letter:ml-5'>
                                In most cases it is preferable to have a nature that decreases either Attack or Special Attack for Pokémon whose strengths are the opposite type of attack. Espeon, for example, favours Special moves, so it's best to use a nature that decreases its Attack since it won't be used. (https://pokemondb.net/mechanics/natures)
                            </div>
                        </div>
                        <div className=' items-center p-4'>
                            <img src='https://images.squarespace-cdn.com/content/v1/618bef19b806d92a9d764ca1/21439ed7-8a85-4c63-a4f9-321effcb38f8/naturechart.png' alt='stat table' className='' />
                            <div className=' text-sm text-slate-500 mt-4'>
                                Nature affect stat
                            </div>
                        </div>
                    </div>
                    <div className=' rounded-lg p-3 bg-slate-200 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6'>
                        {
                            natureList.map((e, i) => <Link to={`/t-pokedex/nature/${e.name}`} className=' capitalize hover:cursor-pointer rounded-lg px-8 py-3 hover:scale-110 hover:ring ring-slate-500 bg-slate-100' key={i}>{e.name}</Link>)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader };
export default Nature