import React from 'react';

import Pokemon from './pokemon';

import ConditionArrow from './conditionArrow'


const EvoChain = ({ chain }) => {

    return (
        <div className='grid grid-cols-5 bg-slate-200 rounded-lg m-2 p-2'>
            {chain.map(element => (
                <div key={element.pokemon.name} className={element.condition.length > 0 ? 'grid grid-cols-2 col-span-2' : 'col-span-1 grid-cols-1'}>
                    {element.condition.length > 0 && <ConditionArrow condition={element.condition} />}
                    <Pokemon pokemon={element.pokemon} />
                </div>
            ))}
        </div>
    )
}

export default EvoChain