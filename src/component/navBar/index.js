import React from 'react'

const NavBar = () => {
    return (
        <div className="bg-red-600 text-left text-white">
            <div>
                <img class="h-10 w-10 object-cover md:h-18 md:w-18 mx-6 py-1.5" src="/logo.png" alt="Main Logo" />
            </div>
            <div>
                PokeDex
            </div>

        </div>
    )
}

export default NavBar