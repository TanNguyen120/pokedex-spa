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
            {
                statDetails ?
                    <div className='grid grid-cols-1'>
                        <div className=' text-lg font-semibold text-left grid grid-cols-1'>
                            <details className="dropdown mb-32">
                                <summary className="m-1 btn hover:cursor-pointer text-slate-500">Affecting Moves</summary>
                                <ul className="p-2 shadow menu dropdown-content  bg-base-100 rounded-box w-3/4">
                                    <li className=' grid grid-cols-2 gap-5'>
                                        <div className=' grid grid-cols-1 '>
                                            <div className=' text-lg font-semibold text-red-500'>Decrease Stat</div>
                                            <table class="table border border-collapse w-full font-normal text-base border-slate-500">
                                                <thead className=' bg-slate-300'>
                                                    <tr>
                                                        <th>Move</th>
                                                        <th>Change</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        statDetails
                                                            .affecting_moves.decrease
                                                            .map((e, i) =>
                                                                <tr
                                                                    className=' border-collapse border p-4 border-slate-500 odd:bg-slate-200' key={i} >
                                                                    <th className='border-collapse border border-slate-500 p-4'><Link to={`/t-pokedex/move/${e.move.name}`}>{e.move.name} </Link> </th>
                                                                    <th className='border-collapse border-slate-500 border p-4'>{e.change}</th>
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
                                                        <th>Move</th>
                                                        <th>Change</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        statDetails
                                                            .affecting_moves.increase
                                                            .map((e, i) =>
                                                                <tr
                                                                    className=' border-collapse border p-4 border-slate-500 odd:bg-slate-200' key={i} >
                                                                    <th className='border-collapse border border-slate-500 p-4'><Link to={`/t-pokedex/move/${e.move.name}`}>{e.move.name} </Link> </th>
                                                                    <th className='border-collapse border-slate-500 border p-4'>{e.change}</th>
                                                                </tr>)
                                                    }
                                                </tbody>
                                            </table>
                                        </div>
                                    </li>
                                </ul>
                            </details>
                            <details className="dropdown mb-32">
                                <summary className="m-1 btn hover:cursor-pointer text-slate-500">Affecting Nature</summary>
                                <ul className="p-2 shadow menu dropdown-content  bg-base-100 rounded-box w-3/4">
                                    <li className=' grid grid-cols-2 gap-5'>
                                        <div className=' grid grid-cols-1 '>
                                            <div className=' text-lg font-semibold text-red-500'>Decrease Stat</div>
                                            <div className=' grid grid-cols-1'>
                                                {
                                                    statDetails.affecting_natures.decrease.map((e, i) => <Link key={i} to={`/t-pokedex/nature/${e.name}`}>{e.name}</Link>)
                                                }
                                            </div>
                                        </div>
                                        {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
                                        <div className=' grid grid-cols-1 '>
                                            <div className=' text-lg font-semibold text-green-600'>Increase Stat</div>
                                            <div className=' grid grid-cols-1'>
                                                {
                                                    statDetails.affecting_natures.increase.map((e, i) => <Link key={i} to={`/t-pokedex/nature/${e.name}`}>{e.name}</Link>)
                                                }
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </details>
                        </div>
                    </div>
                    :
                    <LoadingSpinner />
            }

        </div>
    )
}

export default StatDetails