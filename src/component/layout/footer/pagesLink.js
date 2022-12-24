import React from 'react'
import { Link } from 'react-router-dom'

const SingleLink = ({ name, url }) => {
    return (
        <Link to={url} className=' hover:cursor-pointer hover:text-sky-400 underline'>
            {name}
        </Link>
    )
}


// quick link to pages
const PagesLink = () => {
    return (
        <div className=' grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 text-left'>
            <div className='grid grid-cols-1'>
                <SingleLink name='Berries' url={'/t-pokedex/berries'} />
                <SingleLink name='Items' url={'/t-pokedex/item'} />
            </div>
            <div className='grid grid-cols-1'>
                <SingleLink name={'Generation'} url='/t-pokedex/generation' />
                <SingleLink name={'Version Group'} url='/t-pokedex/version-group' />
            </div>
            <div className='grid grid-cols-1'>
                <SingleLink name='Contest' url={'/t-pokedex/contest'} />
                <SingleLink name='Super Contest' url={'/t-pokedex/super-contest'} />
                <SingleLink name='Encounter' url={'/t-pokedex/encounter'} />
            </div>
        </div>
    )
}

export default PagesLink