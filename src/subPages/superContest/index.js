import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import LoadingSpinner from '../../component/loadingSpiner';
import contestTypeToColor from '../../tool/contestTypeToColor';
import SuperContestEntryText from './supperContestEntry';
// import LoadingSpinner from '../../component/loadingSpiner';
// import contestTypeToColor from '../../tool/contestTypeToColor';
// import ContestAndBerries from './contestAndBerries';
// import ContestEntryText from './contestEntryText';


// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const contestList = (await (axios.get(`https://pokeapi.co/api/v2/contest-type/`))).data
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
    return contestList
}
const SuperContest = () => {
    const contestData = useLoaderData();
    const [contestDetails, setContestDetails] = useState(null)

    useEffect(() => {
        setContestDetails([]);
        const getContestBerryDetails = async (contestData, setContestDetails) => {
            const contestDetailsData = await
                Promise.all(contestData.results.map(async element => {
                    const contestDetailsRes = (await (axios.get(`https://pokeapi.co/api/v2/contest-type/${element.name}`))).data;
                    // have to make new array out side of set state function
                    return contestDetailsRes
                }))
            setContestDetails(contestDetailsData)
        }
        getContestBerryDetails(contestData, setContestDetails)
    }, [contestData])
    return (
        <div className=' bg-grey-abstract bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>
                        <div className='border border-slate-300 rounded-lg float-right m-1 p-1 '>
                            <img src='https://archives.bulbagarden.net/media/upload/5/5b/Super_Contest_Hall_DPPt.png' alt='contest artwork' className='' />
                            Supper Contest Hall
                        </div>
                        <p className='text-lg font-medium first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                                        first-letter:mr-3 first-letter:float-left'>
                            Pokémon Super Contests (Japanese: ポケモンスーパーコンテスト Pokémon Super Contest) are an expanded format of the Pokémon Contests for the Generation IV games, specifically in Diamond, Pearl, and Platinum, and in their Generation VIII remakes Brilliant Diamond and Shining Pearl as Super Contest Shows (Japanese: スーパーコンテストショー！ Super Contest Show!). In it, Pokémon are rated on their appearance and performance, rather than strength. They are different from the previous generation's competitions in that not only do they have more rounds, but rounds from the earlier games have been altered. They come in four rankings in the same five categories as Generation III: Coolness, Beauty, Cuteness, Cleverness, or Toughness.

                            Super Contests of all ranks are held at the Super Contest Hall in Hearthome City.
                        </p>
                        <div className=' mr-9 ml-2 my-8 border-t-2 border-slate-400'>
                            <div className=' text-left mx-4 text-lg font-semibold'>Contest Type: </div>
                            <div className=' grid grid-cols-4'>
                                {
                                    contestDetails ? contestDetails.map((element, index) => <div className={` rounded-lg m-1 p-1 ${contestTypeToColor(element.name)} capitalize`} key={index}>{element.name}</div>)
                                        : <LoadingSpinner />
                                }
                            </div>
                        </div>
                    </div>
                    <SuperContestEntryText />
                </div>
            </div>
        </div>
    )
}

export default SuperContest
export { loader }