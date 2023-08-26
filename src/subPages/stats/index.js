import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import statToColor from '../../tool/statToColor';
import statToIcon from '../../tool/statToIcon';
import StatDetails from './statDetails';

const StatBtn = ({ statName, currentStat, setCurretnStat }) => {
    const [bgColor, setBgColor] = useState('');
    const [css, setCss] = useState('');
    useEffect(() => {
        setBgColor(statToColor(statName));
    }, [statName])
    useEffect(() => {
        statName === currentStat ? setCss(' ring ring-slate-600') : setCss('')
    }, [currentStat, statName])
    return (
        <div className={`rounded-lg m-2 border ring-1 hover:cursor-pointer hover:scale-110  border-indigo-600 text-black md:text-sm text-xs ${css} ${bgColor} font-semibold `} onClick={e => setCurretnStat(statName)}>
            <div className='m-3 text-white capitalize'>{statToIcon(statName)} {statName}  </div>
        </div>)
}



// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const StatsNumber = ((await (axios.get(`https://pokeapi.co/api/v2/stat/`))).data).count;
    const Stats = ((await (axios.get(`https://pokeapi.co/api/v2/stat/?offset=0&limit=${StatsNumber}`))).data).results;
    return Stats;
}


const Stats = () => {
    const statList = useLoaderData();
    const [currentStat, setCurretnStat] = useState(statList[0].name);
    return (
        <div className=' bg-whitePaint  min-h-screen p-0 bg-repeat font-serif'>
            <div className='md:container md:mx-auto my-0 pt-5'>
                <div className=' grid md:grid-cols-4 grid-cols-1 border-2 border-slate-600  bg-slate-100 rounded-lg'>
                    <div className=' lg:col-span-3 md:col-span-2 col-span-1 grid grid-cols-1'>
                        <div className=' text-2xl font-semibold py-9 '>
                            Stat
                        </div>
                        <div className=' text-slate-600 text-lg p-4'>

                            A stat (Japanese: 能力 ability) is any of certain numerical values pertaining to each Pokémon. The Pokémon's stats are used in battles.

                            This is short for statistic; in some cases, it has also been named ability, rating, effect, or parameter.
                        </div>
                    </div>
                    <div className=' lg:col-span-1 md:col-span-2 col-span-1'>
                        <div className=' items-center p-4'>
                            <img src='https://www.gamerguides.com/assets/media/17/134/pokemon_usum_421_stats_left.jpg' alt='habitat artwork' className='' />
                            <div className=' text-sm text-slate-500 mt-4'>
                                Stat In Game
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' grid grid-cols-1 bg-slate-200 rounded-lg p-5 my-5 border border-slate-400'>
                    <div className=' flex flex-row flex-wrap gap-4'>

                        {statList.map((e, i) => <StatBtn key={i} currentStat={currentStat} setCurretnStat={setCurretnStat} statName={e.name} />)}
                    </div>
                </div>
                <StatDetails statName={currentStat} />
            </div>
        </div>
    )
}

export { loader };
export default Stats;