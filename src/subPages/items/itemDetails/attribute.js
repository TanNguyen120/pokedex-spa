import React from 'react'
import { Link } from 'react-router-dom'


const AttributeBtn = ({ attributeName }) => {
    return (
        <Link to={`/t-pokedex/item-attribute/${attributeName}`} className=' hover:rounded-md hover:cursor-pointer hover:scale-125 hover:underline hover:text-blue-400 '>
            <div className='hover:bg-slate-200 bg-slate-50 rounded-lg lg:py-6 py-2 capitalize'>
                {attributeName}
            </div>
        </Link>
    )
}




const Attribute = ({ attributeList }) => {
    return (
        <div className=' p-3 m-2 rounded-lg bg-slate-100'>
            <div className=' text-left ml-9 text-lg  text-slate-400'>
                Attributes:
            </div>
            <div className='rounded-lg m-4 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 p-4 gap-4'>
                {
                    attributeList.length > 0 ? attributeList.map((attribute, index) => <AttributeBtn attributeName={attribute.name} key={index} />) : 'None'
                }
            </div>
        </div>
    )
}

export default Attribute