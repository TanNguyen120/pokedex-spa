import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../component/loadingSpiner';

import ContestEntryDetails from './contestEntryDetails';

const SuperContestEntryText = () => {
    const [effectText, setEffectText] = useState(null);

    useEffect(() => {
        const getEntryText = async () => {
            const effectNumber = (await axios.get('https://pokeapi.co/api/v2/super-contest-effect/')).data.count;
            const urlLists = (await axios.get(`https://pokeapi.co/api/v2/super-contest-effect/?limit=${effectNumber}&offset=0`)).data;

            const getContestFlavor = await
                Promise.all(urlLists.results.map(async element => {
                    const contestDetailsRes = (await (axios.get(element.url))).data;
                    // have to make new array out side of set state function
                    return contestDetailsRes
                }))
            setEffectText(getContestFlavor)
            // try {
            //     await urlLists.results.forEach(async element => {
            //         const entryData = (await axios.get(element.url)).data;
            //         effectResult.push(entryData);
            //     });
            // } catch (error) {
            //     console.log(error);
            // }
            // return effectResult;
        }
        // const setStateData = async () => {
        //     const apiResult = await getEntryText();
        //     setEffectText(apiResult)
        // }

        getEntryText();
    }, [])
    return (
        <div className=' m-2 rounded-lg bg-slate-300 ring-2 ring-slate-400 p-3'>
            <div className=' m-4 text-lg font-semibold'>
                In Super Contest Pokemon Moves Have one of these effect as List Below:
            </div>

            {
                effectText ? effectText.map((element, index) => <ContestEntryDetails entryRow={element} key={index} />) : <LoadingSpinner />
            }
        </div>
    )
}

export default SuperContestEntryText