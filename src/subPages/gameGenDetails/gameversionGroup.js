import React from 'react'

const GameversioGroup = ({ gameVersion }) => {
    return (
        <div className=' rounded-lg border-2 border-slate-500 bg-slate-200 grid grid-cols-1 m-2 p-2'>
            <div className=' text-left m-4 text-base font-semibold'>
                Games In This Generation:
            </div>
            <ul className=' bg-slate-100 rounded-lg m-3 p-2 text-left'>
                {
                    gameVersion.map(element => <li className=' capitalize m-3 ' key={element.name}> {element.name}</li>)
                }
            </ul>
        </div>
    )
}

export default GameversioGroup