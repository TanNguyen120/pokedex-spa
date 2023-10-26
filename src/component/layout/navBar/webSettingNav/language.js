import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LanguageOption from './languageOption';

const Language = () => {

    const languageWebSetting = useSelector(state => state.webSettings.language);
    const [languageList, setLanguageList] = useState([]);
    const [languageListToggle, setLanguageListToggle] = useState(false);

    // toggle function for showing language option
    const toggleLanguageOption = () => {
        setLanguageListToggle(preStage => !preStage);
    }

    useEffect(() => {
        const getLanguage = async () => {
            const languageData = (await (axios.get('https://pokeapi.co/api/v2/language/'))).data;
            setLanguageList(languageData.results);
        }
        getLanguage();
    }, [languageWebSetting])

    return (
        <div className=' flex flex-row p-2 rounded-md hover:cursor-pointer'>
            <div>
                Language:
            </div>
            <div className=' group ml-4  px-4 hover:text-white underline text-slate-700'>
                <div onClick={e => { toggleLanguageOption() }}> {languageWebSetting} </div>
                {
                    languageListToggle && <div className=' rounded-lg grid-cols-1 text-left p-2 bg-slate-400 text-black w-56 absolute  mt-1'>
                        {
                            languageList.length > 0 && languageList.map((element, index) =>
                                <LanguageOption langName={element.name} key={index} langOptionToggle={toggleLanguageOption} />
                            )}
                    </div>
                }
            </div>
        </div>
    )
}

export default Language