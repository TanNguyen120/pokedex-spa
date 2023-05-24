import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ContestEffect = ({ url }) => {
    const [contestEffect, setContestEffect] = useState(null);
    useEffect(() => {
        const getContestEffectData = async () => {
            const resData = (await (axios.get(url))).data;
            setContestEffect(resData);
        }

        getContestEffectData();
    }, [url])
    return (
        <div className=' rounded-lg bg-slate-100 m-4 p-2 grid grid-cols-1'>
            <div className=' text-left text-slate-600 pl-5 my-4'>Contest Effect: </div>
            <div className=' bg-white rounded-lg p-4 m-3'>
                {contestEffect.effect_entries[0].effect}
            </div>
            <div className=' text-left text-slate-600 pl-5 my-4'>Flavour Text: </div>
            <div className=' bg-white rounded-lg p-4 m-3'>
                {contestEffect.flavor_text_entries[0].flavor_text}
            </div>
        </div>
    )
}

export default ContestEffect