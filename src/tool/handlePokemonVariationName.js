//refactor some pokemon name to get they correct art work
const refactorName = (name) => {
    switch (true) {
        case name.search("alola") !== -1:
            return name + 'n';
        default:
            return name
            break;
    }
}

export default refactorName