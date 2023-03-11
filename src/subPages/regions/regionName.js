import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LoadingSpinner from '../../component/loadingSpiner'

const RegionName = ({ regionNames }) => {
    const [regionName, setRegionName] = useState(regionNames[0].name)
    const webLanguage = useSelector((state) => state.webSettings.language)

    // compare the language from web setting with language array to set the language display to the language use by the web
    useEffect(() => {
        const languageBaseOnSetting = async () => {
            let resultLanguage;
            await regionNames.every(element => {
                if (element.language.name === webLanguage) {
                    resultLanguage = element.name;
                    return false;
                }
                return true;
            });
            resultLanguage ? setRegionName(resultLanguage) : setRegionName(regionNames[0].name);
        }
        languageBaseOnSetting();
    }, [webLanguage, regionNames])

    return (
        <div className=' text-2xl font-semibold p-2 border-b border-slate-700'>
            {regionName ? regionName : <LoadingSpinner />}
        </div>
    )
}

export default RegionName