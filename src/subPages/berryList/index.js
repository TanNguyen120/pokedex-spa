import axios from 'axios';
import React, { useEffect, useState } from 'react'

const BerriesList = () => {
    const [berriesList, setBerriesList] = useState([]);

    useEffect(() => {
        const getBerriesList = async () => {
            const beriesNumber = (await axios.get(`https://pokeapi.co/api/v2/berry/`)).data.count;
            const berriesList = (await axios.get(`https://pokeapi.co/api/v2/berry/?offset=0&limit=${beriesNumber}`)).data.results;
            setBerriesList(berriesList);
        }
        getBerriesList();
    }, [])
    return (
        <div>{JSON.stringify(berriesList)}</div>
    )
}

export default BerriesList