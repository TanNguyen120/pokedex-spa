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
        <div className='bg-slate-200'>
            {JSON.stringify(typeEffect)}
        </div>
    )
}

export default TypeEffectiveness