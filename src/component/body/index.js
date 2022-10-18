import React from 'react'
import RadomMonSection from './randomMon'
import SearchBar from './searchBar'
import PokeInfo from './pokeInfo'
const Body = () => {
    return (
        <div className="bg-slate-200 min-w-full min-h-screen bg-center">
            <div className='md:container lg:mx-auto bg-red-space bg-repeat grid grid-cols-1'>
                <RadomMonSection />
                <SearchBar />
                <PokeInfo />
            </div>
        </div>
    )
}

export default Body 