import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ImPointRight } from 'react-icons/im';

const PokeathlonStatDropDown = ({ url, name }) => {
    const [pokeathlonStatData, setpokeathlonStatData] = useState(null);
    useEffect(() => {
        const getResData = async () => {
            const resData = (await (axios.get(url))).data;
            setpokeathlonStatData(resData);
        }
        getResData();
    }, [url])

    return (
        <div className=' grid grid-cols-1 text-left capitalize m-6'>
            {
                pokeathlonStatData && <details className="dropdown mb-32">
                    <summary className="m-1 btn hover:cursor-pointer">{name}</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-3/4">
                        <li className=' grid grid-cols-2 gap-5'>
                            <div className=' grid grid-cols-1 '>
                                <div className=' text-lg font-semibold text-red-500'>Decrease Stat</div>
                                <table class="table border border-collapse w-full font-normal text-base border-slate-500">
                                    <thead className=' bg-slate-300'>
                                        <tr>
                                            <th>Nature</th>
                                            <th>Max Change</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            pokeathlonStatData
                                                .affecting_natures.decrease
                                                .map((e, i) =>
                                                    <tr
                                                        className=' border-collapse border p-4 border-slate-500 odd:bg-slate-200' key={i} >
                                                        <th className='border-collapse border border-slate-500 p-4'>{e.nature.name}</th>
                                                        <th className='border-collapse border-slate-500 border p-4'>{e.max_change}</th>
                                                    </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                            {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
                            <div className=' grid grid-cols-1 '>
                                <div className=' text-lg font-semibold text-green-600'>Increase Stat</div>
                                <table class="table border border-collapse w-full font-normal text-base border-slate-500">
                                    <thead className=' bg-slate-300'>
                                        <tr>
                                            <th>Nature</th>
                                            <th>Max Change</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            pokeathlonStatData
                                                .affecting_natures.increase
                                                .map((e, i) =>
                                                    <tr
                                                        className=' border-collapse border p-4 border-slate-500 odd:bg-slate-200' key={i} >
                                                        <th className='border-collapse border border-slate-500 p-4'>{e.nature.name}</th>
                                                        <th className='border-collapse border-slate-500 border p-4'>{e.max_change}</th>
                                                    </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </li>
                    </ul>
                </details>
            }

            {/* <div classNameName=' rounded-lg bg-slate-50 hidden'>{JSON.stringify(pokeathlonStatData)}</div> */}
        </div>
    )
}

export default PokeathlonStatDropDown