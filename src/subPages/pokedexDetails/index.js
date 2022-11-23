// in react router v6.4 we can define a loader function that can access to url param to call api 

import axios from "axios";
import { useLoaderData } from "react-router-dom";

// loader function later will be call in the router 
const loader = async ({ params }) => {
    const pokeDexDetails = (await (axios.get(`https://pokeapi.co/api/v2/pokedex/${params.pokedex}`))).data

    return pokeDexDetails
}
const PokeDexDetails = () => {
    const pokeDexDetails = useLoaderData();
    return (
        <div className=' bg-smallGreyWhite bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>
                        {JSON.stringify(pokeDexDetails)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader }
export default PokeDexDetails