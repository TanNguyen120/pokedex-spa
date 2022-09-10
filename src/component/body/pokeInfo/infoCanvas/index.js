import React from 'react';
import { FaWeightHanging } from 'react-icons/fa';
import { GiBodyHeight } from 'react-icons/gi';
import { AiOutlineExperiment } from 'react-icons/ai'
import TypeCanvas from './typeCanvas';
import InfoSmallComponent from './inforSmallComponent';
import HeldItems from './heldItems';
import PokemonFormPic from './pokemonFormPic';
import AbilityCanvas from './abilityCanvas';



//-----------------------------------------------------------------------------------
//icon for child component
const weightIcon = <FaWeightHanging className="inline" />;
const heightIcon = <GiBodyHeight className="inline" />;
const expIcon = <AiOutlineExperiment className='inline' />;
//-----------------------------------------------------------------------------------
// MAIN CANVAS
const InfoCanvas = ({ pokemon }) => {
    return (
        <div className='bg-slate-400 grid grid-cols-1 md:grid-cols-2 rounded-lg p-4 mx-6'>
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
                    <InfoSmallComponent tile="Weight" detail_info={(pokemon.weight * 0.1).toFixed(2)} metric=" kg" icon={weightIcon} />
                    <InfoSmallComponent tile="Height" detail_info={(pokemon.height * 0.1).toFixed(2)} metric=" m" icon={heightIcon} />
                </div>
                <TypeCanvas types={pokemon.types} />
                <div className='grid grid-cols-1 md:grid-cols-2'>

                    <InfoSmallComponent tile="Base Experience" detail_info={pokemon.base_experience} icon={expIcon} />
                    <HeldItems heldItems={pokemon.held_items} />
                </div>
                <AbilityCanvas abilities={pokemon.abilities} />

            </div>
        </div>
    )
}


export default InfoCanvas
