import React from 'react'
import ItemCategoryRow from './itemCategoryRow'

const ItemInCategory = ({ itemList, categoryName }) => {
    return (
        <div className=' grid grid-cols-1'>
            <div className=' text-left font-semibold pl-5 m-3'>
                Item in {categoryName} category:
            </div>
            <div className=' divide-y divide-gray-100'>
                {itemList.map((element, index) => <ItemCategoryRow itemName={element.name} key={index} />)}
            </div>
        </div>
    )
}

export default ItemInCategory