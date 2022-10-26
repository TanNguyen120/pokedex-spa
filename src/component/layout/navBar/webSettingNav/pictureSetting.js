import React from 'react';
import PictureModeBtn from './pictureMode';


const PictureSetting = ({ setClickToggle }) => {

    return (
        <div className='flex flex-row p-2 hover:bg-slate-300 hover:cursor-pointer rounded-md'>
            Show:
            <div className='ml-2 p-1'>
                <PictureModeBtn modeName="sprite" setClickToggle={setClickToggle} />
                <PictureModeBtn modeName="draw" setClickToggle={setClickToggle} />
            </div>
        </div>
    )
}

export default PictureSetting