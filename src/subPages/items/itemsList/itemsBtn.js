import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ItemsBtn = ({ name }) => {
    const [imgUrl, setImgUrl] = useState("")
    useEffect(() => {
        const setUrl = async () => {
            try {
                const res = await axios.get(`https://img.pokemondb.net/sprites/items/${name}.png`);
                setImgUrl(`https://img.pokemondb.net/sprites/items/${name}.png`)

            } catch (error) {
                setImgUrl(`https://www.shutterstock.com/image-vector/no-item-found-vector-filled-260nw-2087433073.jpg`)
            }
            // const res = await axios.get(`https://www.serebii.net/itemdex/sprites/${name}.png`);
            // if (res.ok) {
            //     console.log('Image exists.');
            //     setImgUrl(`https://www.serebii.net/itemdex/sprites/${name}.png`)
            // } else {
            //     setImgUrl(`https://www.shutterstock.com/image-vector/no-item-found-vector-filled-260nw-2087433073.jpg`)
            //     console.log('Image does not exist.');
            // }

        }
        // using fetch to check if url is available
        // fetch(`https://www.serebii.net/itemdex/sprites/${name}.png`, { method: 'HEAD' })
        //     .then(res => {
        //         if (res.ok) {
        //             console.log('Image exists.');
        //             setImgUrl(`https://www.serebii.net/itemdex/sprites/${name}.png`)
        //         } else {
        //             setImgUrl(`https://www.shutterstock.com/image-vector/no-item-found-vector-filled-260nw-2087433073.jpg`)
        //             console.log('Image does not exist.');
        //         }
        //     }).catch(err => console.log('Error:', err))
        setUrl()
    }, [name])
    return (
        <Link to={`/t-pokedex/item/${name}`}>
            <div className=' rounded-lg bg-slate-100 ring-2 ring-slate-500 hover:scale-125 hover:cursor-pointer '>
                <img src={`https://img.pokemondb.net/sprites/items/${name}.png`} onError={e => { e.target.onerror = null; e.target.src = `https://www.shutterstock.com/image-vector/no-item-found-vector-filled-260nw-2087433073.jpg` }} alt={`${name}`} className=' h-full w-full' />
                <div className=' text-base capitalize'>
                    {name}
                </div>
            </div>
        </Link>
    )
}

export default ItemsBtn