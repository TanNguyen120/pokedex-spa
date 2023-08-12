import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
            <details className="dropdown mb-32">
                <summary className="m-1 btn hover:cursor-pointer">{name}</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-3/4">
                    <li><span title='The formula used to calculate the rate at which the Pokémon species gains level.'>Formula: </span>{growthData.formula}</li>
                    <li>
                        <table class="table-auto">
                            <thead>
                                <tr>
                                    <th>Level</th>
                                    <th>EXP need</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                    <td>Malcolm Lockyer</td>
                                </tr>
                                {
                                    growthData.levels.map((e, i) => <tr key={i} ><th>e.level</th><th>{e.experience}</th></tr>)
                                }
                            </tbody>
                        </table>
                    </li>
                </ul>
            </details>
            {/* <div classNameName=' rounded-lg bg-slate-50 hidden'>{JSON.stringify(growthData)}</div> */}
        </div>
    )
}

export default GrowthDropDown