import React from 'react'
import RadomMonSection from './randomMon'
import SearchBar from './searchBar'
import PokeInfo from './pokeInfo'
const Body = () => {
    return (
        <div className="bg-main-bg min-w-full min-h-screen bg-cover bg-center">
            <div className='md:container lg:mx-auto bg-red-space bg-cover'>
                <RadomMonSection />
                <SearchBar />
                <PokeInfo />
            </div>
        </div>

    )
}

export default Body 