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
        <div onClick={e => { setCurrentOption(optionName) }} className={` hover:bg-slate-300 ${css}`}>
            {optionName}
        </div>
    )
}


const DescriptionSection = ({ description }) => {
    const [showText, setShowtext] = useState(null);
    const [currentOption, setCurrentOption] = useState('short')
    useEffect(() => {
        if (currentOption === 'short') {
            setShowtext(description.effect_entries[0].short_effect);
        } else {
            setShowtext(description.effect_entries[0].effect)
        }
    }, [description, currentOption])
    return (
        <div className=' grid grid-cols-1 p-4 rounded-lg bg-slate-200 '>
            <div className='grid grid-cols-2 ml-3 '>
                <OptionBtn currentOption={currentOption} optionName={'short'} setCurrentOption={setCurrentOption} />
                <OptionBtn currentOption={currentOption} optionName={'long'} setCurrentOption={setCurrentOption} />
            </div>
            <div className=' rounded-lg bg-white p-2'>
                {showText}
            </div>
        </div>
    )
}

export default DescriptionSection