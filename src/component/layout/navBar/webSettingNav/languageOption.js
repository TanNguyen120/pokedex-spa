import React from 'react'
import { useDispatch } from 'react-redux'
import { setLanguage } from '../../../../reduxSlicer/webSettings';
const LanguageOption = ({ langName }) => {
    const dispatch = useDispatch();
    return (
        <div className='p-3 hover:bg-slate-100 hover:cursor-pointer' onClick={e => { dispatch(setLanguage(langName)) }}>{langName}</div>
    )
}

export default LanguageOption