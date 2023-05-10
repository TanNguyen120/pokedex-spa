import React from 'react'
import { useSelector } from 'react-redux'

const NameSection = () => {
    const webLanguage = useSelector(state => state.webSetting.language);
    return (
        <div>NameSection</div>
    )
}

export default NameSection