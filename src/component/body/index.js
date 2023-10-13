import React from 'react'
import RadomMonSection from './randomMon'
import SearchBar from './searchBar'
import PokeInfo from './pokeInfo'
import MissingNoWarning from '../bonus banner/missingNoWarning'
const Body = () => {

    return (
        <div className=" bg-pokemonBattle bg-fixed bg-cover min-w-full min-h-screen bg-center">
            <div className='lg:container md:mx-auto bg-slate-600 bg-opacity-90  grid grid-cols-1'>
                {/* <MissingNoWarning /> */}
                <RadomMonSection />
                <SearchBar />
                <PokeInfo />
            </div>
        </div>
    )
}

export default Body 