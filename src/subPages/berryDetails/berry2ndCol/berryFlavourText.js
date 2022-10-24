import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import FlavorTextRow from './flavorTextRow';

const BerryFlavourText = ({ flavorTexts }) => {
    const languageSetting = useSelector(state => state.webSettings.language);
    const [flavorLanguage, setFlavorLanguage] = useState([]);

    useEffect(() => {
        const getFlavorTextsBaseOnLanguage = async (language, flavorTexts) => {
            let result = [];
            await flavorTexts.forEach(element => {
                if (element.language.name === language) {
                    result.push(element)
                }
            });
            setFlavorLanguage(result);
        }
        getFlavorTextsBaseOnLanguage(languageSetting, flavorTexts)
    }, [flavorTexts, languageSetting]);

    return (
        <div className=' bg-slate-300 rounded-lg m-2 p-2'>
            <div className=' m-2 font-semibold '>
                Flavour Text:
            </div>
            <div className=' bg-slate-100 rounded-lg grid grid-cols-1 divide-y-2 gap-2'>
                {
                    flavorLanguage.map((element, index) => <FlavorTextRow flavorTextRow={element} key={index} />)
                }
            </div>
        </div>
    )
}

export default BerryFlavourText