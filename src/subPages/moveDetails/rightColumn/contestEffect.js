import axios from 'axios';
import React, { useEffect, useState } from 'react'

const ContestEffect = ({ contestEffect }) => {
    const [contestEffectDetails, setContestEffectDetails] = useState(null);
    useEffect(() => {
        const getContestEffectData = async () => {
            try {
                const resData = (await (axios.get(contestEffect.url))).data;
                setContestEffectDetails(resData);
            } catch (error) {
                console.log(error)
            }

        }
        getContestEffectData();
    }, [contestEffect])
    return (
        <div className=' rounded-lg bg-slate-100 m-4 p-2 grid grid-cols-1'>
            <div className=' text-left text-slate-600 pl-5 my-4'>Contest Effect: </div>
            {

                contestEffect ?
                    <>

                        <div className=' bg-white rounded-lg p-4 m-3'>
                            {contestEffectDetails && contestEffectDetails.effect_entries[0].effect}
                        </div>
                        <div className=' text-left text-slate-600 pl-5 my-4'>Flavour Text: </div>
                        <div className=' bg-white rounded-lg p-4 m-3'>
                            {contestEffectDetails && contestEffectDetails.flavor_text_entries[0].flavor_text}
                        </div>
                    </>
                    :
                    <div className=' text-yellow-500'> This move does not have contest effect</div>
            }

        </div>
    )
}

export default ContestEffect