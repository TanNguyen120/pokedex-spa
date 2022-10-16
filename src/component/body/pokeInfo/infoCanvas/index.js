import React from 'react';
import { FaWeightHanging } from 'react-icons/fa';
import { GiBodyHeight, GiHealthIncrease } from 'react-icons/gi';
import { AiOutlineExperiment } from 'react-icons/ai'
import { useSelector } from 'react-redux';


import TypeCanvas from './typeCanvas';
import InfoSmallComponent from './inforSmallComponent';
import HeldItems from './heldItems';
import PokemonFormPic from './pokemonFormPic';
import AbilityCanvas from './abilityCanvas';
// import MoveSetCanvas from './moveSetCanvas';
import PokeGenera from './pokeGenera';
import LoadingSpinner from '../../../loadingSpiner';
import HabitatCanvas from './habitatCanvas';
import StatCanvas from './statCanvas';
import toTitleCase from '../../../../tool/upperCaseString';
import PokeDrawPic from './pokeDrawPic';


//-----------------------------------------------------------------------------------
//icon for child component
const weightIcon = <FaWeightHanging className="inline" />;
const heightIcon = <GiBodyHeight className="inline" />;
const expIcon = <AiOutlineExperiment className='inline' />;
//-----------------------------------------------------------------------------------
// MAIN CANVAS
const InfoCanvas = ({ pokemon }) => {
    const pictureMode = useSelector((state) => state.webSettings.pictureMode);
    return (
        <div className='bg-slate-400 grid grid-cols-1 md:grid-cols-2 rounded-lg p-4 md:ml-5 md:mr-2'>
            <div className='bg-white rounded-lg text-center text-black m-2 md:text-lg text-xl font-bold p-3'>
                {toTitleCase(pokemon.baseData.name)} {pokemon.species ? <PokeGenera pokeGenera={pokemon.species.genera} /> : <LoadingSpinner />}
            </div>
            <InfoSmallComponent tile="Order In National Dex" detail_info={'# ' + pokemon.baseData.id} />
            {
                pictureMode === "sprite" ?
                    (<div className='grid grid-cols-2 rounded-lg bg-slate-300 m-1'>
                        <PokemonFormPic picUrl={pokemon.baseData.sprites.back_default} type='back' />
                        <PokemonFormPic picUrl={pokemon.baseData.sprites.front_default} type='front' />
                        <PokemonFormPic picUrl={pokemon.baseData.sprites.back_shiny} type='shiny back' />
                        <PokemonFormPic picUrl={pokemon.baseData.sprites.front_shiny} type='shiny front' />
                    </div>) :
                    <PokeDrawPic pokeId={pokemon.baseData.id} pokeName={pokemon.baseData.name} />
            }
            <div className='grid grid-cols-1'>
                <div className='grid grid-cols-2'>
                    <InfoSmallComponent tile="Weight" detail_info={(pokemon.baseData.weight * 0.1).toFixed(2)} metric=" kg" icon={weightIcon} />
                    <InfoSmallComponent tile="Height" detail_info={(pokemon.baseData.height * 0.1).toFixed(2)} metric=" m" icon={heightIcon} />
                </div>
                <TypeCanvas types={pokemon.baseData.types} />
                <AbilityCanvas abilities={pokemon.baseData.abilities} />
                <div className='grid grid-cols-2'>

                    <InfoSmallComponent tile="Base Experience" detail_info={pokemon.baseData.base_experience} icon={expIcon} />
                    <HeldItems heldItems={pokemon.baseData.held_items} />
                </div>
                {
                    pokemon.species ?
                        <div className='grid grid-cols-2'>
                            <InfoSmallComponent tile="Growth Rate" detail_info={pokemon.species.growth_rate.name} icon={<GiHealthIncrease className='inline' />} />
                            <HabitatCanvas habitat={pokemon.species.habitat} />
                        </div>
                        : <LoadingSpinner />
                }
            </div>
            <div className='md:col-span-2'>
                <StatCanvas stat={pokemon.baseData.stats} />
            </div>
        </div>
    )
}


export default InfoCanvas
