import axios from 'axios';
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { BsEmojiAngry, BsEmojiSmile } from 'react-icons/bs';
import { GiBulletBill } from 'react-icons/gi'
const loader = async ({ params }) => {
    const natureDetails = ((await (axios.get(`https://pokeapi.co/api/v2/nature/${params.natureName}`))).data);

    return natureDetails;
}


const NatureDetails = () => {
    const natureDetails = useLoaderData();
    return (
        <div className=' bg-whiteCell min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto min-h-screen'>
                <div className='grid grid-cols-1 bg-slate-100 rounded-lg p-4 text-left min-h-screen'>
                    <div className=' text-4xl font-semibold capitalize text-center'>{natureDetails.name} nature</div>
                    <div className='text-red-400 font-semibold'>Decrease Stat <AiOutlineArrowDown className='inline' />: {natureDetails.decreased_stat ? natureDetails.decreased_stat.name : 'none'}</div>
                    <div className='text-green-400 font-semibold'>Increase Stat <AiOutlineArrowUp className='inline' />: {natureDetails.increased_stat ? natureDetails.increased_stat.name : 'none'}</div>
                    <div className='text-red-400 font-semibold'>Hate Flavor <BsEmojiAngry className='inline' />: {natureDetails.hates_flavor ? <Link to={`/t-pokedex/berries/flavor/${natureDetails.hates_flavor.name}`}>  {natureDetails.hates_flavor.name} </Link> : 'none'}</div>
                    <div className='text-green-400 font-semibold'>Like Flavor <BsEmojiSmile className='inline' />: {natureDetails.like_flavor ? <Link to={`/t-pokedex/berries/flavor/${natureDetails.like_flavor.name}`}>  {natureDetails.like_flavor.name} </Link> : 'none'}</div>
                    <div className=' capitalize py-3 font-semibold text-lg hover:cursor-help'
                        title='A list of battle styles and how likely a Pokémon with this nature is to use them in the Battle Palace or Battle Tent.'
                    ><GiBulletBill className='inline' /> move battle Style preferences: </div>
                    <table class="table border border-collapse w-full font-normal text-base border-slate-500">
                        <thead className=' bg-slate-300 capitalize'>
                            <tr className=' border-collapse border'>
                                <th title='Chance of using the move, in percent, if HP is under one half.'
                                    className=' hover:cursor-help border-collapse border border-slate-500'>high hp preference</th>
                                <th title='Chance of using the move, in percent, if HP is over one half.'
                                    className=' hover:cursor-help border-collapse border border-slate-500'>low hp preference</th>
                                <th title='The move battle style.'
                                    className='hover:cursor-help border-collapse border border-slate-500'>move battle style</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                natureDetails
                                    .move_battle_style_preferences
                                    .map((e, i) =>
                                        <tr
                                            className=' border-collapse border p-4 border-slate-500 odd:bg-slate-200'
                                            key={i} >
                                            <th
                                                className='border-collapse border border-slate-500 p-4'>{e.high_hp_preference}
                                            </th>
                                            <th
                                                className='border-collapse border-slate-500 border p-4'>{e.low_hp_preference}
                                            </th>
                                            <th
                                                className='border-collapse border-slate-500 border p-4'>{e.move_battle_style.name}
                                            </th>
                                        </tr>)
                            }
                        </tbody>
                    </table>
                    <br></br>
                    <div className=' capitalize py-3 font-semibold text-lg hover:cursor-help'
                        title='A list of Pokéathlon stats this nature effects and how much it effects them.'
                    ><GiBulletBill className='inline' /> pokeathlon stat changes: </div>
                    <table class="table border border-collapse w-full font-normal text-base border-slate-500">
                        <thead className=' bg-slate-300 capitalize'>
                            <tr className=' border-collapse border'>
                                <th className=' border-collapse border border-slate-500'>pokeathlon stat</th>
                                <th className=' border-collapse border border-slate-500'>max change</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                natureDetails
                                    .pokeathlon_stat_changes
                                    .map((e, i) =>
                                        <tr
                                            className=' border-collapse border p-4 border-slate-500 odd:bg-slate-200'
                                            key={i} >
                                            <th
                                                className='border-collapse border border-slate-500 p-4'>{e.pokeathlon_stat.name}
                                            </th>
                                            <th
                                                className='border-collapse border-slate-500 border p-4'>{e.max_change}
                                            </th>

                                        </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export { loader }
export default NatureDetails