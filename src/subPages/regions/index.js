import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import LinkBtn from './linkBtn';
import LocationList from './locationList';
import RegionInfoTable from './regionInfoTable';
import RegionName from './regionName';


// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async ({ params }) => {
    const regionDetails = ((await (axios.get(`https://pokeapi.co/api/v2/region/${params.regionName}`))).data);
    return regionDetails
}
const Regions = () => {
    const regionDetails = useLoaderData();
    return (
        <div className=' bg-regionBg bg-repeat min-w-screen-xl min-h-screen font-serif'>
            <div className=' lg:container lg:mx-auto grid grid-cols-1 bg-slate-50'>
                <RegionName regionNames={regionDetails.names} />
                <div className=' grid md:grid-cols-3 grid-cols-1 my-4 gap-2  pb-3'>
                    {/* The main series the region belong to */}
                    <RegionInfoTable
                        tileLabel={'Main Generation'}
                        contentList={[
                            <LinkBtn
                                content={regionDetails.main_generation.name}
                                link={`/t-pokedex/generations/${regionDetails.main_generation.name}`} />
                        ]} />
                    {/* The Pokedex of the region  */}
                    <RegionInfoTable
                        tileLabel={'Pokedexs'}
                        contentList={regionDetails.pokedexes.map((element) =>
                            <LinkBtn content={element.name} link={`/t-pokedex/pokedexs/${element.name}`} />)} />
                    {/* Version Group the region belong to */}
                    <RegionInfoTable
                        tileLabel={'Version Group'}
                        contentList={regionDetails.version_groups.map((element) =>
                            <LinkBtn content={element.name} link={`/t-pokedex/version-group/${element.name}`} />)} />
                </div>
                <LocationList locationList={regionDetails.locations} regionName={regionDetails.name} />
            </div>
        </div>
    )
}

export { loader }
export default Regions