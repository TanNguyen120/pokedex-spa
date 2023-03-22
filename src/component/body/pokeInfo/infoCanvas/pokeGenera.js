import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const PokeGenera = ({ pokeGenera }) => {
    const [genera, setGenera] = useState("");
    const webLanguage = useSelector(state => state.webSettings.language);
    // side effect when pokeGenera change
    useEffect(() => {
        pokeGenera.forEach(element => {
            if (element.language.name === webLanguage) {
                setGenera(element.genus)
            }
        })
    }, [pokeGenera])
    return (
        <div className="text-sm font-light text-slate-700" >
            {genera}
        </div>
    )
}

export default PokeGenera