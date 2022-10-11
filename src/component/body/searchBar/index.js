import React, { useEffect, useState } from 'react'
import { TbPokeball } from 'react-icons/tb'
import { FaRandom } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { setInput } from '../../../reduxSlicer/searchBarState'
import { toggleFlag } from '../../../reduxSlicer/reloadFlag'
import { findPokeByID } from '../../../reduxSlicer/findPokeInfoFlag'
import axios from 'axios'

const SearchBar = () => {
    const searchInput = useSelector((state) => state.searchInput);
    const numberOfMon = useSelector((state) => state.pokemonCount);
    const dispatch = useDispatch();
    // handle search bar event
    const handleSearch = () => {
        // check if user search by id
        if (!isNaN(searchInput.text)) {
            if (searchInput.text > numberOfMon.value) {
                alert("There Are Only " + numberOfMon.value + " pokemon in database")
            }
            else {

                dispatch(findPokeByID(searchInput.text))
            }
        }
    }

    //========================================================================================================================================================
    // because there just 1300 pokemon so we can do some name cache for name search
    const [cache, setCache] = useState([]);

    const getCacheData = async (numberOfPokeMon) => {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${numberOfPokeMon}&offset=0`)
        setCache(res.data.results);
    }

    useEffect(() => {
        getCacheData(numberOfMon.value);
    }, [numberOfMon])



    //========================================================================================================================================================
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-3 md:py-10 py-3 m-5 md:px-32 px-6">
            <div className="md:col-span-2">
                <form >
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300 inline">Search For  <TbPokeball /> </label>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input type="search" id="default-search"
                            onChange={e => {
                                dispatch(setInput(e.target.value));
                            }}
                            className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-full border border-gray-300 focus:ring-red-500 focus:border-red-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500" placeholder="Search with name or number in pokedex" required />
                        <button
                            onClick={e => {
                                e.preventDefault();
                                handleSearch();
                            }}
                            className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 inline">
                            Search
                        </button>
                    </div>
                </form>
            </div>
            <button className="bg-slate-200 hover:bg-slate-300 focus:ring-4 focus:outline-none border border-gray-500  rounded-full font-medium md:text-lg text-xl font-mono md:col-start-4 my-6 md:my-0"
                onClick={(e) => {
                    dispatch(dispatch(toggleFlag()));
                }}>
                Random Set <FaRandom className='inline' />
            </button>

        </div>
    )
}

export default SearchBar