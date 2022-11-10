import axios from 'axios';
import React, { useEffect, useState } from 'react'

const EncounterDetails = () => {
    const [encounterDetails, setEncounterDetails] = useState(null);

    useEffect(() => {
        const getEncounterDetails = async () => {
            const encounterNumber = (await axios.get(`https://pokeapi.co/api/v2/encounter-method/`)).data.count;
            const encounterList = (await axios.get(`https://pokeapi.co/api/v2/encounter-method/?offset=0&limit=${encounterNumber}`)).data;
            setEncounterDetails(encounterList)
        }

        getEncounterDetails();
    }, [])
    return (
        <div className=' m-2 p-2 ring-2 bg-slate-300 ring-slate-400'>{encounterDetails}</div>
    )
}

export default EncounterDetails