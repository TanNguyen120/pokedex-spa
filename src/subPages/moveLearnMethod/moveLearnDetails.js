import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const VersionGroupList = ({ versionGroup }) => {
    return (
        <div className=' grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8'>
            {versionGroup.map((e, i) => <Link key={i} to={`/t-pokedex/version_group/${e.name}`}>{e.name}</Link>)}
        </div>
    )
}



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
            <div ><span className=' text-slate-500'>Method:</span>  {methodDetails ? methodDetails.name : 'loading'} </div>
            <div className='px-3'>
                {description}
            </div>
            <div className='grid grid-cols-1 py-4 mt-2'>
                <div className=' text-slate-500'>Version Group:</div>

                {methodDetails ? <VersionGroupList versionGroup={methodDetails.version_groups} /> : 'loading'}
            </div>
        </div>
    )
}

export default MoveLearnDetails