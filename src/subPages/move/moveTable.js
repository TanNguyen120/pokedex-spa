import React from 'react'
import { Link } from 'react-router-dom'

const MoveTable = ({ moveList }) => {
    return (
        <div className=' bg-slate-100 min-h-screen'>

            <div className=' grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 border-collapse '>
                {
                    moveList.map((element, index) => <Link
                        key={index}
                        to={`/t-pokedex/move/${element.name}`}
                        className=' border-b border-slate-600 border-collapse p-4 text-left capitalize hover:bg-slate-300 hover:scale-105 hover:text-blue-400 hover:underline'
                    >
                        {element.name}
                    </Link>)
                }
            </div>
        </div>
    )
}

export default MoveTable