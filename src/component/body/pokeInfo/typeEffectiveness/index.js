import React, { useEffect, useState } from 'react'
import damageCalculate from '../../../../tool/typeEffectCaculate'

const TypeEffectiveness = ({ types }) => {
    const [typeEffect, setTypeEffect] = useState("Some Thing Went Wrong")
    useEffect(() => {
        async function calculate(typeToCalculate) {
            const result = await (damageCalculate(typeToCalculate));
            setTypeEffect(result);
        }
        calculate(types);
    }, [types])
    return (
        <div className='bg-slate-400 rounded-lg md:m-5 p-2 md:col-span-2 grid md:grid-cols-2 grid-cols-1'>
            <div className='md:col-span-2 text-xl font-semibold font-mono'>
                Damage Effectiveness
            </div>
            <div className=' bg-slate-300 rounded-lg m-2 p-2 flex flex-col items-center'>
                <div className=' text-base font-semibold'>
                    Deal Damage
                </div>
            </div>
            <div className=' bg-slate-300 rounded-lg m-2 p-2 flex flex-col items-center'>
                <div className=' text-base font-semibold'>
                    Take Damage
                </div>
            </div>
        </div>
    )
}

export default TypeEffectiveness