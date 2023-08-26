const statToColor = (type) => {
    switch (type) {
        case "hp":
            return "bg-red-400"
        case "attack":
            return "bg-amber-500"
        case "defense":
            return "bg-yellow-400"
        case "special-attack":
            return "bg-blue-400"
        case "special-defense":
            return "bg-lime-400"
        case "speed":
            return "bg-pink-400"
        case "accuracy":
            return "bg-purple-400"
        case "evasion":
            return "bg-slate-400"
        default:
            break;
    }
}

export default statToColor;