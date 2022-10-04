// switch statement to get type effectiveness object of each type

const compareTable = async (type) => {
    switch (type) {
        case "normal":
            return {
                defend: [
                    { type: "rock", value: 1 / 2 },
                    { type: "ghost", value: 0 },
                    { type: "steel", value: 1 / 2 },
                ],
                attack: [
                    { type: "fighting", value: 2 },
                    { type: "ghost", value: 0 }
                ]
            }
        case "fire":
            return {
                defend: [
                    { type: "fire", value: 1 / 2 },
                    { type: "water", value: 0 },
                    { type: "steel", value: 1 / 2 },
                ],
                attack: [
                    { type: "fighting", value: 2 },
                    { type: "ghost", value: 0 }
                ]
            }
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