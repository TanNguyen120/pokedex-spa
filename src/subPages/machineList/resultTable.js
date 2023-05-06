import axios from 'axios';
import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../component/loadingSpiner';
import { Link } from 'react-router-dom';

const ResultsRow = ({ url }) => {
    const [machineDetails, setMachineDetails] = useState(null);

    useEffect(() => {

        const getMachineDetails = async () => {

            const responeData = (await (axios.get(url.url))).data
            setMachineDetails(responeData);
        }
        getMachineDetails();
    }, [url])
    return (
        <>
            {
                machineDetails ?
                    <tr className=' p-5 odd:bg-slate-200 text-slate-600 hover:bg-slate-300 hover:scale-110'>
                        <th className=' p-4 border border-collapse border-slate-500'><Link className=' hover:text-blue-400 hover:underline' to={`/t-pokedex/item/${machineDetails.item.name}`}>{machineDetails.item.name} </Link> </th>
                        <th className=' p-4 border border-collapse border-slate-500'><Link className=' hover:text-blue-400 hover:underline' to={`/t-pokedex/move/${machineDetails.move.name}`}>{machineDetails.move.name} </Link> </th>
                        <th className=' p-4 border border-collapse border-slate-500'><Link className=' hover:text-blue-400 hover:underline' to={`/t-pokedex/item/${machineDetails.version_group.name}`}>{machineDetails.version_group.name} </Link> </th>
                    </tr> :
                    <LoadingSpinner />
            }
        </>
    )

}


const ResultTable = ({ machineList }) => {
    return (
        <table className="table-auto text-left m-5 capitalize">
            <thead className='bg-slate-300 text-lg font-normal '>
                <tr className=' border-collapse'>
                    <th className=' p-4 border border-collapse border-slate-500'>Name</th>
                    <th className=' p-4 border border-collapse border-slate-500'>Move</th>
                    <th className=' p-4 border border-collapse border-slate-500'>Version Group</th>
                </tr>
            </thead>
            <tbody className=''>
                {machineList ? machineList.map((element, index) =>
                    <ResultsRow url={element} key={index} />
                ) : <LoadingSpinner />}
            </tbody>
        </table>
    )
}





export default ResultTable