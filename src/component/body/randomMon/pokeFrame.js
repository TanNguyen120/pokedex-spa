import React from 'react'
import LoadingSpinner from '../../loadingSpiner'
const PokeFrame = ({ pokeImg }) => {
    return (
        <>
            {
                // render loading spinner if the prob is loading
                pokeImg !== 'loading'
                    ?
                    <div className='bg-magic-circle bg-cover hover:cursor-help'>
                        <img className=" w-full h-full" src={pokeImg} alt="poke sprite" />
                    </div>
                    :
                    <LoadingSpinner />
            }
        </>
    )
}

export default PokeFrame