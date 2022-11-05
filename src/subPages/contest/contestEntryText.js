import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ContestEntryText = () => {
    const [effectText, setEffectText] = useState([]);

    useEffect(() => {
        const getEntryText = async () => {

            const effectNumber = (await axios.get('https://pokeapi.co/api/v2/contest-effect/')).data.count;
            let effectResult = [];
            for (let i = 1; i <= effectNumber; i++) {
                const entryData = (await axios.get(`https://pokeapi.co/api/v2/contest-effect/${i}`)).data
                effectResult.push(entryData)
            }
            return effectResult;
        }
        const setStateData = async () => {
            const apiResult = await getEntryText();
            setEffectText(apiResult)
        }

        setStateData();
    }, [])
    return (
        <div className=' m-3 rounded-lg bg-slate-300 '>{JSON.stringify(effectText)}</div>
    )
}

export default ContestEntryText