import React from 'react'
import EffectArea from './effectArea'
import InfoSmallComponent from '../../../component/body/pokeInfo/infoCanvas/inforSmallComponent'
import { GiArrowScope } from 'react-icons/gi'
import { ImPower } from 'react-icons/im'
import { SiRelianceindustrieslimited } from 'react-icons/si'

const LeftColumn = ({ moveDetails }) => {
    return (
        <div className='grid grid-cols-1'>
            <EffectArea effectObject={moveDetails.effect_entries[0]} />
            <div className=' grid grid-cols-3 my-3'>
                <InfoSmallComponent tile='Accuracy' detail_info={moveDetails.accuracy} icon={<GiArrowScope className='inline' />} />
                <InfoSmallComponent tile='Power' detail_info={moveDetails.power} icon={<ImPower className='inline' />} />
                <InfoSmallComponent tile='PP' detail_info={moveDetails.pp} icon={<SiRelianceindustrieslimited className='inline' />} />
            </div>
        </div>
    )
}

export default LeftColumn 