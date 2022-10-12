const damageCategoryIcon = (damageCategory) => {
    switch (damageCategory) {
        case "status":
            return (<img src={"https://img.pokemondb.net/images/icons/move-status.png"} className='inline w-8 h-8' alt='damage category icon' />)
        case "special":
            return (<img src={"https://img.pokemondb.net/images/icons/move-special.png"} className='inline w-8 h-8' alt='damage category icon' />)
        case "physical":
            return (<img src={"https://img.pokemondb.net/images/icons/move-physical.png"} className='inline w-8 h-8' alt='damage category icon' />)
        default:
            break;
    }
}

export default damageCategoryIcon;