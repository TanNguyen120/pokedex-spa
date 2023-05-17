import axios from 'axios';
import React, { useEffect, useState } from 'react'

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
        <div>
            {JSON.stringify(machineDetails)}
        </div>
    )
}



const MachineList = ({ moveName, machineList }) => {
    return (
        <div className=' grid grid-cols-1 rounded-lg bg-slate-100 p-2 m-2'>
            {
                machineList.length > 0
                    ?
                    <>
                        <div className=' text-left ml-5 text-slate-600 my-2'>Machine with {moveName} :</div>
                        <div>
                            {machineList.map((e, i) => <MachineDetails key={i} machineUrl={e.machine.url} />)}
                        </div>
                    </>
                    :
                    <div className=' text-lg text-yellow-500 font-semibold'>This Move Cannot Be Learn By Machine !!</div>
            }

        </div>
    )
}

export default MachineList