import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setPictureMode } from '../../../../reduxSlicer/webSettings';

const PictureModeBtn = ({ modeName, setClickToggle }) => {
    const pictureMode = useSelector((state) => state.webSettings.pictureMode);
    const dispatch = useDispatch();
    let bg = ""
    modeName === pictureMode ? bg = "bg-slate-600" : bg = "bg-white"
    return (
        <div
            className={`${bg} m-1 p-1 inline hover:cursor-pointer font-semibold rounded-lg`}
            onClick={(e => {
                setClickToggle(preState => !preState)
                dispatch(setPictureMode(modeName));
            })}
        >{modeName}</div>
    )
}

export default PictureModeBtn