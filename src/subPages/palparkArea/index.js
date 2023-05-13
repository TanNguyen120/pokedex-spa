import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PalparkDropdown from './palparkDropdown';
import LoadingSpinner from '../../component/loadingSpiner';
import PalparkDetail from './palparkDetail';





const PalparkArea = () => {
    const [palparkList, setPalparkList] = useState(null);
    const [currentPalpark, setCurrentPalpark] = useState(null);
    const handelPalParkChoose = (palparkName) => {
        setCurrentPalpark(palparkName);
    }
    useEffect(() => {
        const getPalparkList = async () => {
            const palParkList = (await (axios.get(`https://pokeapi.co/api/v2/pal-park-area/`))).data
            setPalparkList(palParkList.results);
            const currPalPark = palParkList.results[0];
            setCurrentPalpark(currPalPark.name);
        }
        getPalparkList();
    }, [])
    return (
        <div className=' bg-whiteMoonBg bg-scroll min-h-screen   font-serif'>
            <div className='md:container md:mx-auto'>
                <div className=' grid grid-cols-1 rounded-lg bg-slate-200'>
                    <div className=' font-semibold text-lg text-slate-400'>Palpark Area</div>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>
                        <div className='border border-slate-300 rounded-lg float-right m-1 p-1 text-slate-400'>
                            <img src='https://www.serebii.net/heartgoldsoulsilver/palpark.png' alt='palpark in Heart Gold' className='' />
                            Palpark in Heart Gold
                        </div>
                        <p className='text-lg font-medium first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                                        first-letter:mr-3 first-letter:float-left'>
                            Pal Park (Japanese: パルパーク Pal Park) is a special Pokémon preserve present in the five Generation IV core series games, located at the east end of Route 221 in Sinnoh and in Fuchsia City in place of the Safari Zone in Kanto. In Kanto, after the warden closed the Safari Zone, his son opened Pal Park in its place.

                            According to Professor Oak, Pal Park attracts Pokémon from other regions.

                            In Pokémon Brilliant Diamond and Shining Pearl, Pal Park is replaced with Ramanas Park.
                        </p>
                    </div>
                    <div className='grid grid-cols-2'>
                        {palparkList ? <PalparkDropdown palparkList={palparkList} setCurrentPalpark={handelPalParkChoose} /> : <LoadingSpinner />}
                    </div>
                    {currentPalpark ? <PalparkDetail palparkName={currentPalpark} /> : <LoadingSpinner />}
                </div>
            </div>
        </div>
    )
}

export default PalparkArea