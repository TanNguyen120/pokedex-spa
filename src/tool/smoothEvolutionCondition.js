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

// this function will read the condition object and base on what key the object have it will translate to normal sentence easy for human to understand
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
                result = result + " while hold " + value.name;
                break
            case "min_beauty":
                result = result + " with min " + value + " beauty";
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
            case "party_type":
                result = result + " while have " + value.name + " pokemon in party";
                break;
            case "relative_physical_stats":
                switch (value) {
                    case 0:
                        result = result + " and have atk stat equal def stat";
                        break;
                    case -1:
                        result = result + " and have atk stat less than def stat";
                        break;
                    case 1:
                        result = result + " and have atk stat greater than def stat"
                        break;
                }
                break;
            case "gender":
                switch (value) {
                    case 1:
                        result = result + " [female]";
                        break;
                    case 2:
                        result = result + " [male]";
                        break;
                    default:
                        result = JSON.stringify(obj)
                        break;
                }
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