import React from "react"
const PokemonFormPic = ({ picUrl, type }) => {
    return (
        <div className='bg-white rounded-lg text-center text-black m-2'>
            <img className=" w-full h-11/12" src={picUrl} alt="poke sprite" />
            <h5 className=" text-slate-400 capitalize mt-3">
                {type}
            </h5>
        </div>
    )
}
export default PokemonFormPic