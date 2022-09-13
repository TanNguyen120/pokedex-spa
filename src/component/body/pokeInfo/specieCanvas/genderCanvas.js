import React from 'react'
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs'


const GenderCanvas = ({ genderRatio }) => {
    const femalePercent = (genderRatio / 8).toFixed(2);
    const malePercent = 1 - femalePercent;
    return (
        <div >
            <div className="bg-slate-300 rounded-lg text-center font-mono font-semibold text-black m-1">
                <h3>
                    Gender Rate
                </h3>
                {
                    genderRatio > 0 ?
                        (<div className="bg-white rounded-lg p-2 m-2">
                            <span className="text-pink-400 font-mono text-base bg-slate-200 rounded-lg p-2 mr-1">{femalePercent * 100}% female <BsGenderFemale className='inline' />  </span>
                            <span className="text-blue-700 font-mono text-base bg-slate-200 rounded-lg p-2 ml-1"> {malePercent * 100}% male <BsGenderMale className='inline' /> </span>
                        </div>)
                        :
                        "This pokemon doesn`t have gender"
                }
            </div>
        </div>
    )
}

export default GenderCanvas