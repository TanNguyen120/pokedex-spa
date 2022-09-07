import React from 'react'

const PokeFrame = ({ pokeImg }) => {
    return (
        <div className='bg-magic-circle'>
            {pokeImg.name}
        </div>
    )
}

export default PokeFrame