import React from 'react'
import { FaHandHoldingWater } from "react-icons/fa"

const HeldItems = ({ heldItems }) => {
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1">
            <h3 className="">Held Items <FaHandHoldingWater className="inline" /></h3>
            <div className="bg-white rounded-lg text-center text-black m-2">
                {
                    heldItems.length > 0 ?
                        heldItems.map((item, index) => (
                            <div key={index} className="border-b border-slate-400 p-1 hover:cursor-pointer">{item.item.name}</div>
                        )) : "none"
                }
            </div>
        </div>
    )
}

export default HeldItems