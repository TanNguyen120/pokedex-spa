import React from 'react';
import { FiWind } from 'react-icons/fi';
import { RiSunFill } from 'react-icons/ri';
import { GrRaspberry } from 'react-icons/gr'
import InfoSmallComponent from '../../../component/body/pokeInfo/infoCanvas/inforSmallComponent';

const NumberInfo = ({ berrySmoothness, soilDryness, maxHarvest }) => {
    return (
        <div className=' grid grid-cols-3 p-1'>
            <InfoSmallComponent tile='Smoothness' icon={<FiWind className=' inline' />} detail_info={berrySmoothness} />
            <InfoSmallComponent tile='Soil Dryness' icon={<RiSunFill className=' inline' />} detail_info={soilDryness} />
            <InfoSmallComponent tile='Max Harvest' icon={<GrRaspberry className=' inline' />} detail_info={maxHarvest} metric=' per times' />

        </div>
    )
}

export default NumberInfo