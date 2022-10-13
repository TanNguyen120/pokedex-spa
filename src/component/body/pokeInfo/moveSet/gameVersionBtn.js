import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setCurrentGame } from '../../../../reduxSlicer/currentGameVersion';


const GameVersionBtn = ({ gameVersionName }) => {
    const currentGame = useSelector(state => state.currentGameVersionMove);
    const dispatch = useDispatch();
    let bg = 'bg-inherit'

    if (currentGame.game === gameVersionName) {
        bg = 'bg-white '
    }
    return (
        <div className={`${bg} rounded-lg m-3 p-2 hover:bg-slate-400 hover:cursor-pointer text-center `} onClick={e => {
            dispatch(setCurrentGame(gameVersionName));
        }}>
            {gameVersionName}
        </div>
    )
}

export default GameVersionBtn