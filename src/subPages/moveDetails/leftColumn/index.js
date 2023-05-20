import React from 'react'
import EffectArea from './effectArea'
import InfoSmallComponent from '../../../component/body/pokeInfo/infoCanvas/inforSmallComponent'
import { GiArrowScope, GiAtomicSlashes } from 'react-icons/gi'
import { ImPower, ImTarget } from 'react-icons/im'
import { SiRelianceindustrieslimited } from 'react-icons/si'

import TypeArea from './typeArea'
import MachineList from './machineList'
import DamageClass from './damageClass'
import StatChange from './statChange'

const LeftColumn = ({ moveDetails }) => {
    return (
        <div className='grid grid-cols-1 rounded-lg bg-slate-200 p-2 m-2'>
            <EffectArea effectObject={moveDetails.effect_entries[0]} />
            <div className=' grid grid-cols-2'>
                <TypeArea typeName={moveDetails.type.name} />
                <DamageClass damageClass={moveDetails.damage_class.name} />
            </div>
            {/* Info can fit in the infosmallcomponent */}
            <div className=' grid grid-cols-3 my-3 gap-4 bg-slate-100 rounded-lg py-2'>
                <InfoSmallComponent tile='Accuracy' detail_info={moveDetails.accuracy + ' %'} icon={<GiArrowScope className='inline' />} />
                <InfoSmallComponent tile='Power' detail_info={moveDetails.power} icon={<ImPower className='inline' />} />
                <InfoSmallComponent tile='PP' detail_info={moveDetails.pp} icon={<SiRelianceindustrieslimited className='inline' />} />
                {/* <InfoSmallComponent tile='Type'
                    detail_info={<div className={`text-lg rounded-lg px-3 py-2 ${typeToColor(moveDetails.type.name)}`}>{moveDetails.type.name}</div>}
                    icon={<VscUngroupByRefType className='inline' />}
                /> */}
                <InfoSmallComponent tile='Priority' detail_info={moveDetails.priority} icon={<SiRelianceindustrieslimited className='inline' />} link={'https://bulbapedia.bulbagarden.net/wiki/Priority'} />
                <InfoSmallComponent tile='Generation' detail_info={moveDetails.generation.name} icon={<GiAtomicSlashes className='inline' />} link={`/t-pokedex/generation/${moveDetails.generation.name}`} />
                <InfoSmallComponent tile='Target' detail_info={moveDetails.target.name} icon={<ImTarget className='inline' link={`/t-pokedex/move_target/${moveDetails.target.name}`} />} />

            </div>
            {/* =========================================================================================================================== */}
            <MachineList moveName={moveDetails.name} machineList={moveDetails.machines} />
            <StatChange statChange={moveDetails.stat_changes} />
        </div>
    )
}

export default LeftColumn 