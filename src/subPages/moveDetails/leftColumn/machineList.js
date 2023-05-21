import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LoadingSpinner from '../../../component/loadingSpiner';
import gameToTextColor from '../../../tool/gameToColorText';

const MachineDetails = ({ machineUrl }) => {
    const [machineDetails, setMachineDetails] = useState(null);
    useEffect(() => {
        const getMachineDetails = async () => {
            const resData = (await (axios.get(machineUrl))).data;
            setMachineDetails(resData)
        }

        getMachineDetails();
    }, [machineUrl])
    return (
        <>
            {
                machineDetails ?
                    <div className=' grid grid-cols-2 text-left capitalize pl-4 gap-4 py-2'>
                        <Link
                            className={' hover:cursor-pointer hover:underline hover:text-blue-500 ' + gameToTextColor(machineDetails.version_group.name)}
                            to={`/t-pokedex/version-group/${machineDetails.version_group.name}`}>
                            {machineDetails.version_group.name}
                        </Link>
                        <Link
                            className=' hover:cursor-pointer hover:underline hover:text-blue-500'
                            to={`/t-pokedex/item/${machineDetails.item.name}`}>
                            {machineDetails.item.name} <img src='https://archives.bulbagarden.net/media/upload/8/88/Used_TM_artwork_RTDX.png' alt='tmPic' className=' p-2 w-12 h-12 inline' />
                        </Link>
                    </div>
                    :
                    <LoadingSpinner />
            }
        </>
    )
}



const MachineList = ({ moveName, machineList }) => {
    return (
        <div className=' grid grid-cols-1 rounded-lg bg-slate-100 p-2 m-2'>
            {
                machineList.length > 0
                    ?
                    <>
                        <div className=' text-left ml-5 text-slate-600 my-2 '>Machine with {moveName} :</div>
                        <div className=' divide-y '>
                            {machineList.map((e, i) => <MachineDetails key={i} machineUrl={e.machine.url} />)}
                        </div>
                    </>
                    :
                    <div className=' text-lg text-yellow-400 font-semibold'>This Move Cannot Be Learn By Machine !!</div>
            }

        </div>
    )
}

export default MachineList