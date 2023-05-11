import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const NameSection = ({ name, names }) => {
    const webLanguage = useSelector(state => state.webSettings.language);
    const [displayNames, setDisplayNames] = useState(null);
    useEffect(() => {
        const setNamesEffect = async (berryNames) => {
            const resultNames = [];
            await names.forEach(element => {
                switch (element.language.name) {
                    case "ja-Hrkt":
                        resultNames.push(element.name)
                        break;
                    case "it":
                        resultNames.push(element.name)
                        break;
                    case "fr":
                        resultNames.push(element.name)
                        break;
                    case "es":
                        resultNames.push(element.name)
                        break;
                    default:
                        break;
                }
            });
            setDisplayNames(resultNames)
        }
        setNamesEffect(names)
    }, [names])
    return (
        <div className='grid grid-cols-1'>
            <div className=' text-center p-4 text-lg capitalize font-semibold'>
                {name}
            </div>
            <div className=' grid grid-cols-2 md:grid-cols-4 mt-4 capitalize'>
                {
                    displayNames ? displayNames.map((element, index) => <div key={index}>{element}</div>) : ''
                }
            </div>
        </div>
    )
}

export default NameSection