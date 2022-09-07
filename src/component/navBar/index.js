import React from 'react'

const NavBar = () => {
    return (
        <div className="bg-red-600 text-left text-white grid grid-flow-col">
            <div className="mt-1.25 hover:cursor-pointer">
                <img className="h-12 w-12 object-cover md:h-20 lg:w-max mx-6 py-1.5" src="/pokedexLogo.png" alt="pokedex Logo" />
            </div>
            <div className="col-start-12 pt-12 font-mono text-sm ">
                A Web By Tan Nguyen
            </div>
        </div>
    )
}

export default NavBar