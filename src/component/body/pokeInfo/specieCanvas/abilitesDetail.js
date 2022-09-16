import React, { useState } from 'react'
import { TbPokeball } from 'react-icons/tb';
const abilitiesName = ({ name, isActive }) => {
    let bg = "bg-inherit";
    if (isActive) {
        bg = "bg-white";
    }
    return (

        <div className={`rounded-lg ${bg}`}>
            {name}
        </div>
    )
}



const AbilitiesDetail = ({ abilities }) => {
    //--------------------------------------------------------------------------------------------
    // prepare the object for the component
    const languageAndAbility = { name: null, flavorText: null };
    const languageAbilities = []
    // filter to language of choice (now is just english)
    // because the way the api return data we now have to do some degree 2 loop but this will not affect performant thus the array is usually have 9 element
    // this loop below is to retrieve 
    abilities.forEach(element => {
        element.name.some(elementName => {
            if (elementName.language.name === "en") {
                languageAndAbility.name = elementName.name;
                return true
            }
        });
        element.flavor_text.some(flavorElement => {
            if (flavorElement.language.name === "en") {
                languageAndAbility.flavorText = flavorElement.flavor_text;
                return true
            }
        })
        languageAbilities.push(languageAndAbility);

    });
    //--------------------------------------------------------------------------------------------

    const [activeAbility, setActiveAbility] = useState();

    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1">
            <h3>
                Ability Detail <TbPokeball className='inline' />
            </h3>
            <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1 p-2">
                <div className='grid grid-cols-4'>
                    <div className='bg-white text-center rounded-t-lg ml-4'>
                        {JSON.stringify(activeAbility)}
                    </div>
                </div>

                <div className='bg-white rounded-lg text-center text-black text-sm p-2'>
                    <div className="ring-1 ring-slate-400 rounded-lg p-2">
                        {JSON.stringify(activeAbility)}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AbilitiesDetail