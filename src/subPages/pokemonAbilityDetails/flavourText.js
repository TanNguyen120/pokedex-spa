import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const FlavourText = ({ flavorTextEntries }) => {
    const [flavourTextLang, setFlavourTextLang] = useState([]);
    useEffect(() => {
        const results = [];
        flavorTextEntries.forEach(element => {
            if (element.language.name === 'en') {
                results.push(element);
            }
        });
        setFlavourTextLang(results);
    }, [flavorTextEntries])
    return (
        <div className=' rounded-lg bg-slate-200 p-4 my-3 grid grid-cols-1'>

            <table class="table-fixed border-collapse border border-slate-400">
                <thead>
                    <tr className=' bg-slate-100'>
                        <th>Version Group</th>
                        <th>FlavourText</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        flavourTextLang.map((e, i) => <tr key={i} className='border border-slate-400 odd:bg-white even:bg-slate-100 text-left'>
                            <td className={' capitalize p-3'}><Link to={`/t-pokedex/version-group/${e.version_group.name}`} className=' hover:cursor-pointer hover:underline hover:text-blue-500'>{e.version_group.name}</Link></td>
                            <td className=' pl-5 p-3'>{e.flavor_text}</td>
                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    )
}

export default FlavourText