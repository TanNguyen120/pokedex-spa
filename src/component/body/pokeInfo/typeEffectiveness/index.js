import React, { useEffect, useState } from 'react'
import { BsLightning } from 'react-icons/bs'
import { GiShardSword, GiSurroundedShield } from 'react-icons/gi'
import damageCalculate from '../../../../tool/typeEffectCaculate'
import DamageCanvas from './damageCanvas'


const TypeEffectiveness = ({ types }) => {
    const [typeEffect, setTypeEffect] = useState([["Some Thing Went Wrong"], ["Some Thing Went Wrong"]])
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
                Damage Effectiveness <BsLightning className='inline' />
            </div>
            <div className=' bg-slate-300 rounded-lg m-2 p-2 grid grid-cols-1 items-center'>
                <div className=' text-lg font-semibold'>
                    Deal Damage <GiShardSword className='inline' />
                </div>
                <DamageCanvas damageVector={typeEffect[0]} />
            </div>
            <div className=' bg-slate-300 rounded-lg m-2 p-2 grid grid-cols-1 items-center'>
                <div className=' text-lg font-semibold'>
                    Take Damage <GiSurroundedShield className='inline' />
                </div>
                <DamageCanvas damageVector={typeEffect[1]} />
            </div>
            <div className=' col-span-2 text-xs font-mono text-left pl-3'>
                <div>This table is for games from 2013 onwards, older game have some minor differences</div>
                <div> Type Effectiveness depend on the type of move of attack pokemon </div>
                <div> Damage Deal table only accuracy for single type pokemon </div>
            </div>
        </div>
    )
}

export default TypeEffectiveness