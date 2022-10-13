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
        <div
            className={
                `${bg} rounded-lg m-3 p-2 hover:cursor-pointer text-center 
            transition ease-in-out delay-50 hover:-translate-y-1 
            hover:scale-110 hover:bg-slate-400 duration-150  `}
            onClick={e => {
                dispatch(setCurrentGame(gameVersionName));
            }}>
            {gameVersionName}
        </div>
    )
}

export default GameVersionBtn