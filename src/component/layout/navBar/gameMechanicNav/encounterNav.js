import React from 'react'
import { Link } from 'react-router-dom'

const EncounterNav = () => {
    return (
        <Link to='/t-pokedex/encounter'>
            <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                Encounter
            </div>
        </Link>
    )
}

export default EncounterNav