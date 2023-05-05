import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PageSelector from '../../component/utilityComponent/pageSelector';
import LoadingSpinner from '../../component/loadingSpiner';

const ListSection = () => {
    const [maxMachine, setMaxMachine] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [results, setResults] = useState(null);

    useEffect(() => {
        const getMaxMachineNumber = async () => {
            const resData = (await (axios.get('https://pokeapi.co/api/v2/machine/'))).data
            const maxNumberOfMachine = Math.floor(parseInt(resData.count) / 10) + 1
            setMaxMachine(maxNumberOfMachine);
        }
        getMaxMachineNumber();
    }, [])

    useEffect(() => {
        const getMachineData = async () => {
            const resData = (await (axios.get(`https://pokeapi.co/api/v2/machine/?offset=${currentPage}&limit=10`))).data;
            setResults(resData)
        }
        setResults(null);
        getMachineData();
    }, [currentPage])
    return (
        <div className=' grid grid-cols-1'>

            <div className=' text-4xl'>maxMachine {maxMachine}</div>
            {results ? <div>{JSON.stringify(results)}</div> : <LoadingSpinner />}
            {maxMachine ? <PageSelector currentPage={currentPage} numberOfPage={maxMachine} setCurrentPage={setCurrentPage} /> : <LoadingSpinner />}
        </div>

    )
}

export default ListSection