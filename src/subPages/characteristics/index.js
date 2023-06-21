import React from 'react'
import { Link } from 'react-router-dom'
import CharacterList from './characterList'




const Characteristics = () => {
    return (
        <div className=' bg-whiteBubble bg-contain min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' grid grid-cols-4 border border-slate-600 bg-slate-100 rounded-lg lg:m-4'>
                        <div className=' col-span-3 text-left text-lg'>
                            <div className=' p-3 first-letter:ml-5'>
                                Characteristics (Japanese: 個性 individuality) are a feature in the Pokémon games, introduced in Generation IV. A Pokémon's Characteristic indicates which stat contains a Pokémon's highest IV. It is displayed on the Pokémon's summary screen where its Nature, date met, place met, and flavor preferenceDPPt are shown.
                            </div>
                            <div className=' p-3 first-letter:ml-5'>
                                Characteristics indicate which stat contains a Pokémon's highest IV. A Pokémon's Characteristic is determined by the remainder of its highest IV divided by 5 (gene_modulo). Check out <Link className=' underline text-blue-500 '>Bulbapedia</Link> for greater detail.
                            </div>
                        </div>
                        <div className=' items-center'>
                            <img src='https://www.gamerguides.com/assets/media/17/157/LG2020_natures.png' alt='characteristic table' />
                            <div className=' text-sm text-slate-500 mt-4'>
                                characteristic and it effect on stat
                            </div>
                        </div>
                    </div>
                    <div>
                        <CharacterList />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Characteristics