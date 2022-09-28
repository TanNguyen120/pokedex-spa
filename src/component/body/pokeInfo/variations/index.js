import React, { useState } from 'react'
import VarietiesButton from './varietiesButton'

const Variations = ({ varieties }) => {
    const [activeForm, setActiveForm] = useState(varieties[0].pokemon.name);

    return (
        <div className="md:col-span-2 px-4 grid md:grid-cols-10 grid-cols-4 mx-4">
            {
                varieties.map(element => <VarietiesButton pokemon={element.pokemon} activeVarieties={activeForm} setActiveVarieties={setActiveForm} />)
            }
        </div>
    )
}

export default Variations