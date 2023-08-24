import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import colorToBg from '../../tool/colorToBg';
import { useDispatch } from 'react-redux';
import { findPokeByName } from '../../reduxSlicer/findPokeInfoFlag';



// loader function later will be call in the router 
const loader = async ({ params }) => {
    const PokeColorList = ((await (axios.get(`https://pokeapi.co/api/v2/pokemon-color/${params.colorName}`))).data);
    return PokeColorList;
}


const PokeColorDetails = () => {
    const [cssColor, setCssColor] = useState('');
    const colorDetails = useLoaderData();
    const dispatch = useDispatch();
    const setPokeFlag = (pokeName) => {
        dispatch(findPokeByName(pokeName));
    }
    useEffect(() => {
        const css = colorToBg(colorDetails.name);
        setCssColor(css);
    }, [colorDetails])
    return (
        <div className=' bg-colorfulAbstract  min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className=' grid grid-cols-1 gap-6'>
                    <div className={`mt-4 py-3 px-4 text-xl text-white font-semibold ${cssColor} mx-auto w-1/4 rounded-lg`}>{colorDetails.name}</div>
                    <div className=' rounded-lg m-4 p-5 bg-slate-100 border border-slate-500 grid grid-cols-1'>
                        <div className=' text-left text-lg font-semibold '>Pokemon with {colorDetails.name} color:</div>
                        <div>
                            <table class="table border border-collapse w-full font-normal text-base border-slate-500">
                                <thead className=' bg-slate-300'>
                                    <tr>
                                        <th>Pokemon</th>
                                        <th>Sprite</th>
                                        <th>Draw</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        colorDetails.pokemon_species.map((e, i) =>
                                            <tr className=' border-collapse border p-4 border-slate-500 odd:bg-slate-200'
                                                key={i} >
                                                <th
                                                    className='border-collapse border border-slate-500 p-4 capitalize'>
                                                    <Link to={`/t-pokedex/pokemon/${e.name}`} onClick={event => setPokeFlag(e.name)}>{e.name}</Link>
                                                </th>
                                                <th
                                                    className='border-collapse border-slate-500 border p-4'>
                                                    <img className=' w-16 h-16' src={`https://img.pokemondb.net/sprites/sword-shield/icon/${e.name}.png`} alt='pokeSprite' />
                                                </th>
                                                <th
                                                    className='border-collapse border-slate-500 border p-4'>
                                                    <img src={`https://img.pokemondb.net/artwork/large/${e.name}.jpg`} alt='pokeDraw' className=' h-16' />
                                                </th>
                                            </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader };
export default PokeColorDetails;