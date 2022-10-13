import React from 'react'
import LoadingSpinner from '../../../loadingSpiner'
import GameVersionBtn from './gameVersionBtn'

const GameVersionRow = ({ gamesVersion }) => {
    return (
        <div>
            <div className=' text-left text-lg font-semibold'>
                Game:
            </div>
            <div className=' text-left p-2 grid grid-cols-4 rounded-lg bg-slate-200 m-2'>
                {
                    gamesVersion ?
                        gamesVersion.map(element => <GameVersionBtn gameVersionName={element} key={element} />) :
                        <LoadingSpinner />
                }
            </div>
        </div>
    )
}

export default GameVersionRow