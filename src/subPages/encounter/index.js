import React from 'react'
import EncounterDetails from './encounterDetails'

const Encounter = () => {
    return (
        <div className=' bg-whitePatternDiamond bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>
                        <div className='border border-slate-300 rounded-lg float-right m-1 p-1 '>
                            <img src='https://i.ytimg.com/vi/HAjtfXk-BFE/hqdefault.jpg' alt='an encounter' className='' />
                            pokemon encounter in tall grass
                        </div>
                        <p className='text-lg font-medium first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                                        first-letter:mr-3 first-letter:float-left'>
                            Wild Pokémon (Japanese: 野生ポケモン wild Pokémon) are any Pokémon that are not currently owned by a Pokémon Trainer. They are encountered in most parts of the Pokémon world, most commonly outside of cities and towns, often in tall grass, in caves, or on water. A Trainer may choose to battle a wild Pokémon or run from it. If a Trainer chooses to battle, they may either attempt to catch the Pokémon with a Poké Ball or to defeat it outright. There are many instances of wild Pokémon being used for assistance without being caught, such as Pokémon Rangers using them to perform a task by directing them with a Capture Styler.
                        </p>
                    </div>
                    <EncounterDetails />
                </div>
            </div>
        </div>
    )
}

export default Encounter