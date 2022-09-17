import React from 'react'



const AbilitiesName = ({ ability, setActive, activeAbility }) => {
    let bg = "bg-inherit";

    if (ability.name === activeAbility.name) {
        bg = "bg-white";
    }

    // the function handle onclick event to set activeAbility to the current div
    const handleClick = () => {
        setActive(ability);
    }
    return (
        <div className={`rounded-t-lg ${bg}`} onClick={e => handleClick()}>
            {ability.name}
        </div>
    )
}




export default AbilitiesName