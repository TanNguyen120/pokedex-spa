const gameToTextColor = (game) => {
    switch (game) {
        case "red":
            return "text-red-400"
        case "green":
            return "text-green-400"
        case "blue":
            return "text-blue-400"
        case "yellow":
            return "text-yellow-400"
        case "gold":
            return "text-amber-300"
        case "silver":
            return "text-neutral-500"
        case "crystal":
            return "text-cyan-300"
        case "ruby":
            return "text-rose-600"
        case "sapphire":
            return "text-indigo-600"
        case "emerald":
            return "text-emerald-400"
        case "firered":
            return "text-orange-500"
        case "leafgreen":
            return "text-lime-600"
        case "diamond":
            return "text-purple-300"
        case "pearl":
            return "text-rose-300"
        case "platinum":
            return "text-gray-400"
        case "heartgold":
            return "text-yellow-500"
        case "souldsilver":
            return "text-slate-300"
        case "white":
            return "text-stone-300"
        case "white-2":
            return "text-stone-400"
        case "x":
            return "text-sky-500"
        case "y":
            return "text-rose-500"
        case "omega-ruby":
            return "text-pink-600"
        case "alpha-sapphire":
            return "text-indigo-600"
        case "sun":
            return "text-orange-600"
        case "moon":
            return "text-sky-600"
        case "sun-moon":
            return "text-sky-600"
        case "firered-leafgreen":
            return "text-green-600"
        case "ruby-sapphire":
            return "text-red-600"
        case "diamond-pearl":
            return "text-gray-600"
        case "heartgold-soulsilver":
            return "text-orange-600"
        case "black-2-white-2":
            return "text-slate-500"
        case "x-y":
            return "text-blue-600"
        case "ultra-sun-ultra-moon":
            return "text-red-600"
        case "sword-shield":
            return "text-blue-600"
        case "lets-go-pikachu-lets-go-eevee":
            return "text-yellow-600"
        default:
            break;
    }
}

export default gameToTextColor