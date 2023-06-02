import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const MoveLearnDetails = ({ methodName }) => {
    const [methodDetails, setMethodDetails] = useState(null);
    const [description, setDescription] = useState('');
    const webLanguage = useSelector(state => state.webSettings.language);

    useEffect(() => {
        const getMethodData = async () => {
            const resData = (await (axios.get(`https://pokeapi.co/api/v2/move-learn-method/${methodName}`))).data;
            setMethodDetails(resData);
        }


        getMethodData();
    }, [methodName]);

    useEffect(() => {
        methodDetails && methodDetails.descriptions.forEach(e => {
            if (e.language.name === webLanguage || e.language.name === 'en') {
                setDescription(e.description);
            }
        })

    }, [methodDetails, webLanguage])
    return (
        <div className=' rounded-lg bg-slate-200 m-4 p-4 grid grid-cols-1 text-left'>
            <div className=' text-slate-500'>Method: {methodDetails ? methodDetails.name : 'loading'} </div>
            <div>
                {description}
            </div>
            <div>
                Version Group:

            </div>
        </div>
    )
}

export default MoveLearnDetails