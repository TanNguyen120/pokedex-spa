import React from 'react';
import { GrVulnerability } from 'react-icons/gr';
import { CgPokemon } from 'react-icons/cg';
import { SiVbulletin } from 'react-icons/si'
import { GiCharacter, GiNestEggs, GiTreeGrowth } from 'react-icons/gi'
import { BsGenderAmbiguous } from 'react-icons/bs'
import { MdEmojiNature } from 'react-icons/md'
import { Link } from 'react-router-dom';

const PokemonNav = () => {
    return (
        <div className='group relative h-full '>
            <div className=' grid grid-cols-1 font-semibold text-lg font-mono rounded-t-lg transition-all ease-in-out duration-500 group-hover:cursor-pointer overflow-hidden'>
                <span className="w-0 h-0 rounded bg-slate-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>

                <span className=' text-lg text-center w-full transition-colors duration-300 ease-in-out group-hover:text-white z-10'>
                    <CgPokemon className='inline' /> Pokémon
                </span>
            </div>
            <div className=' rounded-lg group-hover:grid grid-cols-1 text-left p-2 bg-slate-400 text-black hidden w-56 relative lg:absolute lg:mt-9 mt-1'>
                <Link to="/t-pokedex/pokemon-ability/">
                    <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                        <GrVulnerability className=' inline' /> Ability
                    </div>

                </Link>
                <Link to="/t-pokedex/characteristic/">
                    <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                        <GiCharacter className=' inline' /> Characteristic
                    </div>
                </Link>
                <Link to="/t-pokedex/egg-group/">
                    <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                        <GiNestEggs className=' inline' /> Egg Group
                    </div>
                </Link>
                <Link to="/t-pokedex/gender/">
                    <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                        <BsGenderAmbiguous className=' inline' /> Gender
                    </div>
                </Link>
                <Link to="/t-pokedex/growth-rate/">
                    <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                        <GiTreeGrowth className=' inline' /> Growth Rate
                    </div>
                </Link>
                <Link to="/t-pokedex/nature/">
                    <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                        <MdEmojiNature className=' inline' /> Nature
                    </div>
                </Link>
                <Link to="/t-pokedex/pokeathlon-stat/">
                    <div className=' hover:bg-slate-300 hover:rounded-lg hover:text-lg hover:font-semibold p-2 '>
                        <SiVbulletin className=' inline' /> Pokeathlon Stat
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default PokemonNav