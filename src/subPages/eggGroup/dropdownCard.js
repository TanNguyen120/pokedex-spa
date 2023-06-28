import axios from 'axios';
import React, { useEffect, useState } from 'react'

const DropdownCard = ({ show, eggGroupName }) => {
    const [eggDetails, setEggDetails] = useState(null);
    useEffect(() => {
        const getData = async () => {
            const resData = (await (axios.get(`https://pokeapi.co/api/v2/egg-group/${eggGroupName}`))).data;
            setEggDetails(resData);
        }
        getData()
    }, [eggGroupName])
    return (
        <div className={show ? "" : "hidden"}>
            <div className=' grid grid-cols-1 bg-slate-100 rounded-lg transition-all ease-in-out duration-500 group-hover:cursor-pointer overflow-hidden'>
                <span className="w-0 h-0 rounded bg-slate-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                {JSON.stringify(eggDetails)}
            </div>
        </div>
    )
}

export default DropdownCard