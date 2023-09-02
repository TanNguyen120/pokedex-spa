import React from 'react'
import { useDispatch } from 'react-redux';
import { findPokeByID } from '../../../../reduxSlicer/findPokeInfoFlag';
import typeToColor from '../../../../tool/typeColor';
import toTitleCase from '../../../../tool/upperCaseString';
import { Link } from 'react-router-dom';

const QuickInfo = ({ pokemon }) => {
    const dispatch = useDispatch();
    return (
        <div className="bg-slate-300 text-center p-1 mx-8 mt-3 rounded-lg lg:m-3 md:mx-56">
            <h3 className="font-semibold text-base hover:cursor-pointer text-slate-600" onClick={e => {
                dispatch(findPokeByID(pokemon.name))
            }}>#{pokemon.orderInNationalDex} {toTitleCase(pokemon.name)}</h3>
            <div className='bg-slate-300 rounded-lg items-center m-1'>
                <div className='bg-white rounded-lg justify-center flex flex-col lg:flex-row py-2 items-center'>
                    {pokemon.type.map((type, index) => (
                        <Link to={`/t-pokedex/type/${type.type.name}`} className={`${typeToColor(type.type.name)} lg:w-20 lg:h-6 rounded-md text-white text-center text-sm font-semibold border border-indigo-600 m-1 px-3 font-mono hover:cursor-pointer`} key={index}>
                            {type.type.name[0].toUpperCase() + type.type.name.slice(1)}
                        </Link>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default QuickInfo