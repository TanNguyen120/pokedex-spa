import React, { useEffect, useState } from 'react'
import { TbPokeball } from 'react-icons/tb';
import { useSelector } from 'react-redux';
import LoadingSpinner from '../../../loadingSpiner';
import AbilitiesName from './abilitiesName';



const AbilitiesDetail = ({ abilities }) => {
    const webLanguage = useSelector(state => state.webSettings.language);
    const [activeAbility, setActiveAbility] = useState(null);
    // the function to set active ability to pass down to child component
    const setActiveFromChild = (ability) => {
        setActiveAbility(ability);
    }

    //--------------------------------------------------------------------------------------------
    // prepare the object for the component

    const [languageAbilities, setLangueAbilities] = useState([]);
    // flag to decide if the code should update state
    useEffect(() => {
        setLangueAbilities([]);
    }, [])
    // filter to language of choice (now is just english)
    // because the way the api return data we now have to do some degree 2 loop but this will not affect performant thus the array is usually have 9 element
    // And we have to do it ascnycrom too
    // this loop below is to retrieve 
    useEffect(() => {
        // clear the ability list if the prob are change
        const tempArray = [];
        const filterLanguage = async (mabilities) => {
            await mabilities.forEach(async element => {
                const languageAndAbility = { name: null, flavorText: null };
                await element.name.forEach(elementName => {
                    if (elementName.language.name === webLanguage) {
                        languageAndAbility.name = elementName.name;
                    }
                });
                await element.flavor_text.forEach(flavorElement => {
                    if (flavorElement.language.name === webLanguage) {
                        languageAndAbility.flavorText = flavorElement.flavor_text;
                    }
                })
                tempArray.push(languageAndAbility);

            });
            setLangueAbilities(tempArray);
        }
        filterLanguage(abilities);
    }, [abilities, webLanguage])



    //--------------------------------------------------------------------------------------------

    // this will set the active ability to the first element of the languageAbility
    useEffect(() => {
        setActiveAbility(languageAbilities[0])

    }, [languageAbilities])



    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1">
            <h3 className=' text-slate-500'>
                Ability Detail <TbPokeball className='inline' />
            </h3>
            <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1 p-2">
                <div className='grid grid-cols-3 px-4'>
                    {
                        activeAbility ?
                            languageAbilities.map((element, index) => (
                                <AbilitiesName ability={element} activeAbility={activeAbility} setActive={setActiveFromChild} key={index} />
                            ))
                            : <LoadingSpinner />
                    }
                </div>
                <div className='bg-white rounded-lg text-center text-black text-sm p-2'>
                    <div className="ring-1 ring-slate-400 rounded-lg p-2">
                        {activeAbility ? activeAbility.flavorText : <LoadingSpinner />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AbilitiesDetail