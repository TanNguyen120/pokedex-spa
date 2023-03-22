import React from 'react'
import { FaHandHoldingWater } from "react-icons/fa"
import { Link } from 'react-router-dom'

const HeldItems = ({ heldItems }) => {
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono  text-black m-1">
            <h3 className=" text-slate-500 font-semibold">Held Items <FaHandHoldingWater className="inline" /></h3>
            <div className="bg-white rounded-lg text-center text-black m-2 capitalize">
                {
                    heldItems.length > 0 ?
                        heldItems.map((item, index) => (
                            <Link to={`/t-pokedex/item/${item.item.name}`} key={index} className="border-b border-slate-400 p-1 hover:cursor-pointer">{item.item.name}</Link>
                        )) : "none"
                }
            </div>
        </div>
    )
}

export default HeldItems