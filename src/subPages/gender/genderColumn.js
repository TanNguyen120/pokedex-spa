import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../component/loadingSpiner';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findPokeByName } from '../../reduxSlicer/findPokeInfoFlag';

const PokeRow = ({ pokeGender }) => {
    const pictureMode = useSelector((state) => state.webSettings.pictureMode);
    const dispatch = useDispatch();
    const setPokeFlag = (pokeName) => {
        dispatch(findPokeByName(pokeName))
    }
    return (
        <tr className=' border-collapse border border-slate-500 even:bg-slate-200'>
            <td className={' capitalize p-3 border-slate-500'}>
                <Link onClick={event => setPokeFlag(pokeGender.pokemon_species.name)} to={`/t-pokedex/pokemon/${pokeGender.pokemon_species.name}`} className=' hover:cursor-pointer hover:underline hover:text-blue-500'>{pokeGender.pokemon_species.name}</Link></td>
            <td className=' pl-5 p-3 border-slate-500' >
                <Link onClick={event => setPokeFlag(pokeGender.pokemon_species.name)} to={`/t-pokedex/pokemon/${pokeGender.pokemon_species.name}`} className=' text-center'>
                    <img class=' w-12 h-12' src={pictureMode === 'sprite' ? `https://img.pokemondb.net/sprites/sword-shield/icon/${pokeGender.pokemon_species.name}.png` : `https://img.pokemondb.net/artwork/large/${pokeGender.pokemon_species.name}.jpg`} alt={pokeGender.pokemon_species.name} className='h-24 w-28 ' />
                </Link>
            </td>
            <td className='border-slate-500'>
                {pokeGender.rate}
            </td>
        </tr>
    )
}


const GenderColumn = ({ genderLink, name }) => {
    const [genderDetails, setGenderDetails] = useState(null);
    const [genderColor, setGenderColor] = useState('');
    const [isExpand, setIsExpand] = useState(false);



    useEffect(() => {
        switch (name) {
            case "male":
                setGenderColor(' bg-blue-400')
                break;
            case "female":
                setGenderColor(' bg-pink-400')
                break;
            default:
                setGenderColor(' bg-slate-600')
                break;
        }
    }, [name])

    useEffect(() => {
        const getDetailsData = async () => {
            const resData = (await (axios.get(genderLink))).data;
            setGenderDetails(resData);
        }
        getDetailsData()
    }, [genderLink])
    return (
        <div className=' flex flex-col items-start w-full px-6 bg-slate-50 rounded-lg'>
            <div className=' flex flex-row mb-5'>
                <div>Gender: </div>
                <div className={` ml-4 text-white rounded-lg py-2 px-4 border border-slate-500 capitalize my-2` + genderColor}>{name}</div>
            </div>
            <table class="table w-full">
                <thead className=' bg-slate-200 border border-collapse border-slate-500'>
                    <tr>
                        <th>Pokémon</th>
                        <th>Sprite</th>
                        <th>Ratio</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        genderDetails ? genderDetails.pokemon_species_details.map((e, i) => <PokeRow pokeGender={e} key={i} />) : <LoadingSpinner />
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GenderColumn