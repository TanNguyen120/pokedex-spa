import React from 'react'
import AppearInGen from './appearInGen'
import BerryDescription from './berryDescription'
import BerryItemAttribute from './berryItemAttribute'

const BerryCol2 = ({ berryItemsData }) => {
    return (
        <div className=' border-3 border-slate-500 m-3 p-2 bg-slate-400  rounded-lg grid grid-cols-1'>
            <BerryDescription berryEffect={berryItemsData.effect_entries[0]} />
            <BerryItemAttribute berryAttribute={berryItemsData.attributes[0]} berryItemCategory={berryItemsData.category} berryItemCost={berryItemsData.cost} />
            <AppearInGen gameIndices={berryItemsData.game_indices} />
        </div>
    )
}

export default BerryCol2