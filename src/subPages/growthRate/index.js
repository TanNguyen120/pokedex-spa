import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import GrowthDropDown from './growthDropDown';
import LoadingSpinner from '../../component/loadingSpiner';
import dynamicBG from '../../tool/bgChanger';
// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const growthRateNumber = ((await (axios.get('https://pokeapi.co/api/v2/growth-rate/'))).data).count;
    const growthRate = (await (axios.get(`https://pokeapi.co/api/v2/growth-rate/?offset=0&limit=${growthRateNumber}`))).data;
    return growthRate;
}

const GrowthRate = () => {
    const growthRate = useLoaderData();
    const [bg, setBg] = useState('');
    useEffect(() => {
        setBg(dynamicBG());
    }, [])
    return (
        <div className={' bg-fixed bg-center bg-cover min-h-screen font-serif ' + bg}>
            <div className='lg:container lg:mx-auto md:mx-1'>
                <div className='grid grid-cols-1'>
                    <div className=' grid lg:grid-cols-4 border border-slate-600 bg-slate-300 bg-opacity-80 rounded-lg lg:m-4'>
                        <div className='lg:col-span-4 text-center text-slate-600 text-xl font-semibold'>
                            Growth Rate
                        </div>
                        <div className=' lg:col-span-3 text-left text-lg'>
                            <div className=' p-3 first-letter:ml-5'>
                                If you've played any pokemon game, you'll know about Experience Points. Battle any pokemon and win, and you'll gain a set amount of experience for your pokemon. Get it to a certain point, and you level up. It's simple enough to understand for most people. The concept of battling many enemies to gain enough experience for your characters to level up is very commonly seen in RPG's. Of course, it's more complicated in Pokemon in a few not-so-obvious ways.                            </div>
                            <div className=' p-3 first-letter:ml-5'>
                                Say you just caught a Seviper, and you're training it to battle the Elite Four. By the time you get to the Elite Four, your Seviper is at a lower level than your other pokemon because you feel it's too hard to level up compared to your other pokemon. Why is this? It's because all pokemon have a set level growth rate. You are going to find, once you get to level 100, that your pokemon will have a number like 1,000,000 or 600,000 or in Seviper's case, 1,640,000 in your Experience Gained status. There's three other possible values it can be, and each pokemon is assigned one of them. Of course, these values are named with an adjective describing how fast they level up. Please note that the following numbers are for pokemon at level 100. (from https://www.serebii.net/games/exp.shtml)
                            </div>

                        </div>
                        <div className=' items-center'>
                            <img src='https://archives.bulbagarden.net/media/upload/0/0a/ExpGraphLv100.png' alt='growth exp graph' />
                            <div className=' text-sm text-slate-500 mt-4'>
                                growth exp graph
                            </div>
                        </div>
                    </div>
                    <div
                        className=' grid grid-cols-1 rounded-lg hover:bg-opacity-100 bg-opacity-80 bg-slate-100 p-4 lg:m-4 border border-slate-500'
                    >
                        {growthRate ? growthRate.results.map((e, i) => <GrowthDropDown key={i} name={e.name} url={e.url} />) : <LoadingSpinner />}
                    </div>

                </div>
            </div>
        </div>
    )
}

export { loader };
export default GrowthRate;