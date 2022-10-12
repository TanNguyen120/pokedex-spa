import React from 'react'
import TypeDamageBtn from './typeDamageBtn'

const DamageCategory = ({ tile, damageCategory }) => {
    return (
        <div>
            <div className='m-1 grid md:grid-cols-3  py-2 px-1 rounded-lg ring-1 ring-slate-600/80'>
                <span className=' text-sm font-semibold text-left'>{tile}: </span>
                <span className=' bg-slate-100 rounded-xl ml-2 md:col-span-3 col-span-2 grid md:grid-cols-4 grid-cols-3 p-2'>
                    {
                        damageCategory.map((element, index) => <TypeDamageBtn typeObject={element} key={index} />)
                    }
                </span>
            </div>
        </div>
    )
}

export default DamageCategory