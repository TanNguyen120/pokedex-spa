import React from 'react';
import { FaBirthdayCake } from 'react-icons/fa';
import { IoFootstepsSharp } from 'react-icons/io5';
import { GiBugNet } from 'react-icons/gi';

import { TbMoodHappy } from 'react-icons/tb';
import InfoSmallComponent from '../infoCanvas/inforSmallComponent';

import EggGroup from './eggGroup';
import EvolveFrom from './evolveFrom';
import GenderCanvas from './genderCanvas';
import PokedexEntry from './pokedexEntry';
import PokeColor from './pokeColor';
import AbilitiesDetail from './abilitesDetail';
import ShapeCanvas from './shapeCanvas';
import CheckCanvas from './checkCanvas';
import NumberInOtherDex from './numberInOtherDex';


const SpecieCanvas = ({ specieInfo, abilityDetail, pokeShape }) => {
    return (
        <div className='bg-slate-400 rounded-lg p-4 md:mr-5 md:ml-2 grid grid-cols-1 md:grid-cols-2 '>
            <div className="md:col-span-2 col-span-1">
                <PokedexEntry pokedexEntry={specieInfo.flavor_text_entries} />
            </div>
            <div className='grid grid-cols-2 '>
                <InfoSmallComponent tile="Debuts" detail_info={specieInfo.generation.name} icon={<FaBirthdayCake className='inline' />} />
                <EggGroup eggGroup={specieInfo.egg_groups} />
            </div>
            <div className='grid grid-cols-2 '>
                <InfoSmallComponent tile="Hatch Counter" detail_info={specieInfo.hatch_counter * 255} icon={<IoFootstepsSharp className='inline' />} metric="step" />
                <EvolveFrom evolveFrom={specieInfo.evolves_from_species} />
            </div>
            <GenderCanvas genderRatio={specieInfo.gender_rate} />
            <div className='grid grid-cols-2'>
                <InfoSmallComponent tile="Catch Rate" detail_info={specieInfo.capture_rate} icon={<GiBugNet className='inline' />} />
                <InfoSmallComponent tile="Base Happiness" detail_info={specieInfo.base_happiness} icon={<TbMoodHappy className='inline' />} />
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 md:col-span-2 '>
                <div className='col-span-1 grid grid-cols-1'>
                    <PokeColor pokeColor={specieInfo.color} />
                    <ShapeCanvas pokeShape={pokeShape} />
                </div>
                <div className="col-span-3 grid grid-cols-1">
                    <AbilitiesDetail abilities={abilityDetail} />
                    <CheckCanvas isBaby={specieInfo.is_baby} isLegend={specieInfo.is_legendary} isMythical={specieInfo.is_mythical} />
                    <NumberInOtherDex pokedexNumber={specieInfo.pokedex_numbers} />
                </div>
            </div>

        </div>
    )
}

export default SpecieCanvas