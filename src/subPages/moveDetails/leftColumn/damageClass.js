import React, { useEffect, useState } from 'react'

const DamageClass = ({ damageClass }) => {
    const [classImg, setClassImg] = useState(null);
    useEffect(() => {
        switch (damageClass) {
            case 'special':
                setClassImg('https://img.pokemondb.net/images/icons/move-special.png')
                break;
            case 'physical':
                setClassImg('https://img.pokemondb.net/images/icons/move-physical.png')
                break;
            case 'status':
                setClassImg('https://img.pokemondb.net/images/icons/move-status.png')
                break;
            default:
                break;
        }
    }, [damageClass])
    return (
        <div className=' rounded-lg bg-slate-200 p-2 m-2'>
            <div>Damage Class:</div>
            <div title={damageClass}>
                <img src={classImg} alt={damageClass} />
            </div>
        </div>
    )
}

export default DamageClass