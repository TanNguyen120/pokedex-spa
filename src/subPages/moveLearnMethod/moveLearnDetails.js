import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MoveLearnDetails = ({ methodName }) => {
    const [methodDetails, setMethodDetails] = useState(null);
    useEffect(() => {
        const getMethodData = async () => {
            const resData = (await (axios.get(`https://pokeapi.co/api/v2/move-learn-method/${methodName}`))).data;
            setMethodDetails(resData);
        }

        getMethodData();
    })
    return (
        <div>{JSON.stringify(methodDetails)}</div>
    )
}

export default MoveLearnDetails