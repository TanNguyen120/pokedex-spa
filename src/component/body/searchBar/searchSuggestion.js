import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { findPokeByName } from '../../../reduxSlicer/findPokeInfoFlag';
import { setInput } from '../../../reduxSlicer/searchBarState';

const SearchSuggestion = ({ cache, searchInput }) => {
    const dispatch = useDispatch()
    const [suggestion, setSuggestion] = useState([]);

    // every time the search input change we will check if it match some thing in cache
    useEffect(() => {
        if (cache.length > 0 && searchInput.text.length >= 2) {
            // check if user already search the right name
            if (cache.find(element => element.name === searchInput.text) === undefined) {

                // filter the cache with element that have name includes the search input
                const suggestionResult = cache.filter(pokemon => pokemon.name.includes(searchInput.text));
                setSuggestion(suggestionResult)
            }
        } else {
            setSuggestion([]);
        }
    }, [searchInput]);
    return (
        <div className='bg-white font-mono text-lg ml-9 grid grid-cols-1 rounded-sm divide-y divide-neutral-400 md:w-80 w-32'>
            {
                suggestion.map(
                    element => <div
                        key={element.name}
                        className=" hover:bg-slate-400 hover:cursor-pointer text-left font-semibold pl-4 px-2"
                        onClick={e => {
                            dispatch(findPokeByName(element.name));
                            dispatch(setInput(element.name))
                            setSuggestion([]);
                        }}
                    >
                        {element.name}
                    </div>)
            }
        </div>
    )
}

export default SearchSuggestion