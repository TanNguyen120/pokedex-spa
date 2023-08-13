import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ImPointRight } from 'react-icons/im';

const GrowthDropDown = ({ url, name }) => {
    const [growthData, setGrowthData] = useState(null);
    useEffect(() => {
        const getResData = async () => {
            const resData = (await (axios.get(url))).data;
            setGrowthData(resData);
        }
        getResData();
    }, [url])

    return (
        <div className=' grid grid-cols-1 text-left capitalize m-6'>
            {
                growthData && <details className="dropdown mb-32">
                    <summary className="m-1 btn hover:cursor-pointer">{name}</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-3/4">
                        <li><span title='The formula used to calculate the rate at which the Pokémon species gains level.'>Formula: </span>{growthData.formula}</li>
                        <li className='py-4'><Link className=' text-blue-500 underline ' to={`/t-pokedex/growth-rate/${name}/pokeList/`}>Pokemon with this growth rate <ImPointRight className='inline' /></Link></li>
                        <li>
                            <table class="table border border-collapse w-full font-normal text-base border-slate-500">
                                <thead className=' bg-slate-300'>
                                    <tr>
                                        <th>Level</th>
                                        <th>EXP need</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        growthData.levels.map((e, i) => <tr className=' border-collapse border p-4 border-slate-500 odd:bg-slate-200' key={i} ><th className='border-collapse border border-slate-500 p-4'>{e.level}</th><th className='border-collapse border-slate-500 border p-4'>{e.experience}</th></tr>)
                                    }
                                </tbody>
                            </table>
                        </li>
                    </ul>
                </details>
            }

            {/* <div classNameName=' rounded-lg bg-slate-50 hidden'>{JSON.stringify(growthData)}</div> */}
        </div>
    )
}

export default GrowthDropDown