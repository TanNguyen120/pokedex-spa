const flavorToColor = (flavor) => {
    switch (flavor) {
        case "spicy":
            return 'bg-amber-500'
        case "dry":
            return 'bg-cyan-500'
        case "sweet":
            return 'bg-rose-300'
        case "bitter":
            return 'bg-lime-500'
        case "sour":
            return 'bg-yellow-300'
        default:
            break;
    }
}



export default flavorToColor