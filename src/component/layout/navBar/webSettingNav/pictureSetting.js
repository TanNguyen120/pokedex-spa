import React from 'react';
import PictureModeBtn from './pictureMode';


const PictureSetting = ({ setClickToggle }) => {

    return (
        <div className='flex flex-row'>
            Show:
            <div className='ml-2 p-1'>
                <PictureModeBtn modeName="sprite" setClickToggle={setClickToggle} />
                <PictureModeBtn modeName="draw" setClickToggle={setClickToggle} />
            </div>
        </div>
    )
}

export default PictureSetting