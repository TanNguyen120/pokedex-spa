import axios from 'axios';
import React, { useEffect, useState } from 'react'





const PalparkArea = () => {
    const [palparkList, setPalparkList] = useState(null);
    useEffect(() => {
        const getPalparkList = async () => {
            const palParkList = (await (axios.get(`https://pokeapi.co/api/v2/location/`))).data
            setPalparkList(palParkList)
        }
        getPalparkList();
    }, [])
    return (
        <div className=' bg-whiteWallPaint bg-scroll   font-serif'>
            <div className='md:container md:mx-auto'>
                <div className=' grid grid-cols-1 rounded-lg bg-slate-200'>
                    <div className=' font-semibold text-lg text-slate-400'>Palpark Area</div>

                </div>
            </div>
        </div>
    )
}

export default PalparkArea