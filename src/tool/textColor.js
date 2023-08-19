// this function will read the color input and return the string class for tailwind

const textToColor = (color) => {
    switch (color) {
        case "red":
            return "text-red-400"
        case "blue":
            return "text-blue-400"
        case "yellow":
            return "text-yellow-400"
        case "green":
            return "text-green-400"
        case "black":
            return "text-slate-900"
        case "brown":
            return "text-yellow-900"
        case "purple":
            return "text-purple-400"
        case "gray":
            return "text-gray-400"
        case "white":
            return "text-stone-400"
        case "pink":
            return "text-pink-400"
        default:

            break;
    }
}

export default textToColor;