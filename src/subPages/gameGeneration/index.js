import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import GameGenBtn from './gameGenBtn';

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const genList = (await (axios.get('https://pokeapi.co/api/v2/generation/'))).data;
    return genList;
}

const GameGenerations = () => {
    const gameGenList = useLoaderData();
    return (
        <div className=' bg-whiteTriPattern bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>
                        <div className='border border-slate-300 rounded-lg float-right m-8 p-1  '>
                            <img src='https://truyengihotne.net/uploads/anime/cover_1641355936.jpg' alt='an encounter' className='w-96 h-64' />
                            pokemons pic
                        </div>
                        <p className='text-lg font-medium first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                                        first-letter:mr-3 first-letter:float-left'>
                            A generation (Japanese: 世代 generation) is a grouping of the Pokémon games that separates them based on the Pokémon they include. In each generation, a new region and set of Pokémon that did not exist in the previous generation are introduced.

                            While generations are not usually discussed officially, they are occasionally. Junichi Masuda has referred to the fourth generation on his Twitter profile and sixth generation on his blog. Pokémon Black and White were referred to as a "new generation of Pokémon", and Pokémon Sun and Moon were referred to as the "newest generation" in press releases.

                            Generational lines are typically ignored in other parts of the franchise, which continue from where the last generation left off and keep the story going. (This phenomenon is especially true of the anime.) Newer generations may also ignore older parts of the canon that explicitly declare to be true something that is later changed.

                            To date, there are eight generations, each introducing their own quirks into the franchise. The Generation I and II games are compatible with one another via the Time Capsule; the six most recent generations are also compatible with each other (forward only) via dual-slot mode, Pal Park, Poké Transfer, Poké Transporter, Pokémon Bank and Pokémon HOME, but the Generation I and II games were incompatible with later generations until their Virtual Console releases, which are compatible with Generation VII onwards.
                        </p>
                    </div>

                    <div className=' bg-slate-200 rounded-lg m-8 grid grid-cols-6'>
                        {
                            gameGenList.results.map(element => <GameGenBtn genName={element.name} key={element.name} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader };
export default GameGenerations;