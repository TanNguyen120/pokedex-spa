import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PageSelector from '../../component/utilityComponent/pageSelector'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../../component/loadingSpiner'

const AbilityPage = ({ pageCount }) => {
    const [currentPage, setCurrentPage] = useState(0)
    const [abilityList, setAbilityList] = useState(null)
    const setCurPage = (pageNumber) => {
        setCurrentPage(pageNumber - 1)
    }
    useEffect(() => {
        // et list back to null when choose another page
        setAbilityList(null)
        const getAbilityData = async () => {
            const abilityData = await (await (axios.get(`https://pokeapi.co/api/v2/ability/?offset=${(currentPage) * 50}&limit=50`))).data
            setAbilityList(abilityData.results);
        }
        getAbilityData();
    }, [currentPage]
    );


    return (
        <div className=' grid grid-cols-1 p-4'>
            <div className=' grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-8'>
                {
                    abilityList ? abilityList.map((e, i) => <Link className=' capitalize p-4 hover:cursor-pointer hover:underline hover:bg-slate-200 bg-slate-100 hover:text-blue-500 rounded-lg' to={`/t-pokedex/ability/${e.name}`} key={i}>{e.name}</Link>) : <LoadingSpinner />
                }
            </div>
            <div className=' p-3'>
                <PageSelector numberOfPage={pageCount} currentPage={currentPage + 1} setCurrentPage={setCurPage} />
            </div>
        </div>
    )
}

export default AbilityPage