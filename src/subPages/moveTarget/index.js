import React, { useState } from 'react'
import axios from 'axios'
import { useLoaderData } from 'react-router-dom'
import LearnMethodMenu from './menuChoose'
import LearnMethodMoveList from './LearnMethodMoveList'



// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {

    const moveDamageList = (await (axios.get(`https://pokeapi.co/api/v2/move-category`))).data

    return moveDamageList.results
}


const LearnMethod = () => {

    const moveDamageList = useLoaderData();

    const [currentLearnMethod, setCurrentLearnMethod] = useState(moveDamageList[0].name);
    const setLearnMethodChoose = (palparkName) => {
        setCurrentLearnMethod(palparkName);
    }
    return (
        <div className=' bg-whiteStripe2 bg-scroll   font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1 bg-slate-50 rounded-lg p-4'>
                    <div className=' m-2 p-4 rounded-lg bg-white border border-slate-500 text-2xl'>
                        Damage classes moves can have, e.g. physical, special, or non-damaging.
                    </div>
                    <LearnMethodMenu currentLearnMethod={currentLearnMethod} setCurrentLearnMethod={setLearnMethodChoose} LearnMethodList={moveDamageList} />
                    <LearnMethodMoveList LearnMethodName={currentLearnMethod} />
                </div>
            </div>
        </div>
    )
}

export { loader };



export default LearnMethod