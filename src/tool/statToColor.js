const statToColor = (type) => {
    switch (type) {
        case "hp":
            return "bg-red-400"
        case "attack":
            return "bg-amber-500"
        case "defense":
            return "bg-yellow-200"
        case "special-attack":
            return "bg-blue-300"
        case "special-defense":
            return "bg-lime-400"
        case "speed":
            return "bg-pink-400"
        default:
            break;
    }
}

export default statToColor;