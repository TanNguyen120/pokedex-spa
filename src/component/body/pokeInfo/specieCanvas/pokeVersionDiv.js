import React from 'react';
import { TbPokeball } from 'react-icons/tb';

const PokeVersionDiv = ({ version, selectedVersion, updateGameVer }) => {
    const color = version === selectedVersion ? "text-red-500" : "text-current"
    return (
        <div className={`${color} m-2 hover:cursor-pointer`} onClick={e => { updateGameVer(version); }} key={version}>
            <TbPokeball />
        </div>
    )
}

export default PokeVersionDiv