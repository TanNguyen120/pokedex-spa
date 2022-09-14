import React from 'react';
import { FaWeightHanging } from 'react-icons/fa';
import { GiBodyHeight, GiHealthIncrease } from 'react-icons/gi';
import { AiOutlineExperiment } from 'react-icons/ai'


import TypeCanvas from './typeCanvas';
import InfoSmallComponent from './inforSmallComponent';
import HeldItems from './heldItems';
import PokemonFormPic from './pokemonFormPic';
import AbilityCanvas from './abilityCanvas';
// import MoveSetCanvas from './moveSetCanvas';
import PokeGenera from './pokeGenera';
import LoadingSpinner from '../../../loadingSpiner';
import HabitatCanvas from './habitatCanvas';


//-----------------------------------------------------------------------------------
//icon for child component
const weightIcon = <FaWeightHanging className="inline" />;
const heightIcon = <GiBodyHeight className="inline" />;
const expIcon = <AiOutlineExperiment className='inline' />;
//-----------------------------------------------------------------------------------
// MAIN CANVAS
const InfoCanvas = ({ pokemon }) => {
    return (
        <div className='bg-slate-400 grid grid-cols-1 md:grid-cols-2 rounded-lg p-4 ml-5 mr-2'>
            <div className='bg-white rounded-lg text-center text-black m-2 text-xl font-bold p-3'>
                {pokemon.baseData.name} {pokemon.species ? <PokeGenera pokeGenera={pokemon.species.genera} /> : <LoadingSpinner />}
            </div>
            <InfoSmallComponent tile="Order In National Dex" detail_info={'# ' + pokemon.baseData.id} />
            <div className='grid grid-cols-1 md:grid-cols-2 rounded-lg bg-slate-300 m-1'>
                <PokemonFormPic picUrl={pokemon.baseData.sprites.back_default} type='back' />
                <PokemonFormPic picUrl={pokemon.baseData.sprites.front_default} type='font' />
                <PokemonFormPic picUrl={pokemon.baseData.sprites.back_shiny} type='shiny back' />
                <PokemonFormPic picUrl={pokemon.baseData.sprites.front_shiny} type='shiny front' />
            </div>
            <div className='grid grid-cols-1'>
                <div className='grid grid-cols-2'>
                    <InfoSmallComponent tile="Weight" detail_info={(pokemon.baseData.weight * 0.1).toFixed(2)} metric=" kg" icon={weightIcon} />
                    <InfoSmallComponent tile="Height" detail_info={(pokemon.baseData.height * 0.1).toFixed(2)} metric=" m" icon={heightIcon} />
                </div>
                <TypeCanvas types={pokemon.baseData.types} />
                <AbilityCanvas abilities={pokemon.baseData.abilities} />
                <div className='grid grid-cols-1 md:grid-cols-2'>

                    <InfoSmallComponent tile="Base Experience" detail_info={pokemon.baseData.base_experience} icon={expIcon} />
                    <HeldItems heldItems={pokemon.baseData.held_items} />
                </div>
                {
                    pokemon.species ?
                        <div className='grid md:grid-cols-2 grid-cols-1'>
                            <InfoSmallComponent tile="Growth Rate" detail_info={pokemon.species.growth_rate.name} icon={<GiHealthIncrease className='inline' />} />
                            <HabitatCanvas habitat={pokemon.species.habitat} />
                        </div>



                        : <LoadingSpinner />
                }
            </div>

        </div>
    )
}


export default InfoCanvas
