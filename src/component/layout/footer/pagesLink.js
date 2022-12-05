import React from 'react'
import { Link } from 'react-router-dom'

const SingleLink = ({ name, url }) => {
    return (
        <Link to={url} className=' hover:cursor-pointer hover:text-sky-400'>
            {name}
        </Link>
    )
}



const PagesLink = () => {
    return (
        <div className=' grid grid-cols-3'>
            <div className='grid grid-cols-1'>
                <SingleLink name='Berries' url={'/t-pokedex/berries'} />
            </div>
            <div className='grid grid-cols-1'>
                <SingleLink name={'Generation'} url='/t-pokedex/generation' />
                <SingleLink name={'Version Group'} url='/t-pokedex/version-group' />
            </div>
        </div>
    )
}

export default PagesLink