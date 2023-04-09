import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../../component/loadingSpiner'


const ItemFlingDetails = ({ itemFlingDetails }) => {
    return (
        <div className=' grid grid-cols-1'>
            <div className=' text-left font-semibold ml-3 text-slate-500'>Effect: <span className=' text-slate-600'>{itemFlingDetails.name} </span></div>

            <div className=' grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-3 bg-white rounded-lg p-3 m-3'>
                {
                    itemFlingDetails.items.map((element, index) => <Link to={`/t-pokedex/item/${element.name}`} key={index} className=' flex flex-row hover:cursor-pointer hover:bg-slate-300 rounded-lg hover:scale-110'>
                        <img className=' h-9 w-9' src={`https://img.pokemondb.net/sprites/items/${element.name}.png`} alt={element.name} onError={e => { e.target.onError = null; e.target.src = `https://img.pokemondb.net/sprites/items/${element.name}.png` }} />
                        <div className=' pt-1'>
                            {element.name}
                        </div>
                    </Link>)
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