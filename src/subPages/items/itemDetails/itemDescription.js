import React, { useEffect, useState } from 'react'



// the toggle btn to set description style
const EffectOption = ({ optionName, currentOption, setCurrentOption }) => {
    const [bgStyle, setStyle] = useState('');

    useEffect(() => {
        // set bg color base on current option
        optionName === currentOption ? setStyle(' bg-slate-50 text-slate-500') : setStyle(' bg-slate-200 text-slate-400');
    }, [currentOption, optionName])


    return (
        <div onClick={e => { setCurrentOption(optionName) }} className={` ${bgStyle} rounded-t-xl hover:bg-slate-300 hover:cursor-pointer p-2 border-collapse border border-slate-400`}>
            {optionName}
        </div>
    )
}


// text area for description 

const ItemDescription = ({ description }) => {
    const [descriptionType, setDescriptionType] = useState('Long Effect');
    const [effect, setEffect] = useState('');
    const setCurrentOption = (optionName) => {
        setDescriptionType(optionName);
    }
    useEffect(() => {
        // display effect base on option
        descriptionType === 'Long Effect' ? setEffect(description.effect) : setEffect(description.short_effect)
    }, [descriptionType, description])
    return (
        <div className=' grid grid-cols-1 p-3 '>
            <div className=' grid grid-cols-5 ml-5 border-collapse'>
                <EffectOption optionName={'Long Effect'} currentOption={descriptionType} setCurrentOption={setCurrentOption} />
                <EffectOption optionName={'Short Effect'} currentOption={descriptionType} setCurrentOption={setCurrentOption} />
            </div>
            <div className=' bg-slate-50 p-4 rounded-lg border border-slate-400 border-collapse text-start first-letter:ml-9'>
                {effect}
            </div>
        </div>
    )
}

export default ItemDescription