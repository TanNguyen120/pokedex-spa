import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { findPokeByName } from '../../reduxSlicer/findPokeInfoFlag';
import LoadingSpinner from '../../component/loadingSpiner';

const ShapeDetails = ({ shapeName }) => {
    const dispatch = useDispatch();
    const setPokeFlag = (pokeName) => {
        dispatch(findPokeByName(pokeName))
    }
    const [shapeDetails, setshapeDetails] = useState(null);
    useEffect(() => {
        const getshapeatData = async () => {
            const resData = (await (axios.get(`https://pokeapi.co/api/v2/pokemon-shape/${shapeName}`))).data;
            setshapeDetails(resData);
        }

        getshapeatData();
    }, [shapeName])
    return (
        <div className=' bg-white rounded-lg p-2 m-2 grid grid-cols-1'>
            <div className=' text-left m-4 text-xl font-semibold capitalize'>
                {shapeName} Shape
            </div>
            <div className=' text-left m-4 text-base  flex flex-row text-slate-400' >
                Awesome Name:
                {
                    shapeDetails ?
                        <div className=' flex flex-row ml-3 gap-5'>
                            {shapeDetails.awesome_names.map((e, i) =>
                                <div key={i}>{e.awesome_name} </div>)}
                        </div>
                        : <LoadingSpinner />

                }
            </div>
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
                        shapeDetails ? shapeDetails.pokemon_species.map((e, i) =>
                            <tr className=' border-collapse border p-4 border-slate-500 odd:bg-slate-200'
                                key={i} ><th
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
                            :
                            <LoadingSpinner />
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShapeDetails