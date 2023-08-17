import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import PokeathlonStatDropDown from './statDropDown';
// loader function later will be call in the router 
const loader = async () => {
    const pokeathlonCount = ((await (axios.get(`https://pokeapi.co/api/v2/pokeathlon-stat/`))).data).count;
    const pokeathlonList = ((await (axios.get(`https://pokeapi.co/api/v2/pokeathlon-stat/?limit=${pokeathlonCount}&offset=0`))).data).results
    return pokeathlonList;
}
const PokeathlonStat = () => {
    const pokeathlonStat = useLoaderData()
    return (
        <div className=' bg-whiteBowl  min-h-screen bg-repeat font-serif'>
            <div className='md:container md:mx-auto'>
                <div className=' grid grid-cols-4 border-2 border-slate-600  bg-slate-100 rounded-lg lg:m-4'>
                    <div className=' col-span-3 text-left text-lg'>
                        <div className=' text-center text-2xl p-4 text-slate-700'>
                            Pokeathlon
                        </div>
                        <div className=' p-3 first-letter:ml-5'>
                            Pokéathlon (Japanese: ポケスロン Pokéthlon) is a type of competition involving Pokémon racing and similar athletic competitions, in the manner of Olympic track and field competitions. It was introduced in Pokémon HeartGold and SoulSilver. Its name is a portmanteau of Pokémon and decathlon, as there are a total of 10 events. The Pokéathlon Dome, where the competitions are held, is north of Goldenrod City, next to the National Park.
                        </div>
                        <div className=' p-3 first-letter:ml-5'>
                            The Pokéathlon is handled similarly to Pokémon Contests and Super Contests in the Hoenn and Sinnoh regions, as a sidequest to complete while the player challenges the Gyms and the Pokémon League. Like in Contests, four competitors participate at once; however, each uses a team of three Pokémon instead of only one. The Pokémon and Trainers that take part are known as "Pokéathletes".                        </div>
                        <div className=' p-3 first-letter:ml-5'>
                            Like the five stats introduced for Contests, five additional stats, called performance stats, were added for the Pokéathlon: Speed, Power, Skill, Stamina, and Jump. Like the Contest conditions and battle stats, a Pokémon's performance stats are affected by its Nature (more directly so, like the battle stats, than the condition). Using the Apriblender, Aprijuice can be made and used to boost or lower these performance stats.
                        </div>
                        <div className=' p-3 first-letter:ml-5'>
                            By winning courses in the Pokéathlon, the participating Pokémon will earn medals for their species. Their Trainers earn points for the competition based on how well the team did and if they qualified for any of the several bonuses. The Trainer with the highest score wins, with a tie settled with a random draw by the Pokéathlon host. A win will earn the Trainer an additional 100 points (300 points in the Supreme Cup or 500 points in Link Pokéathlon), which can be spent on prizes at the Athlete Shop or Data Cards with which the player may see records of various actions, course wins and losses, and multiple other statistics in the Pokéathlon Dome. Beating the records for all 10 of the events in the Pokéathlon increases the Trainer Card level in HeartGold and SoulSilver.
                        </div>
                        <div className=' p-3 first-letter:ml-5'>
                            Source: https://bulbapedia.bulbagarden.net/wiki/Pok%C3%A9athlon
                        </div>
                    </div>

                    <div className=' items-center p-4'>
                        <img src='https://archives.bulbagarden.net/media/upload/thumb/1/1a/Pok%C3%A9athlon_art.png/699px-Pok%C3%A9athlon_art.png' alt='pokeathlon artwork' className='' />
                        <div className=' text-sm text-slate-500 mt-4'>
                            Pokeathlon Artwork
                        </div>
                    </div>
                </div>
                <div className=' grid grid-cols-1 border-2 border-slate-600  bg-slate-100 rounded-lg lg:m-4'>
                    {
                        pokeathlonStat.map((e, i) => <PokeathlonStatDropDown name={e.name} url={e.url} key={i} />)
                    }
                </div>

            </div>
        </div>
    )
}

export { loader }
export default PokeathlonStat