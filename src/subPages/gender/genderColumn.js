import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GenderColumn = ({ genderLink, name }) => {
    const [genderDetails, setGenderDetails] = useState(null);
    useEffect(() => {
        const getDetailsData = async () => {
            const resData = (await (axios.get(genderLink))).data;
            setGenderDetails(resData);
        }
        getDetailsData()
    }, [genderLink])
    return (
        <div className=' flex flex-col items-start'>
            <div className=' flex flex-row'>
                <div>Gender: </div>
                <div>{name}</div>
            </div>
            {JSON.stringify(genderDetails)}
        </div>
    )
}

export default GenderColumn