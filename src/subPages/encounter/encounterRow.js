import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const EncounterRow = ({ name, description }) => {
    const webLanguage = useSelector((state) => state.webSettings.language);
    const [langDescription, setLangDescription] = useState(null);

    useEffect(() => {
        const getDescriptionLang = async () => {
            await description.forEach(element => {
                if (element.language.name === webLanguage) {
                    setLangDescription(element);
                    return true;
                }
            })
        }
        getDescriptionLang();
    }, [webLanguage, description])
    return (
        <div className=' grid grid-cols-2 divide-x divide-slate-300 bg-slate-50 gap-2 text-left'>
            <div className='p-3'> {name} </div>
            <div className='p-3'> {langDescription ? langDescription.name : description[0].name}</div>
        </div>
    )
}

export default EncounterRow