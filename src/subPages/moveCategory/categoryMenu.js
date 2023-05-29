import React from 'react'

const CategoryMenu = ({ currentCategory, categoryList, setCurrentPalpark }) => {
    return (
        <div className=' grid grid-cols-1 bg-slate-100 rounded-lg m-2 p-2'>

            <div className=' text-slate-500 text-sm text-left pl-10'>
                Choose Pal Park Area:
            </div>
            <div className="relative w-full lg:max-w-sm p-2">
                <select
                    value={currentCategory}
                    onChange={e => setCurrentPalpark(e.target.value)}
                    className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-slate-600 capitalize"
                >
                    {
                        categoryList.map((element, index) => <option value={element.name} key={index}>{element.name}</option>)
                    }
                </select>
            </div>
        </div>

    )
}

export default CategoryMenu