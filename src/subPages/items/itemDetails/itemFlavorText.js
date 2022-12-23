import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const FlavorTextContent = ({ text, versionGroup }) => {
    const versionGroupColor = []
    return (
        <div className=' grid grid-cols-5 m-4'>
            <div>{versionGroup}</div>
            <div className=' col-span-4'>{text}</div>
        </div>
    )
}



const ItemFlavorText = ({ flavorText }) => {
    const webLanguage = useSelector(state => state.webSettings.language);
    const [flavorTextLanguage, setFlavorTextLanguage] = useState(null);

    useEffect(() => {
        const setDisplayFlavorText = async () => {
            let result = [];
            await flavorText.forEach(element => {
                element.language.name === webLanguage && result.push(element)
            });
            setFlavorTextLanguage(result)
        }

        setDisplayFlavorText();
    }, [webLanguage, flavorText])

    return (
        <div className=' rounded-lg bg-slate-200 p-4 m-3'>
            <div className=' text-left pl-5 text-lg font-semibold'>
                Flavor Text:
            </div>
            <div className=' grid grid-cols-1 tex-left p-4 rounded-lg bg-white m-4 divide-y'>
                {
                    flavorTextLanguage && flavorTextLanguage.map(element => <FlavorTextContent text={element.text} versionGroup={element.version_group.name} />)
                }
            </div>
        </div>
    )
}

export default ItemFlavorText