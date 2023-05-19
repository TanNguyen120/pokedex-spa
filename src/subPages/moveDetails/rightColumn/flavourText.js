import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import gameToTextColor from '../../../tool/gameToColorText'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../../component/loadingSpiner'

const FlavourRow = ({ flavourDetails }) => {
    return (
        <div className=' grid grid-cols-2 text-left hover:cursor-pointer hover:bg-slate-300 py-3 '>
            <Link
                to={`/t-pokedex/version_group/${flavourDetails.version_group.name}`}
                className={' hover:underline capitalize ' + gameToTextColor(flavourDetails.version_group.name)}>
                {flavourDetails.version_group.name}
            </Link>
            <div>
                {flavourDetails.flavor_text}
            </div>
        </div>
    )
}




const FlavourText = ({ flavourList }) => {
    const webLanguage = useSelector(state => state.webSettings.language);
    const [flavourInLanguage, setFlavourInLanguage] = useState(null);

    useEffect(() => {
        const getFlavourBaseOnLanguage = async () => {
            const result = [];
            for await (const flavourEntry of flavourList) {
                if (flavourEntry.language.name === webLanguage) {
                    result.push(flavourEntry)
                }
            }
            setFlavourInLanguage(result)
        }

        getFlavourBaseOnLanguage();
    }, [flavourList, webLanguage])

    return (
        <div className=' p-2 grid grid-cols-1'>
            <div className=' text-left text-slate-600'>Flavour Text</div>
            <div className=' m-2 p-2 bg-white rounded-lg  divide-y'>
                {
                    flavourInLanguage ?
                        flavourInLanguage.length > 0 ?
                            flavourInLanguage.map((e, i) => <FlavourRow key={i} flavourDetails={e} />
                            )
                            :
                            <div>No Flavour Text in {webLanguage} language</div>
                        :
                        <LoadingSpinner />
                }
            </div>
        </div>
    )
}

export default FlavourText