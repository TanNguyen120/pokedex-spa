import React from 'react'

const MoveList = () => {
    return (
        <div className=' bg-whiteBrige bg-contain min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' grid grid-cols-4 border border-slate-600 bg-slate-100 rounded-lg lg:m-4'>
                        <div className=' col-span-3 text-left text-lg'>
                            <div className=' p-3 first-letter:ml-5'>
                                A Move is a ability that a Pokémon uses during Pokémon Battles. Moves are mainly used to inflict damage on the opponent.
                                Moves usually come from a natural ability that the specific Pokémon has. Some moves can be used both inside and outside of battle.
                                When outside of battle, moves are usually used for transportation or for removing a certain obstacle that the player runs into in the game.
                                There are three types of moves: Physical, Special, and Status. Each type holds a different kind of effect when used.
                            </div>
                            <div className=' p-3 first-letter:ml-5'>
                                TMs are most commonly depicted as discs, but their appearance has varied over time.

                                In artwork for Pokémon Red and Green, TMs are depicted as a band that can be attached to a Pokémon.

                                In the TCG, Technical Machines have the appearance of small boxes which a Pokémon's Poké Ball can be inserted into. This depiction was also used in The Electric Tale of Pikachu manga, though in that manga, the box was actually a device that had to be separated and the two halves positioned around the Pokémon's head.

                                Starting in Pokémon FireRed and LeafGreen, TMs are depicted as compact discs. This depiction was carried over to the Pokémon Mystery Dungeon series.
                            </div>
                        </div>
                        <div className=' items-center'>
                            <img src='https://img.rankedboost.com/wp-content/uploads/2018/11/Pokemon-Lets-Go-TMs-300x200.png' alt='a pokemon learn machine move' />
                            <div className=' text-sm text-slate-500 mt-4'>
                                Machine present in game
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MoveList