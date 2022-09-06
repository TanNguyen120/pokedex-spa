import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios';
import { setResultValue } from "../../reduxSlicer/homeResult"
function SearchResult() {
    const results = useSelector((state) => state.homeResult.value);
    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon').then(
            res => {
                console.log(JSON.stringify(res));
                dispatch(setResultValue(
                    res
                ))
            }
        );
    }, [])
    return (
        <div>SearchResult
            <div>
                {
                    JSON.stringify(results)
                }
            </div>
        </div>

    )
}

export default SearchResult