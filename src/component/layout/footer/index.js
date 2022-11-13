import React from 'react'
import { FaHandPointLeft } from 'react-icons/fa'
import OfficalAccount from './officalAccount'
const Footer = () => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-6 bg-slate-100 p-2 md:p-5 divide-x-2">
            <div div className='text-base ' >
                <div className='text-center font-semibold'><img className="h-10 w-10 mx-6 py-1.5 object-cover inline" src={process.env.PUBLIC_URL + "/footerLogo.png"} alt="poke footer Logo" />Project T-Pokedex</div>

                <div className="mt-5 md:mt-24 text-xs font-sans float-left">Copyright © 2022 Nguyen Viet Tan</div>
            </div >
            <div className='flex items-center'>
                <div
                    className='text-md font-semibold animate-bounce ml-4 '>
                    Visit me <a className='hover:cursor-pointer hover:text-red-400 hover:font-bold hover:text-xl ' href='https://tannguyen1220-pf.netlify.app/index.html'> Here! </a> <FaHandPointLeft className='inline' />
                </div>
                <div>

                </div>
            </div>
            <OfficalAccount />
            <div className='flex items-center flex-col'>
                <span className="font-mono font-semibold"> Special Thank To </span>  <span> <img className='h-10 w-10 md:h-28 md:w-28' src={`${process.env.PUBLIC_URL}/pokeApi.png`} alt=' poke api' /></span>
                <div>
                    Visit <a href="https://pokeapi.co/" target="_blank" rel="noreferrer" className="text-blue-400 hover:text-pink-400 hover:cursor-pointer hover:text-lg">
                        https://pokeapi.co/ </a>  for more info
                </div>
            </div>
        </div >
    )
}

export default Footer