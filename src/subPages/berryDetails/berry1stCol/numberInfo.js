import React from 'react';
import { FiWind } from 'react-icons/fi';
import { RiSunFill } from 'react-icons/ri';
import { GiTreeGrowth, GiBlender } from 'react-icons/gi'
import { GrRaspberry } from 'react-icons/gr'
import { TfiRuler } from 'react-icons/tfi'
import InfoSmallComponent from '../../../component/body/pokeInfo/infoCanvas/inforSmallComponent';

const NumberInfo = ({ berrySmoothness, soilDryness, maxHarvest, size, firmness, growthTime }) => {
    const totalGrowthTime = growthTime * 5;
    return (
        <div className=' grid grid-cols-3 p-1'>
            <InfoSmallComponent tile='Smoothness' icon={<FiWind className=' inline' />} detail_info={berrySmoothness} />
            <InfoSmallComponent tile='Soil Dryness' icon={<RiSunFill className=' inline' />} detail_info={soilDryness} />
            <InfoSmallComponent tile='Max Harvest' icon={<GrRaspberry className=' inline' />} detail_info={maxHarvest} metric=' per times' />
            <InfoSmallComponent tile='Growth Time Each State' detail_info={`${growthTime}`} metric="hr" />
            <InfoSmallComponent tile='Growth Time Total' icon={<GiTreeGrowth className=' inline' />} detail_info={`${totalGrowthTime}`} metric="hr" />
            <InfoSmallComponent tile='Size' icon={<TfiRuler className=' inline' />} detail_info={(size * 0.1).toFixed(1)} metric='cm' />
            <InfoSmallComponent tile='Firmness' icon={<GiBlender className=' inline' />} detail_info={firmness.name} metric='' link={`/t-pokedex/berries/firmness/${firmness.name}`} />
        </div>
    )
}

export default NumberInfo