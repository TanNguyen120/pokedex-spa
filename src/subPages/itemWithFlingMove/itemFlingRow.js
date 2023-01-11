import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../component/loadingSpiner'


const ItemFlingDetails = ({ itemFlingDetails }) => {
    return (
        <div className=' flex flex-row'>
            <div className=' text-left'>{itemFlingDetails.name}</div>
            <div className=' flex flex-row'>
                {
                    itemFlingDetails.map((element, index) => <div key={index}> {element}</div>)
                }
            </div>
        </div>
    )
}

const ItemFlingRow = ({ itemFling }) => {
    const [flingDetails, setFlingDetails] = useState(null)
    useEffect(() => {
        const getFlingDetails = async () => {
            const responseData = (await axios.get(itemFling.url)).data
            setFlingDetails(responseData)
        }

        getFlingDetails();
    }, [itemFling])
    return (
        <div className=' bg-slate-50 rounded-lg m-3 p-3'>
            {
                flingDetails ? <ItemFlingDetails itemFlingDetails={flingDetails} /> : <LoadingSpinner />
            }
        </div>
    )
}

export default ItemFlingRow