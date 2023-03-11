import React from 'react'
import { Link } from 'react-router-dom'

const LinkBtn = ({ content, link }) => {
    return (
        <Link to={link} className={' hover:underline hover:text-blue-300'}>{content}</Link>
    )
}

export default LinkBtn