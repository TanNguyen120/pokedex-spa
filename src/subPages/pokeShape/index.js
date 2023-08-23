import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import ShapeDetails from './pokeShapeDetails';

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const pokeShapeNumber = ((await (axios.get(`https://pokeapi.co/api/v2/pokemon-shape/`))).data).count;
    const pokeShape = ((await (axios.get(`https://pokeapi.co/api/v2/pokemon-shape/?offset=0&limit=${pokeShapeNumber}`))).data).results;
    return pokeShape;
}




const ShapeBtn = ({ currentShape, setCurrentShape, shapeName }) => {
    const [bgCss, setBgCss] = useState('');
    useEffect(() => {
        currentShape === shapeName ? setBgCss(' bg-slate-300') : setBgCss('')
    }, [currentShape, shapeName])
    return (
        <div className={` px-6 py-2 hover:cursor-pointer rounded-lg text-lg m-3 ${bgCss} capitalize`} onClick={e => setCurrentShape(shapeName)}>
            {shapeName}
        </div>)
}

const PokeShape = () => {
    const pokeShapeList = useLoaderData();
    const [currentShape, setCurrentShape] = useState(pokeShapeList[0].name)
    return (
        <div className=' bg-whiteCell min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className=' grid md:grid-cols-4 grid-cols-1 border-2 border-slate-600  bg-slate-100 rounded-lg lg:m-4'>
                    <div className=' lg:col-span-3 md:col-span-2 col-span-1 grid grid-cols-1 p-5'>
                        <div className=' text-lg font-semibold'>
                            Pokémon Form
                        </div>
                        <div className=' first-letter:ml-10 text-left'>
                            Shapes used for sorting Pokémon in a Pokédex.
                        </div>
                        <div className=' first-letter:ml-10 text-left'>
                            Starting in Pokémon HeartGold and SoulSilver, every official different form has a name given by the Pokédex, though Arceus, Genesect, and Furfrou's alternate forms were not recognized separately in the Pokédex until Pokémon Omega Ruby and Alpha Sapphire. In Generations II, III, and IV, whichever form is encountered first will be the sprite displayed in the Pokédex by default; for example, if West Sea Shellos was encountered first, its sprite will appear in the Pokédex by default, whereas if East Sea Shellos was encountered first, its sprite will. In Generation II, the Pokédex has a separate Unown Mode to show the forms of Unown. In Generation IV, the "forms" section was added to the individual entries of each Pokémon, showing form differences that have been encountered, as well as gender differences. In Generation V, the forms section returns and displays Shiny Pokémon as separate forms (if they have been encountered); additionally, the sprite displayed in the Pokédex can be changed using the forms section. In Pokémon Black and White, the forms section is only available after interacting with Cedric Juniper in Mistralton City, while in Pokémon Black 2 and White 2, it is available from the start. Starting in Generation VI, the Pokédex does not have a separate forms section; instead, a Pokémon's forms (including Shiny forms and gender differences) that have been encountered can be switched between in the Pokémon's entry, and this changes the sprite shown in the Pokédex.
                        </div>
                    </div>
                    <div className=' lg:col-span-1 md:col-span-2 col-span-1'>
                        <div className=' items-center p-4'>
                            <img src='https://images.nintendolife.com/dac9254e49890/pokeshape.large.jpg' alt='pokeForm artwork' className='' />
                            <div className=' text-sm text-slate-500 mt-4'>
                                Pokemon Form ArtWork
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' bg-slate-50 border border-slate-500 p-4 rounded-lg grid grid-cols-1'>
                    <div className=' flex flex-row flex-wrap'>
                        {pokeShapeList.map((e, i) => <ShapeBtn key={i} shapeName={e.name} setCurrentShape={setCurrentShape} currentShape={currentShape} />)}
                    </div>
                </div>
                <ShapeDetails shapeName={currentShape} />
            </div>
        </div>
    )
}


export { loader }
export default PokeShape