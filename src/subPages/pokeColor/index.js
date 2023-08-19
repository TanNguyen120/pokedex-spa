import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import colorToBg from '../../tool/colorToBg';


const ColorCard = ({ colorName }) => {
    const [colorCss, setColorCss] = useState('');

    useEffect(() => {
        const css = colorToBg(colorName);
        setColorCss(css);
    }, [colorName])
    return (
        <Link
            className={`text-xl px-3 py-10 ring ring-slate-500 capitalize font-semibold text-white hover:cursor-pointer rounded-lg  hover:scale-105 ${colorCss}`}
            to={`/t-pokedex/poke-color/${colorName}`}>
            {colorName}
        </Link>
    )
}





// loader function later will be call in the router 
const loader = async () => {
    const PokeColorCount = ((await (axios.get(`https://pokeapi.co/api/v2/pokemon-color/`))).data).count;
    const PokeColorList = ((await (axios.get(`https://pokeapi.co/api/v2/pokemon-color/?limit=${PokeColorCount}&offset=0`))).data).results
    return PokeColorList;
}
const PokeColor = () => {
    const colorList = useLoaderData();
    return (
        <div className=' bg-whiteShineyWave  min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className=' grid md:grid-cols-4 grid-cols-1 border-2 border-slate-600  bg-slate-100 rounded-lg lg:m-4'>
                    <div className=' md:col-span-2 text-left text-lg'>
                        <div className=' text-center text-2xl p-4 text-slate-700'>
                            Pokemon Color
                        </div>
                        <div className=' p-3 first-letter:ml-5'>
                            While the actual colors of the Pokémon species can vary, the color listed in the Pokédex is usually the color most apparent or covering each Pokémon's body. No orange category exists; Pokémon that are primarily orange are listed as red or brown. Prior to Generation VII, Pokémon with multiple forms, such as Wormadam and Shellos, were categorized into their most common form's color.
                        </div>
                        <div className=' p-3 first-letter:ml-5'>
                            Several Pokémon are placed in categories that hold little resemblance to their perceived color, or which would be more logically placed in a different category. One example is Bronzong, who, while considered by some to be predominantly blue, is placed in the green group; this particular case may be attributable to the ambiguity between "green" and "blue" in the Japanese language. Also, some species are categorized on the basis of the color of their heads or faces, such as Druddigon, which is categorized as red despite being mostly blue.                             </div>
                        <div className=' p-3 first-letter:ml-5'>
                            Source: https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_color
                        </div>
                    </div>

                    <div className=' items-center p-4 flex flex-col md:col-span-2'>
                        <img src='https://preview.redd.it/7algvfv7er411.png?width=960&crop=smart&auto=webp&s=e5642589ecaa4bafc9112fe9b0a41a28effbae43' alt='pokemon color spectrum' className=' w-full h-full hover:cursor-crosshair hover:scale-150' />
                        <div className=' text-sm text-slate-500 mt-4'>
                            Pokemon Color Spectrum
                        </div>
                    </div>

                </div>
                <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 p-5 bg-slate-100 rounded-lg m-4 border border-slate-600 gap-16'>
                    {colorList.map((e, i) => <ColorCard key={i} colorName={e.name} />)}
                </div>
            </div>
        </div>
    )
}

export { loader }
export default PokeColor