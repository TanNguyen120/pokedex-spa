import axios from 'axios';
import React, { useEffect, useState } from 'react'
import EnounterTable from './enounterTable';
import LoadingSpinner from '../../component/loadingSpiner';

const PalparkDetail = ({ palparkName }) => {
    const [palparkDetails, setPalparkDetails] = useState(null);
    useEffect(() => {
        const getPalparkData = async () => {
            const resData = (await (axios.get(`https://pokeapi.co/api/v2/pal-park-area/${palparkName}`))).data
            setPalparkDetails(resData)
        }
        getPalparkData();
    }, [palparkName])
    return (
        <div className=' rounded-lg bg-slate-100 p-4 m-4 grid grid-cols-1'>
            <div className=' text-left text-2xl text-slate-700 capitalize border-b border-slate-600'>
                {palparkDetails && palparkDetails.name} Area
            </div>
            {
                palparkDetails ? <EnounterTable encounterTable={palparkDetails.pokemon_encounters} /> : <LoadingSpinner />
            }
        </div>
    )
}

export default PalparkDetail