import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../component/loadingSpiner';
import { Link } from 'react-router-dom';

const StatDetails = ({ statName }) => {
    const [statDetails, setStatDetails] = useState(null);
    useEffect(() => {
        const getStatData = async () => {
            const resData = (await (axios.get(`https://pokeapi.co/api/v2/stat/${statName}`))).data;
            setStatDetails(resData);
        }
        getStatData();
    }, [statName])
    return (
        <div className=' rounded-lg bg-slate-200 p-5 border border-slate-600 grid grid-cols-1'>
            <div className=' text-slate-400 text-xl font-semibold text-left m-5 capitalize'> {statDetails ? statDetails.name : <LoadingSpinner />} </div>
            <div className=' text-slate-400 text-base font-semibold text-left m-5 capitalize hover:cursor-help' title=
                'The class of damage this stat is directly related to.'> Move Damage Class: <Link className=' text-black ml-4'>
                    {statDetails ?
                        statDetails.move_damage_class ?
                            statDetails.move_damage_class.name
                            : 'none'
                        : <LoadingSpinner />}  </Link>
            </div>
            <div className='text-slate-400 text-base font-semibold text-left m-5 capitalize hover:cursor-help'
                title='Whether this stat only exists within a battle.'
            >
                Battle Move: <span className=' text-black ml-4'>{statDetails ? statDetails.is_battle_only ? 'Yes' : 'No' : <LoadingSpinner />}</span>
            </div>

        </div>
    )
}

export default StatDetails