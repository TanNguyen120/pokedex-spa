import React from 'react'



const AbilitiesName = ({ ability, setActive, activeAbility }) => {
    let style = "bg-inherit hover:bg-slate-400 text-white border-t border-l border-r border-slate-500";

    if (ability.name === activeAbility.name) {
        style = "bg-white text-slate-600";
    }

    // the function handle onclick event to set activeAbility to the current div
    const handleClick = () => {
        setActive(ability);
    }
    return (
        <div className={`rounded-t-lg ${style} hover:cursor-pointer md:font-semibold  text-xs md:text-base md:px-2`} onClick={e => handleClick()}>
            {ability.name}
        </div>
    )
}




export default AbilitiesName