import React from 'react'

const PokeFrame = ({ pokeImg }) => {
    return (
        <div className='justify-center bg-magic-circle bg-cover'>
            <img className=" w-5/12 h-5/12" src={pokeImg} alt="poke sprite" />
        </div>
    )
}

export default PokeFrame