import React from 'react'

const ItemInCategory = ({ itemList, categoryName }) => {
    return (
        <div className=' grid grid-cols-1'>
            <div className=' text-left font-semibold pl-5 m-3'>
                Item in {categoryName} category:
            </div>
            <div>

            </div>
        </div>
    )
}

export default ItemInCategory