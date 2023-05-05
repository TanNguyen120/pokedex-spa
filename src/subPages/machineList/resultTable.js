import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../component/loadingSpiner';

const ResultsRow = ({ url }) => {
    const [machineDetails, setMachineDetails] = useState(null);

    useEffect(() => {
        const getMachineDetails = async () => {
            const responeData = (await (axios.get(url))).data
            setMachineDetails(responeData)
        }
        getMachineDetails();
    }, [url])
    return (
        <>
            {
                machineDetails ?
                    <tr>
                        <th>{ }</th>
                        <th>Move</th>
                        <th>Version Group</th>
                    </tr> :
                    <LoadingSpinner />
            }
        </>
    )

}


const ResultTable = ({ machineList }) => {
    return (
        <table class="table-auto">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Move</th>
                    <th>Version Group</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                    <td>Malcolm Lockyer</td>
                    <td>1961</td>
                </tr>
                {machineList ? machineList.map((element, index) => {
                    <ResultsRow url={element} key={index} />
                }) : <LoadingSpinner />}
            </tbody>
        </table>
    )
}





export default ResultTable