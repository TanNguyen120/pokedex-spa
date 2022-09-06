import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setResultValue } from "../../reduxSlicer/homeResult"
function SearchResult() {
    const results = useSelector((state) => state.homeResult.value)
    return (
        <div>SearchResult
            <div>
                {
                    results
                }
            </div>
        </div>

    )
}

export default SearchResult