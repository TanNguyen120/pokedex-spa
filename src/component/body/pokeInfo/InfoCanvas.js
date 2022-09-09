import React from 'react'
import { FaWeightHanging } from 'react-icons/fa'
// SMALL COMPONENTS
const InfoSmallComponent = ({ tile, detail_info, metric, icon }) => {
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1">
            <h3>
                {tile} {icon}
            </h3>
            <WhiteInfoComponent detail_info={detail_info} metric={metric} />
        </div>
    )
}

const WhiteInfoComponent = ({ detail_info, metric }) => {
    return (
        <div className='bg-white rounded-lg text-center text-black m-2'>
            {detail_info} {metric}
        </div>
    )
}

const PokemonFormPic = ({ picUrl, type }) => {
    return (
        <div className='bg-white rounded-lg text-center text-black m-2'>
            <img className=" w-full h-11/12" src={picUrl} alt="poke sprite" />
            <h5>
                {type}
            </h5>
        </div>
    )
}
//-----------------------------------------------------------------------------------
// MAIN CANVAS
const InfoCanvas = ({ pokemon }) => {
    return (
        <div className='bg-slate-400 grid grid-cols-1 md:grid-cols-2 rounded-lg '>
            <div className='bg-white rounded-lg text-center text-black m-2 text-xl font-bold p-3'>
                {pokemon.name}
            </div>
            <InfoSmallComponent tile="Order In National Dex" detail_info={'# ' + pokemon.order} />
            <div className='grid grid-cols-1 md:grid-cols-2 rounded-lg bg-slate-300 m-1'>
                <PokemonFormPic picUrl={pokemon.sprites.back_default} type='back' />
                <PokemonFormPic picUrl={pokemon.sprites.front_default} type='font' />
                <PokemonFormPic picUrl={pokemon.sprites.back_shiny} type='shiny back' />
                <PokemonFormPic picUrl={pokemon.sprites.front_shiny} type='shiny front' />
            </div>
            <div className='grid grid-cols-1'>
                <div className='grid grid-cols-2'>
                    <InfoSmallComponent tile="Weight" detail_info={pokemon.weight * 0.1} metric=" kg" />
                    <InfoSmallComponent tile="Height" detail_info={pokemon.height * 0.1} metric=" m" />
                </div>

            </div>
        </div>
    )
}


export default InfoCanvas
