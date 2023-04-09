import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../component/loadingSpiner';
import EncounterRow from './encounterRow';
import { VscSymbolMethod } from 'react-icons/vsc';
import { MdOutlineDescription } from 'react-icons/md'



const EncounterDetails = () => {
    const [encounterDetails, setEncounterDetails] = useState(null);

    useEffect(() => {
        const getEncounterDetails = async () => {
            const encounterNumber = (await axios.get(`https://pokeapi.co/api/v2/encounter-method/`)).data.count;
            const encounterList = (await axios.get(`https://pokeapi.co/api/v2/encounter-method/?offset=0&limit=${encounterNumber}`)).data;
            const encounterDetailsData = await
                Promise.all(encounterList.results.map(async element => {
                    const contestDetailsRes = (await (axios.get(element.url))).data;
                    // have to make new array out side of set state function
                    return contestDetailsRes
                }))

            setEncounterDetails(encounterDetailsData);
        }

        getEncounterDetails();
    }, [])
    return (
        <div className=' m-2 p-2 ring-2 bg-slate-300 ring-slate-400 rounded-lg'>
            <div className=' font-base font-medium text-left m-4 text-slate-400'>
                Below is the list contain all know method to encounter wild pokémon:
            </div>
            <div className=' bg-slate-200 rounded-lg divide-y '>
                <div className=' bg-slate-100 rounded-lg grid grid-cols-2 divide-x divide-slate-300 gap-2 text-slate-500'>
                    <div className='p-3'> Method Name <VscSymbolMethod className=' inline' /> </div>
                    <div className='p-3'> Description <MdOutlineDescription className=' inline' /></div>
                </div>
                {
                    encounterDetails ? encounterDetails.map(element => <EncounterRow key={element.name} name={element.name} description={element.names} />) : <LoadingSpinner />
                }
            </div>
        </div>
    )
}

export default EncounterDetails