import React from 'react';
import { FaBirthdayCake } from 'react-icons/fa';
import { IoFootstepsSharp } from 'react-icons/io5';
import InfoSmallComponent from '../infoCanvas/inforSmallComponent';

import EggGroup from './eggGroup';
import EvolveFrom from './evolveFrom';
import PokedexEntry from './pokedexEntry';


const SpecieCanvas = ({ specieInfo }) => {
    return (
        <div className='bg-slate-400 rounded-lg p-4 mr-5 ml-2 grid grid-cols-1 md:grid-cols-2 '>
            <div className="md:col-span-2">
                <PokedexEntry pokedexEntry={specieInfo.flavor_text_entries} />
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <InfoSmallComponent tile="Debuts" detail_info={specieInfo.generation.name} icon={<FaBirthdayCake className='inline' />} />
                <EggGroup eggGroup={specieInfo.egg_groups} />
            </div>
            <div className='grid md:grid-cols-2 grid-cols-1'>
                <InfoSmallComponent tile="Hatch Counter" detail_info={specieInfo.hatch_counter} icon={<IoFootstepsSharp className='inline' />} metric="step" />
                <EvolveFrom evolveFrom={specieInfo.evolves_from_species} />
            </div>
        </div>
    )
}

export default SpecieCanvas