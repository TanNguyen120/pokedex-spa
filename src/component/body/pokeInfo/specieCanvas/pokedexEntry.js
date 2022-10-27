import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import PokedexDescription from './pokedexDescription';


const PokedexEntry = ({ pokedexEntry }) => {
    const webLanguage = useSelector(state => state.webSettings.language);

    const [languageEntries, setLanguageEntries] = useState(null);

    useEffect(() => {
        const getPokedexEntriesBaseOnLanguage = async (pokedexEntry, language) => {
            // get all description of pokedex entry in webLanguage
            const langEntry = [];
            await pokedexEntry.forEach(element => {
                if (element.language.name === language) {
                    langEntry.push(element);
                }
            });
            setLanguageEntries(langEntry);
        }
        getPokedexEntriesBaseOnLanguage(pokedexEntry, webLanguage);
    }, [webLanguage, pokedexEntry])

    return (
        <div>
            {languageEntries && <PokedexDescription pokeEntry={languageEntries} />}
        </div>
    )
}

export default PokedexEntry