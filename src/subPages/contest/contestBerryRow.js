import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import contestTypeToColor from '../../tool/contestTypeToColor';
import flavorToColor from '../../tool/flavorsToColor';
import textToColor from '../../tool/textToColor';

const ContestBerryRow = ({ rowData }) => {
    const webLanguage = useSelector(state => state.webSettings.language)
    const [contestColor, setContestColor] = useState(rowData.names[2]);

    useEffect(() => {
        const displayContestColor = async (webLanguage, rowData, setContestColor) => {
            await rowData.names.forEach(element => {
                if (element.language.name === webLanguage) {
                    setContestColor(element)
                }
            });
        }
        displayContestColor(webLanguage, rowData, setContestColor);
    }, [webLanguage, rowData])
    return (
        <tr className=' p-1 text-white font-semibold'>
            <td className={` w-1/3 border border-slate-400 ${contestTypeToColor(rowData.name)}`}>{rowData.name}</td>
            <td className={` border border-slate-400 ${flavorToColor(rowData.berry_flavor.name)}`}><Link to={`/t-pokedex/berries/flavor/${rowData.berry_flavor.name}`} className=" hover:cursor-pointer hover:scale-125 hover:text-red-500">{rowData.berry_flavor.name} </Link> </td>
            <td className={` border border-slate-400 ${textToColor(contestColor ? contestColor.color : '')}`}>{contestColor && contestColor.color}</td>
        </tr>
    )
}

export default ContestBerryRow