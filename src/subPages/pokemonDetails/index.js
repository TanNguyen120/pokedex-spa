import React, { useEffect, useState } from 'react'
import PokeInfo from '../../component/body/pokeInfo'
import dynamicBG from '../../tool/bgChanger';

const PokemonDetails = () => {
    const [bgURL, setBgURL] = useState("bg-pokemonBattle");
    useEffect(() => {
        setBgURL(dynamicBG());
    })
    return (
        <div className={bgURL + ' bg-fixed bg-cover min-w-full min-h-screen bg-center font-serif'}>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <PokeInfo />
                </div>
            </div>
        </div>
    )
}

export default PokemonDetails