import React, { useEffect, useState } from 'react'

const OptionBtn = ({ currentOption, optionName, setCurrentOption }) => {
    const [css, setCss] = useState('');
    useEffect(() => {
        if (currentOption === optionName) {
            setCss(' bg-white')
        } else {
            setCss(' bg-slate-100')
        }
    }, [currentOption, optionName])

    return (
        <div onClick={e => { setCurrentOption(optionName) }} className={` capitalize hover:bg-slate-300 rounded-t-lg hover:cursor-pointer ${css}`}>
            {optionName}
        </div>
    )
}


const DescriptionSection = ({ description }) => {
    const [entryLanguage, setEntryLanguage] = useState(description[0]);
    useEffect(() => {
        description.forEach(element => {
            if (element.language.name === 'en') {
                setEntryLanguage(element)
            }
        });
    }, [description])

    const [showText, setShowtext] = useState(null);
    const [currentOption, setCurrentOption] = useState('short')
    useEffect(() => {
        if (currentOption === 'short') {
            setShowtext(entryLanguage.short_effect);
        } else {
            setShowtext(entryLanguage.effect)
        }
    }, [entryLanguage, currentOption])
    return (
        <div className=' grid grid-cols-1 p-4 rounded-lg bg-slate-200 my-3 '>
            <div className='grid grid-cols-2 ml-16 w-96 '>
                <OptionBtn currentOption={currentOption} optionName={'short'} setCurrentOption={setCurrentOption} />
                <OptionBtn currentOption={currentOption} optionName={'long'} setCurrentOption={setCurrentOption} />
            </div>
            <div className=' rounded-lg bg-white p-4 mx-6'>
                {showText}
            </div>
        </div>
    )
}

export default DescriptionSection