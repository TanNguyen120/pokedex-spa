import React from 'react'

const AttributeDescription = ({ attributeDescription }) => {
    return (
        <div className=' grid-cols-1 p-5 m-3 bg-slate-100 rounded-lg'>
            <div className=' text-left ml-5 font-semibold text-base'>
                Description:
            </div>
            <div className=' rounded-lg bg-slate-50 m-6 p-4 border border-slate-400 '>
                {attributeDescription}
            </div>
        </div>
    )
}

export default AttributeDescription