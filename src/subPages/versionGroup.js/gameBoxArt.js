import React from 'react'
import { Link } from 'react-router-dom'

const GameBoxArt = ({ versionName }) => {
    return (
        <div className=' mx-8'>
            <Link className=' hover:scale-125 hover:cursor-pointer' to={`/t-pokedex/game/${versionName}`}>
                <img src={`https://img.pokemondb.net/boxes/avif/${versionName}.avif`} alt='game box art' />
            </Link>
            <div className=' text-base font-semibold'>
                PokéMon {versionName}
            </div>
        </div>
    )
}

export default GameBoxArt