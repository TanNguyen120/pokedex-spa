import React from 'react'
import PokeInfo from '../../component/body/pokeInfo'

const PokemonDetails = () => {
    return (
        <div className=' bg-whiteTriPattern bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <PokeInfo />
                </div>
            </div>
        </div>
    )
}

export default PokemonDetails