// this function will read the color input and return the string class for tailwind

const colorToBg = (color) => {
    switch (color) {
        case "red":
            return "bg-red-400"
        case "blue":
            return "bg-blue-400"
        case "yellow":
            return "bg-yellow-400"
        case "green":
            return "bg-green-400"
        case "black":
            return "bg-slate-900"
        case "brown":
            return "bg-yellow-900"
        case "purple":
            return "bg-purple-400"
        case "gray":
            return "bg-gray-400"
        case "white":
            return "bg-stone-400"
        case "pink":
            return "bg-pink-400"
        default:

            break;
    }
}

export default colorToBg;