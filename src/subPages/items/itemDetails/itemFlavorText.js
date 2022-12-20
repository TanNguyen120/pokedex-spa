import React from 'react'

const FlavorTextContent = ({ text, versionGroup }) => {
    return (
        <div className=' grid grid-cols-2 divide-x'>
            <div>{versionGroup}</div>
            <div>{text}</div>
        </div>
    )
}



const ItemFlavorText = ({ flavorText }) => {
    return (
        <div className=' rounded-lg bg-slate-200 p-4 m-3'>
            <div>
                Flavor Text:
            </div>
            <div className=' grid grid-cols-1'>
                {
                    flavorText.map(element => <FlavorTextContent text={element.text} versionGroup={element.version_group.name} />)
                }
            </div>
        </div>
    )
}

export default ItemFlavorText