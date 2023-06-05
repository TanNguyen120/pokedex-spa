import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useLoaderData } from 'react-router-dom'
import LoadingSpinner from '../../component/loadingSpiner'

//===============================================================================================================================================================================

const MoveTargetMenu = ({ currentMoveTarget, moveTargetList, setCurrentMoveTarget }) => {
    return (
        <div className=' grid grid-cols-1 bg-slate-100 rounded-lg m-2 p-2'>

            <div className=' text-slate-500 text-sm text-left pl-10'>
                Choose Damage Class:
            </div>
            <div className="relative w-full lg:max-w-sm p-2">
                <select
                    value={currentMoveTarget}
                    onChange={e => setCurrentMoveTarget(e.target.value)}
                    className="ml-9 w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-slate-600 capitalize hover:cursor-context-menu"
                >
                    {
                        moveTargetList.map((element, index) => <option value={element.name} key={index}>{element.name}</option>)
                    }
                </select>

            </div>
        </div>

    )
}

//===============================================================================================================================================================================
const TargetMoveList = ({ targetName }) => {
    const [targetDetails, setTargetDetails] = useState(null);
    useEffect(() => {
        const getData = async () => {
            const resData = (await (axios.get(`https://pokeapi.co/api/v2/move-target/${targetName}`))).data;
            setTargetDetails(resData)
        }
        getData();
    }, [targetName])
    return <>
        {
            targetDetails ?
                <div className=' grid grid-cols-1 bg-slate-200 rounded-lg m-2'>
                    <div className=' m-2 p-2 w-64 grid grid-cols-1 text-left rounded-lg bg-slate-50 gap-4'>
                        <div className=' capitalize'><span className=' text-slate-500'>Damage Class: </span>  {targetDetails.name}</div>
                        <div> <span className=' text-slate-500'>Description: </span> {targetDetails.descriptions[1].description} </div>
                    </div>
                    <div className=' grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4 m-2 p-2 rounded-lg bg-slate-100'>
                        {
                            targetDetails.moves.map((e, i) => <Link key={i} className=' capitalize hover:bg-slate-200 hover:text-blue-500 hover:cursor-pointer hover:underline rounded-lg bg-white p-2 m-2' to={`/t-pokedex/move/${e.name}`}> {e.name}</Link>)
                        }
                    </div>
                </div>
                :
                <LoadingSpinner />
        }
    </>
}

//===============================================================================================================================================================================

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {

    const moveTargetList = (await (axios.get(`https://pokeapi.co/api/v2/move-target`))).data

    return moveTargetList.results
}


const MoveTarget = () => {

    const moveTargetList = useLoaderData();

    const [currentMoveTarget, setCurrentMoveTarget] = useState(moveTargetList[0].name);
    const setMoveTargetChoose = (moveTargetName) => {
        setCurrentMoveTarget(moveTargetName);
    }
    return (
        <div className=' bg-whiteThings  bg-scroll   font-serif'>
            <div className='md:container min-h-screen bg-slate-50 md:mx-auto '>
                <div className='grid grid-cols-1  rounded-lg p-4'>
                    <div className=' m-2 p-4 rounded-lg bg-white border border-slate-500 text-2xl'>
                        Targets moves can be directed at during battle. Targets can be Pokémon, environments or even other moves.
                    </div>
                    <MoveTargetMenu currentMoveTarget={currentMoveTarget} setCurrentMoveTarget={setMoveTargetChoose} moveTargetList={moveTargetList} />
                    <TargetMoveList targetName={currentMoveTarget} />
                </div>
            </div>
        </div>
    )
}

export { loader };



export default MoveTarget