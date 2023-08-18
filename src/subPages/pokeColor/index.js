import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';


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
                <div>
                    {JSON.stringify(colorList)}
                </div>
            </div>
        </div>
    )
}

export { loader }
export default PokeColor