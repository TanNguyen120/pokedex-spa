import React, { useEffect, useState } from 'react'

const SuggestionRow = ({ moveName, setInputValue, setFindResult }) => {
    const handleFindSingleMove = () => {
        const resultObj = [{
            name: moveName
        }];
        setInputValue(moveName);
        setFindResult(resultObj);
    }
    return (
        <div className=' px-4 capitalize hover:scale-105 hover:underline hover:cursor-pointer hover:text-yellow-600 hover:cursor-pointer' onClick={e => { handleFindSingleMove() }}>
            {moveName}
        </div>
    )
}






const SearchBar = ({ cache, setResult }) => {
    const [inputValue, setInputValue] = useState('');
    const [findResult, setFindResult] = useState([]);

    // Find result from cache base on input value
    useEffect(() => {
        // we will only check for result if text input is more than 2 word
        if (cache.length > 0 && inputValue.length >= 1) {
            // check if user already search the right name if it the right name we close the suggestion div else we filter the result using include and set it to suggestion div
            if (cache.find(element => element.name === inputValue) === undefined) {

                // filter the cache with element that have name includes the search input
                const suggestionResult = cache.filter(moves => moves.name.includes(inputValue));
                setFindResult(suggestionResult)
            }
        } else {
            setFindResult([]);
        }
    }, [inputValue, cache])

    // The function will find in result state if it have any result set the move table base on result else warn about no result found 
    const handleFindMove = () => {
        findResult.length > 0 ? setResult(findResult) : alert('There no such move exist')
        setFindResult([]);
        setInputValue('');
    }
    // When click clear the page will reload
    const handleClearSearch = () => {
        setResult(cache);
        setInputValue('');
    }
    return (
        <div className=" p-6">
            <>
                <div className="max-w-xl">
                    <div className="flex space-x-4">
                        <div className="flex rounded-md overflow-hidden w-full">
                            <input type="text" className="w-full pl-4 rounded-md rounded-r-none" value={inputValue} onChange={e => setInputValue(e.target.value)} />
                            <button className="bg-slate-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md" onClick={e => handleFindMove()}>Find</button>
                        </div>
                        <button className="bg-white px-6 text-lg font-semibold py-4 rounded-md" onClick={e => handleClearSearch()}>Clear</button>
                    </div>
                    <div className=' rounded-lg bg-slate-300 grid grid-cols-1 gap-2 w-8/12'>
                        {
                            findResult.map((element, index) => <SuggestionRow key={index} moveName={element.name} setFindResult={setFindResult} setInputValue={setInputValue} />)
                        }
                    </div>
                </div>
            </>
        </div>
    )
}

export default SearchBar