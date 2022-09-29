import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import VarietiesButton from './varietiesButton'

const Variations = ({ varieties }) => {
    const pokeInfo = useSelector((state) => state.singlePokemon);
    return (
        <div className="md:col-span-2 px-4 grid md:grid-cols-10 grid-cols-4 mx-4">
            {
                varieties.map(element => <VarietiesButton pokemon={element.pokemon} activeVarieties={pokeInfo.baseData.name} key={element.pokemon.name} />)
            }
        </div>
    )
}

export default Variations