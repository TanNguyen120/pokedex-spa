import React from 'react'
import { useDispatch } from 'react-redux'
import { setLanguage } from '../../../../reduxSlicer/webSettings';
const LanguageOption = ({ langName, langOptionToggle }) => {
    const dispatch = useDispatch();
    return (
        <div className='p-3' onClick={e => { dispatch(setLanguage(langName)); langOptionToggle() }}>{langName}</div>
    )
}

export default LanguageOption