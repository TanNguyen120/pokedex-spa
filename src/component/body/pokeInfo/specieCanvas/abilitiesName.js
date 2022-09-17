import React from 'react'



const AbilitiesName = ({ ability, setActive, activeAbility }) => {
    let style = "bg-inherit hover:bg-slate-400";

    if (ability.name === activeAbility.name) {
        style = "bg-white";
    }

    // the function handle onclick event to set activeAbility to the current div
    const handleClick = () => {
        setActive(ability);
    }
    return (
        <div className={`rounded-t-lg ${style} hover:cursor-pointer`} onClick={e => handleClick()}>
            {ability.name}
        </div>
    )
}




export default AbilitiesName