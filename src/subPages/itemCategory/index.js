import axios from 'axios'
import React from 'react'



// in react router v6.4 we can define a loader function that can access to url param to call api 
// loader function later will be call in the router 
const loader = async () => {
    const versionGroupList = (await (axios.get(`https://pokeapi.co/api/v2/version-group/`))).data

    return versionGroupList
}

const ItemCategory = () => {
    return (
        <div className=' bg-smallGreyWhite bg-repeat min-h-screen font-serif'>
            <div className='md:container md:mx-auto'>
                <div className='grid grid-cols-1'>
                    <div className=' rounded-xl p-3 bg-slate-200 border border-indigo-800  m-10'>

                        <div className=' grid grid-cols-1'>
                            <div>
                                <p className='text-lg font-medium first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
                                        first-letter:mr-3 first-letter:float-left'>
                                    Item categories determine where items will be placed in the players bag.
                                </p>
                            </div>
                            <div className=' grid md:grid-cols-4 grid-cols-2 gap-y-5 mt-8'>
                                {

                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemCategory