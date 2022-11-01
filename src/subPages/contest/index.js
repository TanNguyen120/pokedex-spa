import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';


// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const contestList = (await (axios.get(`https://pokeapi.co/api/v2/contest-type/`))).data
    let contestDetailsResult = [];
    await contestList.results.forEach(async element => {
        const contestDetails = (await (axios.get(`https://pokeapi.co/api/v2/contest-type/${element.name}`))).data;
        contestDetailsResult.push(contestDetails);
    });
    return {
        contestList: contestList,
        contestDetails: contestDetailsResult
    }
}
const Contest = () => {
    const contestData = useLoaderData();
    return (
        <div className=' bg-grey-abstract bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>
                        <div className='border border-slate-300 rounded-lg float-right m-1 p-1 '>
                            <img src='https://i.pinimg.com/originals/d4/e6/f5/d4e6f5f203e38e15cfcb18cad057562b.jpg' alt='contest artwork' className='' />
                            PokemonContest artwork
                        </div>
                        <p className='text-lg font-medium first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                                        first-letter:mr-3 first-letter:float-left'>
                            Pokémon Contests (Japanese: ポケモンコンテスト Pokémon Contest) are a type of competition often contrasted with Pokémon battles and held in Contest Halls. Pokémon are judged on their condition and moves in two rounds, to determine which one is the best of its category.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contest
export { loader }