import React from 'react';

import Pokemon from './pokemon';

import ConditionArrow from './conditionArrow'


const EvoChain = ({ chain }) => {
    return (
        <div className='grid lg:grid-cols-5 grid-cols-1 content-center align-middle  bg-slate-200 rounded-lg m-2 p-2'>
            {
                chain.length > 1 ?
                    chain.map((element, index) => (
                        <div key={index} className={element.condition.length > 0 ? 'grid lg:grid-cols-2 lg:col-span-2' : 'grid grid-cols-1'}>
                            {element.condition.length > 0 && <ConditionArrow condition={element.condition} />}
                            <Pokemon pokemon={element.pokemon} />
                        </div>
                    )) :
                    <h1> This pokémon dosen`t Evolving</h1>
            }
        </div>
    )
}

export default EvoChain