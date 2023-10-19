import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import typeToColor from '../../tool/typeColor';
import TypeDetails from './typeDetails';
import dynamicBG from '../../tool/bgChanger';

const TypeBtn = ({ typeName, currentType, setCurrentType }) => {
    const [css, setCss] = useState('');
    const [currentCss, setCurrentCss] = useState('');

    useEffect(() => {

        const typeCss = typeToColor(typeName);
        setCss(typeCss);


    }, [typeName]);


    useEffect(() => {
        typeName === currentType ? setCurrentCss(' ring ring-slate-500 scale-110 ') : setCurrentCss('ring ring-white');
    }, [typeName, currentType])
    return (
        <div className={`text-lg capitalize px-5 py-2 text-white hover:cursor-pointer hover:scale-125  ${css} rounded-lg  ${currentCss}`} onClick={e => setCurrentType(typeName)}>
            {typeName}
        </div>
    )
}

// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const pokeTypesListNumber = ((await (axios.get(`https://pokeapi.co/api/v2/type/`))).data).count;
    const pokeTypesList = ((await (axios.get(`https://pokeapi.co/api/v2/type/?offset=0&limit=${pokeTypesListNumber}`))).data).results;
    return pokeTypesList;
}


const TypesList = () => {
    const typeList = useLoaderData();
    const [currentType, setCurrentType] = useState(typeList[0].name);
    const [bg, setBg] = useState(null);
    useEffect(() => {
        setBg(dynamicBG());
    }, [])

    return (
        <div className={bg + ' min-h-screen bg-fixed bg-center font-serif'}>
            <div className='md:container md:mx-auto py-3'>
                <div className=' grid md:grid-cols-4 grid-cols-1 border-2 border-slate-600  bg-slate-200 bg-opacity-90 rounded-lg  p-4'>
                    <div className=' lg:col-span-3 md:col-span-2 col-span-1 grid grid-cols-1 text-left first-letter:ml-16'>
                        <div className=' text-xl font-semibold text-left pl-10'>
                            PoKéMon Type
                        </div>
                        <div className='first-letter:ml-16'>
                            All Pokémon creatures and their moves are assigned certain types. Each type has several strengths and weaknesses in both attack and defense. In battle, you should use Pokémon and moves that have a type advantage over your opponent; doing so will cause much more damage than normal.
                        </div>
                        <div className='first-letter:ml-16'>
                            A single-type advantage (for instance a Water attack against a Ground-type Pokémon) will net you double normal damage. The advantages also stack up, so a double-type advantage (for instance a Water attack against a Ground/Rock-type Pokémon) will net you quadruple damage. In both these cases you will see the message It's super effective! in-game after the attack.
                        </div>
                        <div className='first-letter:ml-16'>
                            Conversely, a single- and double-type disadvantage will afflict half and a quarter normal damage respectively. Here you will see the message It's not very effective... in-game.
                        </div>
                        <div className='first-letter:ml-16'>
                            Another advantage you can gain is Same Type Attack Bonus (STAB). As the name implies, this increases the power of the move if the attacking Pokémon has the same type as the move used (for example a Fire-type Pokémon using a Fire-type move). In this case the damage is 1.5 times normal. Again this is added to any other advantages, so a Water-type Pokémon using a Water-type move against a Ground/Rock-type Pokémon will bag you six times (2×2×1.5) normal damage!
                        </div>

                    </div>
                    <div className=' lg:col-span-1 md:col-span-2 col-span-1'>
                        <div className=' items-center p-4'>
                            <img src='https://images.saymedia-content.com/.image/t_share/MTc0Mzg2MzEyNDYyMjgwMDQw/top-10-baffling-pokemon-types.png' alt='type symbol' className='' />
                            <div className=' text-sm text-slate-500 mt-4'>
                                Type Symbol
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' rounded-lg my-3 p-4 border border-slate-600 grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 bg-slate-200 gap-9'>
                    {
                        typeList.map((e, i) => <TypeBtn key={i} typeName={e.name} currentType={currentType} setCurrentType={setCurrentType} />)
                    }
                </div>
                <TypeDetails typeName={currentType} />
            </div>
        </div>
    )
}

export { loader };
export default TypesList;