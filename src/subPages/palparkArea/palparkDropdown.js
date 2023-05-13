import React, { useEffect, useState } from 'react'


const PalparkDropdown = ({ palparkList, setCurrentPalpark, currentPalPark }) => {

    // Because option work differently so we have to do with onchange event
    return (
        <div>
            <div className="relative w-full lg:max-w-sm p-8">
                <select
                    value={currentPalPark}
                    onChange={e => setCurrentPalpark(e.target.value)}
                    className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-slate-600 capitalize"
                >
                    {
                        palparkList.map((element, index) => <option value={element.name} key={index}>{element.name}</option>)
                    }
                </select>
            </div>
        </div>)

}

export default PalparkDropdown