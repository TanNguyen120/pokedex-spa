import React from 'react'

const MissingNoWarning = () => {
    return (
        <div className=' text-center bg-red-200 border border-red-600 text-red-500 text-lg p-5'>
            Pokemon from Scarlet and Violet game does not have full data yet. Some pokemon in those two game <span className=' font-extrabold'>
                MAY SHOW NO DATA OR INFINITE LOADING IN SOME FIELD </span>
        </div>
    )
}

export default MissingNoWarning