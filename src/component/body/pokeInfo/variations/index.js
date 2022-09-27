import React from 'react'
import VarietiesButton from './varietiesButton'

const Variations = ({ varieties }) => {
    return (
        <div className="md:col-span-2 px-4 grid md:grid-cols-10 grid-cols-4 mx-4">
            {
                varieties.map(element => <VarietiesButton pokemon={element.pokemon} />)
            }
        </div>
    )
}

export default Variations