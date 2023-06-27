import React, { useEffect, useState } from 'react'
import { AiOutlineCaretDown } from 'react-icons/ai'
import DropdownCard from './dropdownCard';

const EggGroupBtn = ({ eggGroupName }) => {
    const [bgCss, setBgCss] = useState('')

    const [show, setShow] = useState(false);

    useEffect(() => {
        switch (eggGroupName) {
            case "monster":
                setBgCss(' bg-rose-600');
                break;
            case "humanshape":
                setBgCss(' bg-rose-200');
                break;
            case "water1":
                setBgCss(' bg-blue-200');
                break;
            case "water3":
                setBgCss(' bg-blue-400');
                break;
            case "bug":
                setBgCss(' bg-lime-400');
                break;
            case "mineral":
                setBgCss(' bg-amber-800');
                break;
            case "flying":
                setBgCss(' bg-violet-300');
                break;
            case "amorphous":
                setBgCss(' bg-neutral-500');
                break;
            case "ground":
                setBgCss(' bg-yellow-500');
                break;
            case "water2":
                setBgCss(' bg-blue-300');
                break;
            case "fairy":
                setBgCss(' bg-pink-200');
                break;
            case "plant":
                setBgCss(' bg-green-300');
                break;
            case "ditto":
                setBgCss(' bg-violet-400');
                break;
            case "dragon":
                setBgCss(' bg-indigo-600');
                break;
            case "indeterminate":
                setBgCss(' bg-stone-900');
                break;
            case "no-eggs":
                setBgCss(' bg-blue-900');
                break;
            default:
                break;
        }
    }, [eggGroupName])
    return (
        <div className='grid grid-cols-1'>
            <div onClick={e => { setShow(state => !state) }} className={' ml-5 w-80 rounded-lg px-2 py-1 border border-slate-700 capitalize text-white font-semibold my-2 hover:cursor-pointer' + bgCss}>
                {eggGroupName} <AiOutlineCaretDown className={show ? 'inline' : 'inline rotate-180'} />
            </div>
            <DropdownCard show={show} eggGroupName={eggGroupName} />
        </div>
    )

}



const EggGroupsList = ({ eggGroupList }) => {
    return (
        <div className=' grid grid-cols-1 rounded-lg bg-slate-300 border border-slate-600 m-3 gap-5'>{
            eggGroupList.map((e, i) => <EggGroupBtn eggGroupName={e.name} key={i} />)
        }</div>
    )
}

export default EggGroupsList