import React from 'react'
import SpriteFrame from '../items/itemDetails/spriteFrame'
import ItemAttributeFrame from './itemAttributeFrame'

const ItemsAttributeList = ({ itemList, attributeName }) => {
  return (
    <div className=' rounded-lg bg-slate-100 grid-cols-1'>
      <div className=' text-base font-semibold text-left capitalize'> Items That Have {attributeName} attribute:</div>
      <div className=' rounded-lg bg-slate-50 m-4 p-4 grid lg:grid-cols-12 md:grid-cols-8 grid-cols-4'>
        {
          itemList.map((index, element) => <ItemAttributeFrame itemName={element.name} key={index} />)
        }
      </div>
    </div>
  )
}

export default ItemsAttributeList