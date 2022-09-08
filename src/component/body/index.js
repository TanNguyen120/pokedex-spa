import React from 'react'
import RadomMonSection from './randomMon'
import SearchBar from './searchBar'
const Body = () => {
    return (
        <div className="bg-main-bg min-w-full min-h-screen bg-cover bg-center">
            <div className='container md:mx-auto bg-red-space bg-cover '>
                <RadomMonSection />
                <SearchBar />
            </div>
        </div>

    )
}

export default Body 