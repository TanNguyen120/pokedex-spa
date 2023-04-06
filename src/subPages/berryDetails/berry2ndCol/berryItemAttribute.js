import React from 'react'
import { FiBookOpen } from 'react-icons/fi'
import { MdOutlineCategory } from 'react-icons/md'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import InfoSmallComponent from '../../../component/body/pokeInfo/infoCanvas/inforSmallComponent'

const BerryItemAttribute = ({ berryAttribute, berryItemCategory, berryItemCost }) => {
    const pokeDollar = <>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Pok%C3%A9mon_Dollar_sign.svg/747px-Pok%C3%A9mon_Dollar_sign.svg.png'
            className=' h-3 w-2 inline' alt='pokeDollar' />
    </>
    return (
        <div className=' m-2 grid grid-cols-3 '>
            <InfoSmallComponent tile='Item Attribute' link={`/t-pokedex/item-attribute/${berryAttribute ? berryAttribute.name : ''}`} detail_info={berryAttribute ? berryAttribute.name : 'none'} icon={<FiBookOpen className='inline' />} />
            <InfoSmallComponent tile='Item Category' link={`/t-pokedex/item-category/${berryItemCategory.name}`} detail_info={berryItemCategory.name} icon={<MdOutlineCategory className='inline' />} />
            <InfoSmallComponent tile='Cost' detail_info={berryItemCost} icon={<RiMoneyDollarCircleLine className='inline' />}
                metric={pokeDollar} />
        </div>
    )
}

export default BerryItemAttribute