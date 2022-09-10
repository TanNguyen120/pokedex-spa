const typeToColor = (type) => {
    switch (type) {
        case "normal":
            return "bg-neutral-400"
        case "fire":
            return "bg-orange-500"
        case "fighting":
            return "bg-red-700"
        case "water":
            return "bg-sky-300"
        case "flying":
            return "bg-violet-300"
        case "poison":
            return "bg-fuchsia-600"
        case "grass":
            return "bg-lime-500"
        case "electric":
            return "bg-yellow-300"
        case "ground":
            return "bg-amber-400"
        case "psychic":
            return "bg-pink-500"
        case "rock":
            return "bg-yellow-600"
        case "ice":
            return "bg-cyan-300"
        case "bug":
            return "bg-green-600"
        case "dragon":
            return "bg-indigo-600"
        case "ghost":
            return "bg-violet-900"
        case "dark":
            return "bg-stone-500"
        case "steel":
            return "bg-gray-400"
        case "fairy":
            return "bg-pink-300"
        default:
            break;
    }
}

export default typeToColor;