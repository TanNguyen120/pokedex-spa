import axios from 'axios'
import React from 'react'

import { useLoaderData } from 'react-router-dom';
import { GiAtom } from 'react-icons/gi';
import { MdOutlineDomain } from 'react-icons/md'
import NameSection from './nameSection';
import DescriptionSection from './descriptionSection';
import InfoSmallComponent from '../../component/body/pokeInfo/infoCanvas/inforSmallComponent';
import EffectChange from './effectChange';
import FlavourText from './flavourText';
import LearnByPokemon from './learnByPokemon';



// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {

    const abilityDetails = (await (axios.get(`https://pokeapi.co/api/v2/ability/${params.abilityName}`))).data

    return abilityDetails;
}


const AbilityDetails = () => {
    const abilityDetails = useLoaderData();
    return (
        <div className=' bg-whiteMarble bg-repeat min-h-screen font-serif'>
            <div className='lg:container md:mx-auto'>
                <div className='grid grid-cols-1 bg-slate-300 rounded-lg m-2 p-4'>
                    <NameSection name={abilityDetails.name} names={abilityDetails.names} />
                    <div className=' grid grid-cols-2'>
                        <DescriptionSection description={abilityDetails.effect_entries} />
                        <div className=' grid grid-cols-2 bg-slate-200 m-3 p-2 rounded-lg'>
                            <InfoSmallComponent helperText={'The generation this ability originated in.'} tile={`Generation`} detail_info={abilityDetails.generation.name} icon={<GiAtom className='inline' />} link={`/t-pokedex/generation/${abilityDetails.generation.name}`} />
                            <InfoSmallComponent helperText={'Whether or not this ability originated in the main series of the video games.'} tile={'Is Main Series'} detail_info={abilityDetails.is_main_series ? 'Yes' : 'No'} icon={<MdOutlineDomain className='inline' />} />
                        </div>
                    </div>
                    <EffectChange effectChange={abilityDetails.effect_changes} />
                    <div className=' grid grid-cols-1 md:grid-cols-2'>
                        <FlavourText flavorTextEntries={abilityDetails.flavor_text_entries} />
                        <LearnByPokemon pokeList={abilityDetails.pokemon} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader }
export default AbilityDetails