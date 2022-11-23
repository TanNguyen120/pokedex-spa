import axios from 'axios'
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import PokeDexBtn from './pokeDexBtn'



// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const pokeDexList = (await (axios.get(`https://pokeapi.co/api/v2/pokedex/`))).data
    // let contestDetailsResult = [];
    // // await contestList.results.forEach(async element => {
    // //     const contestDetails = (await (axios.get(`https://pokeapi.co/api/v2/contest-type/${element.name}`))).data;
    // //     contestDetailsResult.push(contestDetails);
    // // });
    // // use promise all to call api inside a loop
    // Promise.all(contestList.results.map(async element => {
    //     const contestDetails = (await (axios.get(`https://pokeapi.co/api/v2/contest-type/${element.name}`))).data;
    //     contestDetailsResult.push(contestDetails);
    // }))
    return pokeDexList
}
const PokeDexList = () => {
    const pokeDexList = useLoaderData();
    return (
        <div className=' bg-smallGreyWhite bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>
                        <div className='border border-slate-300 rounded-lg float-right m-1 p-1 '>
                            <img src='https://i.pinimg.com/originals/72/54/c4/7254c46486cd6d46ce44304b7804cc50.png' alt='an encounter' className='' />
                            pokedex in anime
                        </div>
                        <div>

                            <p className='text-lg font-medium first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                                        first-letter:mr-3 first-letter:float-left'>
                                The Pokédex (Japanese: ポケモン図鑑 illustrated Pokémon encyclopedia) is an invaluable tool to Trainers in the Pokémon world. It gives information about all Pokémon in the world that are contained in its database, although it differs in how it acquires and presents information over the different media. However, they are also only given to a few Trainers at a time, generally to the ones that are felt to have exceptional potential and skill. Regional Pokédexes give information about Pokémon native to a particular region, while the National Pokédex records information about all known Pokémon. While the concept of a Pokédex has existed for a long period, the digital version of it is a more recent invention created by Professor Oak.

                                Pokédex entries typically describe a Pokémon in only two or three sentences. They may give background information on the habitat or activities of a Pokémon in the wild or other information on the Pokémon's history or anatomy. Pokédex entries also include height, weight, cry, footprint (prior to Generation VI), location, other forms, and a picture of the Pokémon.
                            </p>
                            <div>
                                <div className=' bg-slate-200 rounded-lg m-8 grid grid-cols-6'>
                                    {
                                        pokeDexList.results.map(element => <PokeDexBtn pokeDexName={element.name} key={element.name} />)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export { loader }
export default PokeDexList