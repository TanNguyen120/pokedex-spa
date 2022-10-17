import axios from 'axios';
import React, { useEffect, useState } from 'react'

const BerriesList = () => {
    const [berriesList, setBeriesList] = useState([]);

    useEffect(() => {
        const getBeriesList = async () => {
            const beriesNumber = (await axios.get(`https://pokeapi.co/api/v2/berry/`)).data.count;
            setBeriesList(beriesNumber)
        }
    }, [])
    return (
        <div>{berriesList}</div>
    )
}

export default BerriesList