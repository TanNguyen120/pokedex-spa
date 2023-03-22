import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { GiBroadsword } from "react-icons/gi"
import GameVersionRow from './gameVersionRow';
import MoveRow from './moveRow'
import { setCurrentGame } from '../../../../reduxSlicer/currentGameVersion';
import LoadingSpinner from '../../../loadingSpiner';
const MoveSetCanvas = ({ moveSets }) => {
    const [gameVersionList, setGameVersionList] = useState(null);
    const [moveInGameVersion, setMoveInGameVersion] = useState(null);
    const currentGame = useSelector(state => state.currentGameVersionMove);
    const dispatch = useDispatch();
    // get the list of game version that pokemon move appears
    const getGameVersionList = async () => {
        let gameList = [];
        await moveSets.forEach(async move => {
            await move.version_group_details.forEach(moveDetails => {
                // push the game that not in the game list yet
                if (gameList.indexOf(moveDetails.version_group.name) === -1) {
                    gameList.push(moveDetails.version_group.name)
                }
            })
        });
        setGameVersionList(gameList);
        // set default game version
        dispatch(setCurrentGame(gameList[0]))
    }


    // get all the move of the current game version
    const getMoveFromCurrentGame = async () => {
        let moveList = [];
        await moveSets.forEach(async moveSet => {
            await moveSet.version_group_details.forEach(moveDetails => {
                if (moveDetails.version_group.name === currentGame.game) {
                    moveList.push({
                        move: moveSet.move,
                        version_group_details: [moveDetails]
                    })
                }
            })
        })
        setMoveInGameVersion(moveList)
    }
    useEffect(() => {
        getGameVersionList();
    }, [moveSets])

    useEffect(() => {
        getMoveFromCurrentGame();
    }, [currentGame])
    const borderTailWind = 'border border-slate-300';
    return (
        <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-5 md:mx-9 md:my-5 lg:m-5 p-2 lg:col-span-2 col-span-1 grid grid-cols-1">
            <GameVersionRow gamesVersion={gameVersionList} />
            <h3 className='text-lg font-mono font-bold'>
                Move Set <GiBroadsword className='inline' />
            </h3>
            <div className=' p-2 overflow-auto'>
                <table className="table-auto overflow-scroll w-full p-2 m-2 bg-white border-collapse border border-slate-400 rounded-lg">
                    <thead className=' bg-slate-200 text-lg font-semibold'>
                        <tr className=' rounded-lg'>
                            <th className={borderTailWind}>Move</th>
                            <th className={borderTailWind}>Type</th>
                            <th className={borderTailWind}>Category</th>
                            <th className={borderTailWind}>Power</th>
                            <th className={borderTailWind}>Accuracy</th>
                            <th className={borderTailWind}>PP</th>
                            <th className={borderTailWind}>Method</th>
                            <th className={borderTailWind}>Require</th>
                        </tr>
                    </thead>
                    <tbody className='text-left divide-y'>
                        {
                            moveInGameVersion ?
                                moveInGameVersion.map((element, index) => (
                                    <MoveRow key={index} moveData={element} borderTailWind={borderTailWind} />
                                )) :
                                <LoadingSpinner />
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MoveSetCanvas