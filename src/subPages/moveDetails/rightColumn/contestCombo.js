import React from 'react'
import { Link } from 'react-router-dom'
import { GiBulletBill } from 'react-icons/gi'

const ContestCombo = ({ contestCombo }) => {
    return (
        <div className='rounded-lg bg-slate-100 m-4 p-2 grid grid-cols-1'>
            <div title='A detail of normal and super contest combos that require this move.' className=' text-slate-600 text-left ml-4'> Contest Combo: </div>
            {
                contestCombo ?
                    <>
                        <div className=' bg-slate-200 rounded-lg p-4 grid grid-cols-1'>
                            <div className=' text-slate-500 '>Normal Contest: </div>
                            <div className='grid grid-cols-2 m-4 gap-4 text-left'>
                                <div className=' bg-slate-50 rounded-lg p-3'>
                                    <div className=' text-slate-500'>Use After</div>
                                    <div className=' bg-white rounded-lg capitalize pl-4 grid grid-cols-1 gap-4' >
                                        {
                                            contestCombo.normal.use_after ? contestCombo.normal.use_after.map(
                                                (e, i) => <Link className=' ml-5' key={i} to={`/t-pokedex/move/${e.name}`}><GiBulletBill className='inline' /> {e.name}</Link>

                                            )
                                                :
                                                "No move"
                                        }
                                    </div>
                                </div>
                                <div className=' bg-slate-50 rounded-lg p-3'>
                                    <div className=' text-slate-500'>Use Before</div>
                                    <div className=' bg-white rounded-lg capitalize pl-4 grid grid-cols-1 gap-4'>
                                        {
                                            contestCombo.normal.use_before ? contestCombo.normal.use_before.map(
                                                (e, i) => <Link className=' ml-5' key={i} to={`/t-pokedex/move/${e.name}`}><GiBulletBill className='inline' /> {e.name}</Link>
                                            )
                                                :
                                                "No move"
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* ============================================================================================================================================================ */}
                        <div className=' bg-slate-200 rounded-lg p-4 grid grid-cols-1'>
                            <div className=' text-slate-500 '>Super Contest: </div>
                            <div className='grid grid-cols-2 m-4 gap-4 text-left'>
                                <div className=' bg-slate-50 rounded-lg p-3'>
                                    <div className=' text-slate-500'>Use After</div>
                                    <div className=' bg-white rounded-lg capitalize pl-4 grid grid-cols-1 gap-4' >
                                        {
                                            contestCombo.super.use_after ? contestCombo.super.use_after.map(
                                                (e, i) => <Link className=' ml-5' key={i} to={`/t-pokedex/move/${e.name}`}><GiBulletBill className='inline' /> {e.name}</Link>
                                            )
                                                :
                                                "No move"
                                        }
                                    </div>
                                </div>
                                <div className=' bg-slate-50 rounded-lg p-3'>
                                    <div className=' text-slate-500'>Use Before</div>
                                    <div className=' bg-white rounded-lg capitalize pl-4 grid grid-cols-1 gap-4'>
                                        {
                                            contestCombo.super.use_before ? contestCombo.super.use_before.map(
                                                (e, i) => <Link className=' ml-5' key={i} to={`/t-pokedex/move/${e.name}`}><GiBulletBill className='inline' /> {e.name}</Link>
                                            )
                                                :
                                                "No move"
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                    :
                    <div className=' text-yellow-500'> "This Move do not have contest combo !!" </div>
            }

        </div>
    )
}

export default ContestCombo