import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const EffectRow = ({ changeRow }) => {
    const [entryWithLanguage, setEntryWithLanguage] = useState(changeRow.effect_entries[0]);
    useEffect(() => {
        changeRow.effect_entries.forEach(element => {
            if (element.language.name === 'en') {
                setEntryWithLanguage(element)
            }
        });
    }, [changeRow])

    return (
        <div className=' grid grid-cols-2 text-left p-4  bg-white rounded-lg m-4'>
            <Link title='version group the change happen' className=' ml-5 hover:cursor-pointer hover:underline hover:text-blue'>Version Group: {changeRow.version_group.name}</Link>
            <div>{entryWithLanguage.effect}</div>
        </div>
    )
}



const EffectChange = ({ effectChange }) => {
    return (
        <div className=' grid grid-cols-1 rounded-lg p-4 bg-slate-200'>
            <div className=' hover:cursor-help' title='The list of previous effects this ability has had across version groups.'>Effect Change: </div>
            <div className=' grid grid-cols-1 m-2 p-4 rounded-lg bg-slate-50 divide-y'>
                {
                    effectChange.length > 0 ?
                        effectChange.map((e, i) =>
                            <EffectRow key={i} changeRow={e} />
                        )
                        :
                        <div className=' text-yellow-500'>This Move Does Not Have Effect Change </div>
                }
            </div>
        </div>
    )
}

export default EffectChange