import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPictureMode } from '../../../../reduxSlicer/webSettings';

const PictureModeBtn = ({ modeName }) => {
    const pictureMode = useSelector((state) => state.webSettings.pictureMode);
    const dispatch = useDispatch();
    let bg = ""
    modeName === pictureMode ? bg = "bg-slate-500 text-white border border-slate-100 border-2" : bg = " text-slate-300 hover:text-white"
    return (
        <div
            className={`${bg} m-1 py-1 px-2 inline hover:cursor-pointer font-semibold rounded-lg`}
            onClick={(e => {
                dispatch(setPictureMode(modeName));
            })}
        >{modeName}</div>
    )
}

export default PictureModeBtn