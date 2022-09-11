import React, { useEffect } from 'react'

const PokeGenera = ({ pokeGenera }) => {
    const genera = "";
    pokeGenera.forEach(element => {
        if (element.language.name === 'en') {
            genera = element.genus
        }
    })
    // side effect when pokeGenera change
    useEffect(() => { }, [])
    return (
        <div>
            { }
        </div>
    )
}

export default PokeGenera