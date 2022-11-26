// in react router v6.4 we can define a loader function that can access to url param to call api 

import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";
import InfoSmallComponent from "../../component/body/pokeInfo/infoCanvas/inforSmallComponent";
import LoadingSpinner from "../../component/loadingSpiner";
import PokemonBtn from "./pokemonBtn";
import VersionGroupBtn from "./versionGroupBtn";

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
                        <div className=" grid grid-cols-3">
                            <InfoSmallComponent tile='Main Serries' detail_info={pokeDexDetails.is_main_series ? 'Yes' : 'No'} />
                            <InfoSmallComponent tile='Region' detail_info={pokeDexDetails.region ? pokeDexDetails.region.name : 'None'} />
                            <InfoSmallComponent tile='Version Group' detail_info={pokeDexDetails.version_groups.length > 0 ? pokeDexDetails.version_groups.map(e => <VersionGroupBtn versionName={e.name} />) : 'None'} />
                        </div>
                        <div className=" grid md:grid-cols-12 grid-cols-6 gap-5 mt-9 mx-4">
                            {
                                pokeDexDetails.pokemon_entries.map(element => <PokemonBtn pokemon={element} key={element.entry_number} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { loader }
export default PokeDexDetails