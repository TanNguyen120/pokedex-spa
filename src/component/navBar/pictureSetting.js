import React from 'react';
import PictureModeBtn from './pictureMode';


const PictureSetting = () => {

    return (
        <div className='flex flex-row'>
            Show:
            <div className=' bg-slate-100 rounded-lg m-2 p-1'>
                <PictureModeBtn modeName="sprite" />
                <PictureModeBtn modeName="draw" />
            </div>
        </div>
    )
}

export default PictureSetting