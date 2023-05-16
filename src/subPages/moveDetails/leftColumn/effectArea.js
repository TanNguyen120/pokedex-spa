import React, { useEffect, useState } from 'react'

const OptionBtn = ({ optionName, setEffectOption, effectOption }) => {
    const [css, setCss] = useState('bg-slate-100')

    useEffect(() => {
        optionName === effectOption ? setCss(' bg-slate-400 text-white') : setCss(' bg-slate-100 text-slate-400')
    }, [effectOption, optionName])
    return (
        <div className={'rounded-t-lg px-3 py-1 capitalize hover:cursor-pointer hover:bg-slate-300' + css} onClick={e => { setEffectOption(optionName) }}>
            {optionName}
        </div>
    )
}



const EffectArea = ({ effectObject }) => {
    const [effectOption, setEffectOption] = useState('short');
    const options = ['long', 'short'];
    return (
        <div className=' grid grid-cols-1 pt-5'>
            <div className='flex flex-row ml-5'>
                {options.map((element, index) => <OptionBtn key={index} effectOption={effectOption} optionName={element} setEffectOption={setEffectOption} />)}
            </div>
            <div className=' rounded-lg bg-white border border-slate-500 p-4 '>
                {
                    effectOption === 'long' ? effectObject.effect : effectObject.short_effect
                }
            </div>
        </div>
    )
}

export default EffectArea