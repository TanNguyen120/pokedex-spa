import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../component/loadingSpiner';
import typeToColor from '../../tool/typeColor';
import { Link, useLoaderData } from 'react-router-dom';
import PokemonTable from '../pokemonTypes/pokemonTable';


// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {
    const pokeTypesData = ((await (axios.get(`https://pokeapi.co/api/v2/type/${params.typeName}`))).data);
    return pokeTypesData;
}

const TypeBtnSimp = ({ typeName }) => {
    const [css, setCss] = useState('');
    useEffect(() => {

        const typeCss = typeToColor(typeName);
        setCss(typeCss);


    }, [typeName]);

    return (
        <Link to={`/t-pokedex/type/${typeName}`} className={`text-lg capitalize px-5 py-2 text-white w-28  ${css} rounded-lg`}>
            {typeName}
        </Link>
    )
}

//********************************************************************************************************************************************************************************************* */

const TypeContent = () => {
    const typeDetails = useLoaderData()
    return (
        <div className=' bg-whiteManmosa  min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto py-3'>
                <div className=' grid grid-cols-1 rounded-lg p-4 bg-slate-400'>
                    <div className=' text-3xl font-semibold text-slate-600 capitalize '>{typeDetails.name} Type</div>
                    <div className=' grid grid-cols-1 bg-slate-200 rounded-lg p-2'>
                        <div className=' text-slate-400 text-2xl text-left ml-5'>Damage Relations</div>
                        <div className=' grid grid-cols-1 md:grid-cols-2  p-8 rounded-lg bg-slate-100'>
                            <div className=' grid grid-cols-1 p-6'>
                                <div className=' text-red-700 text-lg font-medium'>Take Double Damage From: </div>
                                <div className=' flex flex-col gap-4 text-center bg-slate-50 rounded-lg p-4'>
                                    {
                                        typeDetails.damage_relations.double_damage_from.length > 0 ?
                                            typeDetails.damage_relations.double_damage_from.map((e, i) => <TypeBtnSimp key={i} typeName={e.name} />)
                                            :
                                            "None"
                                    }
                                </div>
                            </div>
                            <div className=' grid grid-cols-1 p-6'>
                                <div className=' text-green-700 text-lg font-medium'>Do Double Damage To: </div>
                                <div className=' flex flex-col gap-4 text-center bg-slate-50 rounded-lg p-4'>
                                    {
                                        typeDetails.damage_relations.double_damage_to.length > 0 ?
                                            typeDetails.damage_relations.double_damage_to.map((e, i) => <TypeBtnSimp key={i} typeName={e.name} />)
                                            :
                                            "None"
                                    }
                                </div>
                            </div>
                            <div className=' grid grid-cols-1 p-6'>
                                <div className=' text-green-700 text-lg font-medium'>Take Half Damage From: </div>
                                <div className=' flex flex-col gap-4 text-center bg-slate-50 rounded-lg p-4'>
                                    {
                                        typeDetails.damage_relations.half_damage_from.length > 0 ?
                                            typeDetails.damage_relations.half_damage_from.map((e, i) => <TypeBtnSimp key={i} typeName={e.name} />)
                                            :
                                            "None"
                                    }
                                </div>
                            </div>
                            <div className=' grid grid-cols-1 p-6'>
                                <div className=' text-red-700 text-lg font-medium'>Do Half Damage To: </div>
                                <div className=' flex flex-col gap-4 text-center bg-slate-50 rounded-lg p-4'>
                                    {
                                        typeDetails.damage_relations.half_damage_to.length > 0 ?
                                            typeDetails.damage_relations.half_damage_to.map((e, i) => <TypeBtnSimp key={i} typeName={e.name} />)
                                            :
                                            "None"
                                    }
                                </div>
                            </div>
                            <div className=' grid grid-cols-1 p-6'>
                                <div className=' text-green-700 text-lg font-medium'>Take No Damage From: </div>
                                <div className=' flex flex-col gap-4 text-center bg-slate-50 rounded-lg p-4'>
                                    {
                                        typeDetails.damage_relations.no_damage_from.length > 0 ?
                                            typeDetails.damage_relations.no_damage_from.map((e, i) => <TypeBtnSimp key={i} typeName={e.name} />)
                                            :
                                            "None"
                                    }
                                </div>
                            </div>
                            <div className=' grid grid-cols-1 p-6'>
                                <div className=' text-red-700 text-lg font-medium'>Do No Damage To: </div>
                                <div className=' flex flex-col gap-4 text-center bg-slate-50 rounded-lg p-4'>
                                    {
                                        typeDetails.damage_relations.no_damage_to.length > 0 ?
                                            typeDetails.damage_relations.no_damage_to.map((e, i) => <TypeBtnSimp key={i} typeName={e.name} />)
                                            :
                                            "None"
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' grid grid-cols-1 bg-slate-200 rounded-lg p-2 my-2'>
                        <div className=' text-slate-400 text-2xl text-left ml-5'>Generation Indices</div>
                        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   p-8 rounded-lg bg-slate-100'>
                            <div className=' flex flex-row rounded-lg bg-slate-100  m-2 items-baseline'>
                                <div className=' text-lg text-slate-500'>Debut Gen: </div>
                                <Link className=' ml-4 capitalize ' to={`/t-pokedex/generation/${typeDetails.generation.name}`}>{typeDetails.generation.name}</Link>
                            </div>
                            <div className=' flex flex-row rounded-lg bg-slate-100  m-2 items-baseline'>
                                <div className=' text-lg text-slate-500'>Appears in: </div>
                                <div className=' grid grid-cols-1 gap-3'>
                                    {
                                        typeDetails.game_indices.map((e, i) => <Link className=' hover:bg-slate-300 ml-4 capitalize ' to={`/t-pokedex/generations/${e.generation.name}`}>{e.generation.name}</Link>)
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className=' grid grid-cols-1 bg-slate-200 rounded-lg p-2 my-2'>
                        <div className=' text-slate-400 text-2xl text-left ml-5'>{typeDetails.name} Type PokéMon: </div>
                        <div className=' grid grid-cols-1  p-8 rounded-lg bg-slate-100'>
                            <PokemonTable pokeList={typeDetails.pokemon} />
                        </div>
                    </div>
                    <div className=' grid grid-cols-1 bg-slate-200 rounded-lg p-2 my-2'>
                        <div className=' text-slate-400 text-2xl text-left ml-5'>Move type</div>
                        <div className=' grid grid-cols-1  p-8 rounded-lg bg-slate-100'>
                            <div className=' flex flex-row rounded-lg bg-slate-100  m-2 items-baseline'>
                                <div className=' text-lg text-slate-500'>Damage Class: </div>
                                <Link className=' ml-4 capitalize ' to={`/t-pokedex/move-damage-class/`}>{typeDetails.move_damage_class.name}</Link>
                            </div>
                            <div className=' grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4'>
                                {
                                    typeDetails.moves.map((e, i) => <Link className='text-left bg-slate-50 rounded-lg p-2 hover:bg-slate-200 hover:scale-110 hover:cursor-pointer' key={i} to={`/t-pokedex/move/${e.name}`}>{e.name}</Link>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>)

}

//********************************************************************************************************************************************************************************************* */


export { loader }
export default TypeContent;