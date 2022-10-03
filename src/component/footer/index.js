import React from 'react'
import { FaHandPointLeft } from 'react-icons/fa'
import OfficalAccount from './officalAccount'
const Footer = () => {
    return (
        <div className="grid grid-cols-3 md:grid-cols-8 bg-slate-100 p-2 md:p-5 divide-x-2">
            <div div className='text-base ' >
                <div className='text-center font-semibold'><img className="h-10 w-10 mx-6 py-1.5 object-cover inline" src={process.env.PUBLIC_URL + "/footerLogo.png"} alt="poke footer Logo" />Project T-Pokedex</div>
            </div >
            <div className='flex items-center'>
                <div
                    className='text-md font-semibold animate-bounce ml-4 '>
                    Visit me <a className='hover:cursor-pointer hover:text-red-400 hover:font-bold hover:text-xl ' href='https://tannguyen1220-pf.netlify.app/index.html'> Here! </a> <FaHandPointLeft className='inline' />
                </div>
            </div>
            <OfficalAccount />
        </div >
    )
}

export default Footer