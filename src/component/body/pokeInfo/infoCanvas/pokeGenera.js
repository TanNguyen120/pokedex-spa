import React, { useEffect, useState } from 'react'

const PokeGenera = ({ pokeGenera }) => {
    const [genera, setGenera] = useState("");

    // side effect when pokeGenera change
    useEffect(() => {
        pokeGenera.forEach(element => {
            if (element.language.name === 'en') {
                setGenera(element.genus)
            }
        })
    }, [pokeGenera])
    return (
        <div className="text-sm font-light" >
            {genera}
        </div>
    )
}

export default PokeGenera