const smoothTriggerName = (name) => {
    switch (name) {
        case "level-up":
            return "level up"
        case "use-item":
            return "use"
        default:
            return name
    }
};

const smoothCondition = (obj) => {
    let result = "";
    for (const [key, value] of Object.entries(obj)) {
        switch (key) {
            case "min_level":
                result = result + " to level " + value;
                break
            case "min_happiness":
                result = result + " with min " + value + " happiness";
                break
            case "item":
                result = result + " " + value.name;
                break
            case "trade_species":
                result = result + " for " + value.name;
                break
            case "known_move":
                result = result + " and know move: " + value.name;
                break
            case "held_item":
                result = result + "while hold " + value.name;
                break
            case "min_beauty":
                result = result + "with min " + value + " beauty";
                break
            case "needs_overworld_rain":
                result = result + " in raining environment ";
                break
            case "time_of_day":
                result = result + " at " + value + " time";
                break
            case "location":
                result = result + " in " + value.name;
                break
            case "known_move_type":
                result = result + " and know " + value.name + " type move";
                break
            case "min_affection":
                result = result + " with min " + value + " affection";
                break
            default:
                result = JSON.stringify(obj)
                break;
        }
    }
    return result;
}

const filterDummyCondition = (condition) => {
    // filter null and false and no data value from object
    let filterObject = Object.fromEntries(Object.entries(condition).filter(([_, v]) => (v !== null && v !== false && v !== "")));
    // filter the trigger key too
    delete filterObject.trigger;
    return filterObject;
}

export { smoothTriggerName, filterDummyCondition, smoothCondition };