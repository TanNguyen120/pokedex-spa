// So to calculate type effectiveness We will use matrix to store data
// The matrix is just a simple two dimension array, because we are not do calculate operation on it 


// the matrix of type effectiveness
const typeMatrix = [
    ['normal', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 / 2, 0, 1, 1, 1 / 2, 1],
    ['fire', 1, 1 / 2, 1 / 2, 1, 2, 2, 1, 1, 1, 1, 1, 2, 1 / 2, 1, 1 / 2, 1, 2, 1],
    ['water', 1, 2, 1 / 2, 1, 1 / 2, 1, 1, 1, 2, 1, 1, 1, 2, 1, 1 / 2, 1, 1, 1],
    ['electric', 1, 1, 2, 1 / 2, 1 / 2, 1, 1, 1, 0, 2, 1, 1, 1, 1, 1 / 2, 1, 1, 1],
    ['grass', 1, 1 / 2, 2, 1, 1 / 2, 1, 1, 1 / 2, 2, 1 / 2, 1, 1 / 2, 2, 1, 1 / 2, 1, 1 / 2, 1],
    ['ice', 1, 1 / 2, 1 / 2, 1, 2, 1 / 2, 1, 1, 2, 2, 1, 1, 1, 1, 2, 1, 1 / 2, 1],
    ['fighting', 2, 1, 1, 1, 1, 2, 1, 1 / 2, 1, 1 / 2, 1 / 2, 1 / 2, 2, 0, 1, 2, 2, 1 / 2],
    ['poison', 1, 1, 1, 1, 2, 1, 1, 1 / 2, 1 / 2, 1, 1, 1, 1 / 2, 1 / 2, 1, 1, 0, 2],
    ['ground', 1, 2, 1, 2, 1 / 2, 1, 1, 2, 1, 0, 1, 1 / 2, 2, 1, 1, 1, 2, 1],
    ['flying', 1, 1, 1, 1 / 2, 2, 1, 2, 1, 1, 1, 1, 2, 1 / 2, 1, 1, 1, 1 / 2, 1],
    ['psychic', 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1 / 2, 1, 1, 1, 1, 0, 1 / 2, 1],
    ['bug', 1, 1 / 2, 1, 1, 2, 1, 1 / 2, 1 / 2, 1, 1 / 2, 2, 1, 1, 1 / 2, 1, 2, 1 / 2, 1 / 2],
    ['rock', 1, 2, 1, 1, 1, 2, 1 / 2, 1, 1 / 2, 2, 1, 2, 1, 1, 1, 1, 1 / 2, 1],
    ['ghost', 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1 / 2, 1, 1],
    ['dragon', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1 / 2, 0],
    ['dark', 1, 1, 1, 1, 1, 1, 1 / 2, 1, 1, 1, 2, 1, 1, 2, 1, 1 / 2, 1, 1 / 2],
    ['steel', 1, 1 / 2, 1 / 2, 1 / 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1 / 2, 2],
    ['fairy', 1, 1 / 2, 1, 1, 1, 1, 2, 1 / 2, 1, 1, 1, 1, 1, 1, 2, 2, 1 / 2, 1]
]


// the header of the matrix is array of type a
const typeHead = [
    'normal',
    'fire',
    'water',
    'electric',
    'grass',
    'ice',
    'fighting',
    'poison',
    'ground',
    'flying',
    'psychic',
    'bug',
    'rock',
    'ghost',
    'dragon',
    'dark',
    'steel',
    'fairy'
];

// input: multiple damage to type array
// multiple: damage from each damage array 
// output: a single damage array
const combineDamageFromEachType = (typesDamage) => {
    let resultDamageVector = typesDamage[0];
    // remove the name
    resultDamageVector.pop();
    for (let index = 1; index < typesDamage.length; index++) {
        let damageVector = typesDamage[index];
        // also remove the name cell in this vector too
        damageVector.pop();
        for (let j = 0; j < damageVector.length; j++) {
            resultDamageVector = resultDamageVector[j] * damageVector[j];
        }
    }
    return resultDamageVector;
}


// map the typeHead and effective value in typeMatrix of the input pokemon type
const attackDamageCalculate = (pokemonType) => {
    const result = [];
    typeMatrix.forEach(element => {
        if (pokemonType.type.name === element[0]) {
            for (let i = 1; i <= typeHead.length; i++) {
                const headType = typeHead[i];
                const typeValue = { type: headType, damage: element[i + 1] };
                result.push(typeValue);
            }
        }
    });
    return result;
}



// read the pokemon type array and calculate attack and defend damage from it
const damageCalculate = async (pokemonTypes) => {
    const attackDamageToType = [];
    for await (const pokemonType of pokemonTypes) {
        const damageResult = attackDamageCalculate(pokemonType);
        attackDamageToType.push(damageResult);
    }
    return attackDamageToType;
}

export default damageCalculate;