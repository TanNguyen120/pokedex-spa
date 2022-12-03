import React from 'react'
import { Link } from 'react-router-dom'

const MoveLearnMethod = ({ genName, moveLearn }) => {
    return (
        <div className=' grid grid-cols-1 rounded-lg bg-slate-100 text-left p-9 m-3'>
            <div className=' text-base font-semibold m-4'>
                Move Learn Method in {genName}
            </div>
            <ol className=" bg-white rounded-lg p-4 list-disc">
                {moveLearn.map(element => <li key={element.name} className=" m-3 hover:bg-slate-200">
                    <Link to={`/t-pokedex/move-learn-method/${element.name}`} className=' hover:text-cyan-600 hover:cursor-pointer'>
                        {element.name}
                    </Link>
                </li>)}
            </ol>
        </div>
    )
}

export default MoveLearnMethod