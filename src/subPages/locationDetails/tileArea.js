import React from 'react'
import { Link } from 'react-router-dom'
import smoothTile from '../../tool/smoothTile'

const TileArea = ({ locationName, regionName, generationName }) => {
    return (
        <div className=' grid grid-cols-1 rounded-lg bg-slate-200 p-4  border-b border-slate-500 '>
            <div className=' font-semibold text-lg capitalize'>{smoothTile(locationName)}</div>
            <div className=' grid grid-cols-2'>
                <div className='  mx-auto'>
                    <div >
                        <span className=' text-slate-400'> Region: </span>
                        <Link className=' hover:cursor-pointer hover:underline hover:text-blue-400' to={`/t-pokedex/regions/${regionName}`}>{regionName} </Link>
                    </div>
                </div>
                <div className=' flex text-right float-right mx-auto'>
                    <div className=' flex flex-row gap-2'>
                        <span className=' text-slate-400'> Generation: </span>
                        <span className=' grid grid-cols-1'>
                            {
                                generationName.map((element, index) =>
                                    <Link key={index} className={' hover:underline hover:text-blue-400 hover:cursor-pointer'} to={`/t-pokedex/generations/${element.generation.name}`}>
                                        {element.generation.name}
                                    </Link>)
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TileArea