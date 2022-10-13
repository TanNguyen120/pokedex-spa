import React from 'react'
import { useSelector } from 'react-redux'
import { HiVariable } from 'react-icons/hi'
import VarietiesButton from './varietiesButton'
import VarietiesListButton from './varietiesListButton';

const Variations = ({ varieties }) => {
    const pokeInfo = useSelector((state) => state.singlePokemon);

    return (
        <>
            {
                varieties.length < 5 ?
                    (<div className="md:col-span-2 px-4 grid md:grid-cols-10 grid-cols-4 mx-4">
                        {
                            varieties.map(element => <VarietiesButton pokemon={element.pokemon} activeVarieties={pokeInfo.baseData.name} key={element.pokemon.name} />)
                        }
                    </div>)
                    :
                    (<div className=' bg-slate-400 grid grid-cols-1 md:col-span-2 rounded-lg w-1/3 m-5'>
                        <div className=' text-lg font-semibold font-mono'>
                            Variations <HiVariable className=' inline' />
                        </div>
                        <div className=' bg-slate-300 rounded-lg m-2 p-1 grid grid-cols-3'>
                            {
                                varieties.map(element => <VarietiesListButton pokemon={element.pokemon} activeVarieties={pokeInfo.baseData.name} key={element.pokemon.name} />)
                            }
                        </div>
                    </div>)
            }
        </>
    )
}

export default Variations