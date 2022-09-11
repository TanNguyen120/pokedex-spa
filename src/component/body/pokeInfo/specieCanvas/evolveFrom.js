import React from 'react'
import { useDispatch } from 'react-redux'
import { SiMicrogenetics } from 'react-icons/si'
import { findPokeByID } from "../../../../reduxSlicer/findPokeInfoFlag"



const EvolveFrom = ({ evolveFrom }) => {
    const dispatch = useDispatch();
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1">
            <h3>
                Evolve From <SiMicrogenetics className='inline' />
            </h3>
            {
                evolveFrom
                    ?
                    <div className='bg-white rounded-lg text-center text-black m-2 hover:cursor-pointer hover:bg-stone-500' onClick={e => { dispatch(findPokeByID(evolveFrom.name)) }}>
                        {evolveFrom.name}
                    </div>
                    :
                    "none"
            }

        </div>
    )
}

export default EvolveFrom