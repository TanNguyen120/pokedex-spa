import axios from 'axios';
import React, { useEffect, useState } from 'react'

import MoveTable from './moveTable';
import LoadingSpinner from '../../component/loadingSpiner';
import SearchBar from './searchBar';

const MoveList = () => {
    const [moveList, setMoveList] = useState(null);

    useEffect(() => {
        const getMoveList = async () => {
            const numberOfMove = ((await (axios.get('https://pokeapi.co/api/v2/move/'))).data).count
            const responseData = (await (axios.get(`https://pokeapi.co/api/v2/move/??offset=0&limit=${numberOfMove}`))).data
            setMoveList(responseData.results)
        }

        getMoveList();
    }, [])
    return (
        <div className=' bg-whiteBowl bg-contain min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' grid grid-cols-4 border-2 border-slate-600  bg-slate-100 rounded-lg lg:m-4'>
                        <div className=' col-span-3 text-left text-lg'>
                            <div className=' text-center text-2xl p-4 text-slate-700'>
                                Move
                            </div>
                            <div className=' p-3 first-letter:ml-5'>
                                A move (Japanese: わざ move), also known as an attack (Japanese: こうげきわざ attack technique) or technique (Japanese: とくしゅわざ special technique),
                                is the skill Pokémon primarily use in battle. Currently, there are 915 different moves that Pokémon can use.
                                In battle, a Pokémon uses one move each turn. Prior to Generation VII and in Brilliant Diamond and Shining Pearl,
                                some moves (including those learned by HM) can be used outside of battle as well, usually to remove obstacles or explore new areas.
                            </div>
                            <div className=' p-3 first-letter:ml-5'>
                                A Move is a ability that a Pokémon uses during Pokémon Battles. Moves are mainly used to inflict damage on the opponent.
                                Moves usually come from a natural ability that the specific Pokémon has. Some moves can be used both inside and outside of battle.
                                When outside of battle, moves are usually used for transportation or for removing a certain obstacle that the player runs into in the game.
                                There are three types of moves: Physical, Special, and Status. Each type holds a different kind of effect when used.
                            </div>
                        </div>
                        <div className=' items-center p-4'>
                            <img src='https://i.redd.it/ae8ltswy6xi51.jpg' alt='flamethrower move' />
                            <div className=' text-sm text-slate-500 mt-4'>
                                Charizard use flamethrower
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 rounded-lg bg-slate-100 border border-slate-700'>
                        {moveList && <SearchBar cache={moveList} setResult={setMoveList} />}
                        {moveList ? <MoveTable moveList={moveList} /> : <LoadingSpinner />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoveList