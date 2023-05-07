import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PageSelector from '../../component/utilityComponent/pageSelector';
import LoadingSpinner from '../../component/loadingSpiner';
import ResultTable from './resultTable';
import PageChooser from './pageSelector';

const ListSection = () => {
    const [maxMachine, setMaxMachine] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [results, setResults] = useState(null);

    const setCurPage = (number) => {
        isNaN(number) ? alert('Page must be a number') : setCurrentPage(number)
    }


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
            setResults(resData.results)
        }
        setResults(null);
        getMachineData();
    }, [currentPage])
    return (
        <div className=' grid grid-cols-1 rounded-lg p-4 bg-slate-100'>
            <div className=' mx-14'>
                <PageChooser currentPage={currentPage} setCurrentPage={setCurPage} />
            </div>
            {results ? <ResultTable className=' m-5' machineList={results} /> : <LoadingSpinner />}
            {maxMachine ? <PageSelector currentPage={currentPage} numberOfPage={maxMachine} setCurrentPage={setCurrentPage} /> : <LoadingSpinner />}
        </div>

    )
}

export default ListSection