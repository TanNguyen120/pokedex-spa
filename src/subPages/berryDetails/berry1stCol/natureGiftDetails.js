import React from 'react'
import { BsGift } from 'react-icons/bs'
import InfoSmallComponent from '../../../component/body/pokeInfo/infoCanvas/inforSmallComponent'
import TypeCanvas from '../../../component/body/pokeInfo/infoCanvas/typeCanvas'

const NatureGiftDetails = ({ power, type }) => {
    return (
        <div className=' m-2 p-2 bg-slate-300 rounded-lg grid grid-cols-1 '>
            <div className=' font-semibold text-lg text-center m-2'>Nature Gift Move <BsGift className='inline mb-2' /> </div>
            <div className=' bg-slate-200 m-1 rounded-lg border-4 border-slate-400 grid grid-cols-2'>
                <TypeCanvas types={[{ type: type }]} />
                <InfoSmallComponent tile='power' detail_info={power} />
            </div>
        </div>
    )
}

export default NatureGiftDetails