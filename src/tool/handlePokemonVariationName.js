//refactor some pokemon name to get they correct art work
const refactorName = (name) => {
    switch (true) {
        case name.search("alola") !== -1:
            return name.replace("alola", "alolan");
        case name.search("galar") !== -1:
            return name.replace("galar", "galarian")
        case name.search("partner-cap") !== -1:
            return "pikachu-lets-go"
        case name.search("gmax") !== -1:
            return name.replace("gmax", "gigantamax")
        default:
            return name
    }
}

export default refactorName