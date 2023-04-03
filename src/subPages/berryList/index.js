import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ListBerries from './list';

const BerriesList = () => {
    const [berriesList, setBerriesList] = useState([]);

    useEffect(() => {
        const getBerriesList = async () => {
            const beriesNumber = (await axios.get(`https://pokeapi.co/api/v2/berry/`)).data.count;
            const berriesList = (await axios.get(`https://pokeapi.co/api/v2/berry/?offset=0&limit=${beriesNumber}`)).data.results;
            setBerriesList(berriesList);
        }
        getBerriesList();
    }, [])
    return (
        <div className=' bg-blue-abstract bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>
                        <div className='border border-slate-300 rounded-lg float-right m-1 p-1 text-slate-500'>
                            <img src='https://static.wikia.nocookie.net/pokemon/images/5/52/Berry_Basket.png' alt='berry in anime' className='' />
                            Berry Appear In Anime
                        </div>
                        <p className='text-lg font-medium first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                                        first-letter:mr-3 first-letter:float-left'>
                            Berries (Japanese: きのみ Tree Fruit) are small, juicy, fleshy fruit. As in the real world, a large variety exists in the Pokémon world, with a large range of flavors and effects. First found in the Generation II games, many Berries have since become critical held items in battle, where their various effects include HP and status condition restoration, stat enhancement, and even damage negation.
                        </p>
                    </div>
                    <ListBerries berriesList={berriesList} />
                </div>
            </div>
        </div>

    )
}

export default BerriesList