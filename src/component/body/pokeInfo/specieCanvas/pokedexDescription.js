import React, { useEffect, useState } from 'react';
import PokeVersionDiv from './pokeVersionDiv';


const PokedexDescription = ({ pokeEntry }) => {
    // emergency hot fix for the new scarlet and violet version


    // current game version flag
    const [currentGameVer, setCurrentGameVer] = useState(pokeEntry[0].version.name);

    // the description show in ui
    const [uiDescription, setUiDescription] = useState(pokeEntry[0].flavor_text);

    // the function to toggle the currentGameVer
    const updateCurrentGameVer = (gamever) => {
        setCurrentGameVer(gamever)
    }

    // the components will update description when current game version is change
    useEffect(() => {
        if (pokeEntry.length > 0 && currentGameVer !== null) {

            pokeEntry.forEach(element => {
                if (element.version.name === currentGameVer) {
                    setUiDescription(element.flavor_text)
                }
            });
        } else {
            setUiDescription('no data')
        }
    }, [currentGameVer, pokeEntry])

    // side effect of changing prob. We have to update the state
    useEffect(() => {
        setCurrentGameVer(pokeEntry[0].version.name);
    }, [pokeEntry])
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1 p-2">
            <div className='grid grid-cols-3 md:grid-cols-12 m-2'>
                {
                    pokeEntry.map((element, index) => (
                        <PokeVersionDiv selectedVersion={currentGameVer} version={element.version ? element.version.name : 'no data'} updateGameVer={updateCurrentGameVer} key={index} />
                    ))
                }
            </div>
            <div className='grid grid-cols-4'>
                <div className='bg-white text-center rounded-t-lg ml-4 md:text-base text-xs'>
                    Pokemon: {currentGameVer}
                </div>
            </div>

            <div className='bg-white rounded-lg text-center text-black text-sm p-2'>
                <div className="ring-1 ring-slate-400 rounded-lg p-2">
                    {uiDescription}
                </div>

            </div>
        </div>
    )
}

export default PokedexDescription