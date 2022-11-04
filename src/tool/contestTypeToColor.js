const contestTypeToColor = (flavor) => {
    switch (flavor) {
        case "cool":
            return 'bg-amber-500'
        case "beauty":
            return 'bg-sky-400'
        case "cute":
            return 'bg-rose-300'
        case "smart":
            return 'bg-lime-500'
        case "tough":
            return 'bg-yellow-300'
        default:
            break;
    }
}

export default contestTypeToColor