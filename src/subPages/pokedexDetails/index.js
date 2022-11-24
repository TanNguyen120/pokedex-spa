// in react router v6.4 we can define a loader function that can access to url param to call api 

import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import LoadingSpinner from "../../component/loadingSpiner";

// loader function later will be call in the router 
const loader = async ({ params }) => {
    const pokeDexDetails = (await (axios.get(`https://pokeapi.co/api/v2/pokedex/${params.pokedex}`))).data

    return pokeDexDetails
}
const PokeDexDetails = () => {
    const pokeDexDetails = useLoaderData();
    const webLanguage = useSelector(state => state.webSettings.language);
    const [descriptionsLan, setDescription] = useState(null);

    useEffect(() => {
        const setDisplayData = async () => {
            let result = "";
            await pokeDexDetails.descriptions.forEach(element => {
                if (element.language.name === webLanguage) {
                    result = element;
                }
            });
            setDescription(result)
        }
        setDisplayData();
    }, [pokeDexDetails, webLanguage])
    return (
        <div className=' bg-smallGreyWhite bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>
                        <div className=" mx-8 my-3 text-lg font-semibold ">
                            {descriptionsLan ? descriptionsLan.description : <LoadingSpinner />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader }
export default PokeDexDetails