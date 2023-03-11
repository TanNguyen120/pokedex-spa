import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import PokedexDescription from './pokedexDescription';


const PokedexEntry = ({ pokedexEntry }) => {
    const webLanguage = useSelector(state => state.webSettings.language);

    const [languageEntries, setLanguageEntries] = useState([]);

    useEffect(() => {
        const getPokedexEntriesBaseOnLanguage = async (pokedexEntry, language) => {
            // get all description of pokedex entry in webLanguage
            const langEntry = [];
            // use async to wait for for loop result
            await pokedexEntry.forEach(element => {
                if (element.language.name === language) {
                    langEntry.push(element);
                }
            });
            setLanguageEntries(langEntry);

        }
        getPokedexEntriesBaseOnLanguage(pokedexEntry, webLanguage);
    }, [webLanguage, pokedexEntry])

    // HOT FIX FOR THE SCARLET VIOLET VERSION
    return (

        <div>
            {languageEntries.length > 0 ? languageEntries && <PokedexDescription pokeEntry={languageEntries} /> : <div className=' text-lg text-red-600 font-semibold m-5'>No Data</div>}
        </div>
    )
}

export default PokedexEntry