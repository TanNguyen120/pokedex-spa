import React from 'react'
import { Link } from 'react-router-dom'
import { FcGenealogy } from 'react-icons/fc'
const GameGenNav = () => {
    return (
        <>

            <Link to='/t-pokedex/encounter'>
                <div className=' hover:text-slate-50 text-slate-700 hover:text-lg hover:font-semibold p-2'>
                    <FcGenealogy className=' inline' /> Encounter
                </div>
            </Link>
        </>
    )
}

export default GameGenNav