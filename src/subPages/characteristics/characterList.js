import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PageSelector from '../../component/utilityComponent/pageSelector'
import { Link } from 'react-router-dom'
import LoadingSpinner from '../../component/loadingSpiner'
import { useSelector } from 'react-redux'

const CharacteristicCard = ({ url }) => {
    const [name, setName] = useState('');
    const [characterDetails, setCharacterDetails] = useState(null)
    const webLanguage = useSelector(state => state.webSettings.language);

    useEffect(() => {
        const getDetails = async () => {
            const resData = (await (axios.get(url))).data;
            setCharacterDetails(resData)
        }
        getDetails();
    }, [url])




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
    }, [webLanguage, characterDetails]);

    const labelCss = 'text-slate-600 hover:cursor-help mr-3'
    return (
        <>
            {
                characterDetails ?
                    <div className=' grid grid-cols-1 bg-slate-100 rounded-lg p-3 border border-slate-600 hover:skew-y-6'>
                        <div className=' flex flex-row'>
                            <div title='characteristic name' className={labelCss}>Name: </div>
                            <div>{name}</div>
                        </div>
                        <div className=' flex flex-row'>
                            <div title='the stat that affect by this characteristic' className={labelCss}>Highest Stat: </div>
                            <Link to={`/t-pokedex/stat/${characterDetails.highest_stat.name}`} className=' capitalize hover:underline hover:text-blue-500'> {characterDetails.highest_stat.name}</Link>
                        </div>
                        <div className=' flex flex-row'>
                            <div title='The remainder of the highest stat/IV divided by 5.' className={labelCss}>Gene Modulo: </div>
                            <div>{characterDetails.gene_modulo}</div>
                        </div>
                        <div className=' flex flex-row'>
                            <div title='The possible values of the highest stat that would result in a Pokémon recieving this characteristic when divided by 5.' className={labelCss}>Possible Values: </div>
                            <div>{characterDetails.possible_values.map((e, i) => <div key={i}>{e}</div>)}</div>
                        </div>
                    </div>
                    :
                    <LoadingSpinner />
            }
        </>

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
            <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {
                    CharacteristicList ? CharacteristicList.map((e, i) => <CharacteristicCard key={i} url={e.url} />) : <LoadingSpinner />
                }
            </div>
            <div className=' p-3'>
                <PageSelector numberOfPage={pageCount} currentPage={currentPage + 1} setCurrentPage={setCurPage} />
            </div>
        </div>
    )
}

export default CharacterList