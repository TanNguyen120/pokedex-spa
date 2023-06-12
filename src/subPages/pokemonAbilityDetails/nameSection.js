import React, { useEffect, useState } from 'react'
import LoadingSpinner from '../../component/loadingSpiner';

const NameSection = ({ names, name }) => {
    const [nameList, setNameList] = useState([]);

    useEffect(() => {
        const result = [];
        names.forEach(element => {
            switch (element.language.name) {
                case 'ja-Hrkt':
                    result.push(element.name)
                    break;
                case 'ko':
                    result.push(element.name)
                    break;
                case 'it':
                    result.push(element.name)
                    break;
                case 'es':
                    result.push(element.name)
                    break;
                default:
                    break;
            }
        });
        setNameList(result);
    }, [names])

    return (
        <div className='bg-slate-100 rounded-lg grid grid-cols-1 gap-4'>
            <div className=' capitalize text-xl text-slate-700 font-semibold'>
                {name}
            </div>
            <div className=' grid md:grid-cols-4 grid-cols-2'>
                {
                    nameList.length > 2 ? nameList.map((e, i) => <div key={i}>{e}</div>) : <LoadingSpinner />
                }
            </div>
        </div>
    )
}

export default NameSection