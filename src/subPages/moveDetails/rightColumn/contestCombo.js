import React from 'react'
import { Link } from 'react-router-dom'

const ContestCombo = ({ contestCombo }) => {
    return (
        <div className='rounded-lg bg-slate-100 m-4 p-2 grid grid-cols-1'>
            <div title='A detail of normal and super contest combos that require this move.' className=' text-slate-600 text-left ml-4'> Contest Combo: </div>
            <div className=' bg-slate-200 rounded-lg p-4 grid grid-cols-1'>
                <div className=' text-slate-500 '>Normal Contest: </div>
                <div className='grid grid-cols-2 m-4 gap-4 text-left'>
                    <div className=' bg-slate-50 rounded-lg p-3'>
                        <div>Use After</div>
                        <div>
                            {
                                contestCombo.normal.use_after.map(
                                    (e, i) => <Link className=' ml-5' key={i} to={`/t-pokedex/move/${e.name}`}>{e.name}</Link>
                                )
                            }
                        </div>
                    </div>
                    <div className=' bg-slate-50 rounded-lg p-3'>
                        <div>Use Before</div>
                        <div>
                            {
                                contestCombo.normal.use_before.map(
                                    (e, i) => <Link className=' ml-5' key={i} to={`/t-pokedex/move/${e.name}`}>{e.name}</Link>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContestCombo