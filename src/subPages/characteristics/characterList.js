import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PageSelector from '../../component/utilityComponent/pageSelector'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../../component/loadingSpiner'
import { useSelector } from 'react-redux'

const CharacteristicCard = ({ characterDetails }) => {
    const [name, setName] = useState('');
    const webLanguage = useSelector(state => state.webSettings.language);
    useEffect(() => {
        const getRightLanguage = async () => {
            let results = null;
            characterDetails.descriptions.forEach(element => {
                if (element.language.name === webLanguage) {
                    results = element;
                }
            });
            if (results === null) {
                characterDetails.descriptions.forEach(element => {
                    if (element.language.name === 'en') {
                        results = element;
                    }
                });
            }

            setName(results.description)
        }

        getRightLanguage()
    }, [webLanguage, characterDetails])
    return (
        <div className=' grid grid-cols-1'>
            <div className=' flex flex-row'>
                <div>Name:</div>
                <div>{name}</div>
            </div>
        </div>
    )
}




const CharacterList = () => {
    const [pageCount, setPageCount] = useState(0)
    const [currentPage, setCurrentPage] = useState(0)
    const [CharacteristicList, setCharacteristicList] = useState(null)
    const setCurPage = (pageNumber) => {
        setCurrentPage(pageNumber - 1)
    }

    useEffect(() => {
        const getPageCount = async () => {
            const resData = (await (axios.get(`https://pokeapi.co/api/v2/characteristic/`))).data;
            setPageCount(resData.count)
        }

        getPageCount();
    }, [])

    useEffect(() => {
        // et list back to null when choose another page
        setCharacteristicList(null)
        const getCharacteristicData = async () => {
            const CharacteristicData = await (await (axios.get(`https://pokeapi.co/api/v2/characteristic/?offset=${(currentPage) * 10}&limit=10`))).data
            setCharacteristicList(CharacteristicData.results);
        }
        getCharacteristicData();
    }, [currentPage]
    );


    return (
        <div className=' grid grid-cols-1 p-4'>
            <div className=' grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-8'>
                {
                    CharacteristicList ? CharacteristicList.map((e, i) => <CharacteristicCard key={i} characterDetails={e} />) : <LoadingSpinner />
                }
            </div>
            <div className=' p-3'>
                <PageSelector numberOfPage={pageCount} currentPage={currentPage + 1} setCurrentPage={setCurPage} />
            </div>
        </div>
    )
}

export default CharacterList