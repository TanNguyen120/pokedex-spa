import React, { useEffect, useState } from 'react'



// the toggle btn to set description style
const EffectOption = ({ optionName, currentOption, setCurrentOption }) => {
    const [bgStyle, setStyle] = useState('');
    useEffect(() => {
        // set bg color base on current option
        optionName === currentOption ? setStyle(' bg-slate-100') : setStyle(' bg-slate-50');
    }, [currentOption, optionName])
    return (
        <div onClick={e => { setCurrentOption(optionName) }} className={` rounded-t-xl hover:bg-slate-300 hover:cursor-pointer`}>
            {optionName}
        </div>
    )
}


// text area for description 

const ItemDescription = ({ description }) => {
    const [descriptionType, setDescriptionType] = useState('Long Effect');
    const setCurrentOption = (optionName) => {
        setDescriptionType(optionName);
    }

    return (
        <div className=' grid grid-cols-1'>
            <div className=' flex flex-row mr-12'>
                <EffectOption optionName={'Long Effect'} currentOption={descriptionType} setCurrentOption={setCurrentOption} />
                <EffectOption optionName={'Short Effect'} currentOption={descriptionType} setCurrentOption={setCurrentOption} />
            </div>
        </div>
    )
}

export default ItemDescription