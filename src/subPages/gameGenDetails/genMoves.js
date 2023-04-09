import React from 'react'
import LoadingSpinner from '../../component/loadingSpiner';
import GenMoveRow from './genMovesRow';

const GenMoves = ({ moves }) => {
    const borderTailWind = 'border border-slate-300';
    return (
        <div className='rounded-lg md:col-span-3 col-span-2  border-2 border-slate-500 bg-slate-200 grid grid-cols-1 m-2 p-2'>

            <div className=' font-semibold text-left text-base m-4 text-slate-400'>Moves That Can Learn And Use In This Generation:</div>
            <div className="bg-slate-200 rounded-lg text-center font-mono font-semibold text-black md:m-5 p-2 md:col-span-2 col-span-1 grid grid-cols-1">
                <div className=' p-2 overflow-auto'>
                    <table className="table-auto overflow-scroll w-full p-2 m-2 bg-white border-collapse border border-slate-400 rounded-lg">
                        <thead className=' bg-slate-200 text-lg '>
                            <tr className=' rounded-lg text-slate-600'>
                                <th className={borderTailWind}>Move</th>
                                <th className={borderTailWind}>Type</th>
                                <th className={borderTailWind}>Category</th>
                                <th className={borderTailWind}>Power</th>
                                <th className={borderTailWind}>Accuracy</th>
                                <th className={borderTailWind}>PP</th>
                                {/* <th className={borderTailWind}>Method</th>
                                <th className={borderTailWind}>Require</th> */}
                            </tr>
                        </thead>
                        <tbody className='text-left divide-y'>
                            {
                                moves ? moves.map((element, index) => (
                                    <GenMoveRow key={index} moveData={element} borderTailWind={borderTailWind} />
                                )) :
                                    <LoadingSpinner />
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default GenMoves