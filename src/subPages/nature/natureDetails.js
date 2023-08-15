import axios from 'axios';
import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { BsEmojiAngry, BsEmojiSmile } from 'react-icons/bs'
const loader = async ({ params }) => {
    const natureDetails = ((await (axios.get(`https://pokeapi.co/api/v2/nature/${params.natureName}`))).data);

    return natureDetails;
}


const NatureDetails = () => {
    const natureDetails = useLoaderData();
    return (
        <div className=' bg-whiteCell min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1 bg-slate-100 rounded-lg p-4 text-left'>
                    <div className=' text-4xl font-semibold capitalize text-center'>{natureDetails.name} nature</div>
                    <div className='text-red-400'>Decrease Stat <AiOutlineArrowDown className='inline' />: {natureDetails.decreased_stat ? natureDetails.decreased_stat.name : 'none'}</div>
                    <div className='text-green-400'>Increase Stat <AiOutlineArrowUp className='inline' />: {natureDetails.increased_stat ? natureDetails.increased_stat.name : 'none'}</div>
                    <div className=''>Hate Flavor <BsEmojiAngry className='inline' />: {natureDetails.hates_flavor ? <Link to={`/t-pokedex/berries/flavor/${natureDetails.hates_flavor.name}`}>  {natureDetails.hates_flavor.name} </Link> : 'none'}</div>
                    <div className=''>Like Flavor <BsEmojiSmile className='inline' />: {natureDetails.like_flavor ? <Link to={`/t-pokedex/berries/flavor/${natureDetails.like_flavor.name}`}>  {natureDetails.like_flavor.name} </Link> : 'none'}</div>

                </div>
            </div>
        </div>

    )
}

export { loader }
export default NatureDetails