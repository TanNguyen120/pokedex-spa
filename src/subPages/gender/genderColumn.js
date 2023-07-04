import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GenderColumn = ({ genderLink }) => {
    const [genderDetails, setGenderDetails] = useState(null);
    useEffect(() => {
        const getDetailsData = async () => {
            const resData = (await (axios.get(genderLink))).data;
            setGenderDetails(resData);
        }
        getDetailsData()
    }, [genderLink])
    return (
        <div>
            {JSON.stringify(genderDetails)}
        </div>
    )
}

export default GenderColumn