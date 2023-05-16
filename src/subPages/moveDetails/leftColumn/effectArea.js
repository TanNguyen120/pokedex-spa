import React, { useEffect, useState } from 'react'

const OptionBtn = ({ optionName, setEffectOption, effectOption }) => {
    const [css, setCss] = useState('bg-slate-100 ')

    useEffect(() => {
        optionName === effectOption ? setCss(' bg-white border-t border-r border-l border-slate-600 ') : setCss(' bg-slate-100 text-slate-400')
    }, [effectOption, optionName])
    return (
        <button className={'rounded-t-lg px-3 py-1 capitalize hover:cursor-pointer hover:bg-slate-300' + css} onClick={e => { setEffectOption(optionName) }}>
            {optionName}
        </button>
    )
}



const EffectArea = ({ effectObject }) => {
    const [effectOption, setEffectOption] = useState('short');
    const options = ['long', 'short'];
    return (
        <div className=' grid grid-cols-1 pt-5 rounded-lg p-2 bg-slate-100'>
            <div className=' text-slate-600 text-left ml-5 mb-3'>
                Effect:
            </div>
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