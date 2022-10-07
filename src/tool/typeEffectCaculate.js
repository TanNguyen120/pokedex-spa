// So to calculate type effectiveness We will use matrix to store data
// The matrix is just a simple two dimension array, because we are not do calculate operation on it

//===============================================================================================

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
    ['ghost', 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 2, 1, 1 / 2, 1, 1],
    ['dragon', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1 / 2, 0],
    ['dark', 1, 1, 1, 1, 1, 1, 1 / 2, 1, 1, 1, 2, 1, 1, 2, 1, 1 / 2, 1, 1 / 2],
    ['steel', 1, 1 / 2, 1 / 2, 1 / 2, 1, 2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1 / 2, 2],
    ['fairy', 1, 1 / 2, 1, 1, 1, 1, 2, 1 / 2, 1, 1, 1, 1, 1, 1, 2, 2, 1 / 2, 1]
]

//===============================================================================================

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
//===============================================================================================
// input: multiple damage to type array
// multiple: damage from each damage array 
// output: a single damage array
const combineDamageFromEachType = async (typesDamage) => {
    if (typesDamage.length < 2) {
        const result = typesDamage[0];
        return result;
    } else {
        let result = [];
        let previousVector = typesDamage[0];
        for (let index = 1; index < typesDamage.length; index++) {
            const currentVector = typesDamage[index];
            for (let j = 0; j < previousVector.length; j++) {
                const element = previousVector[j];
                const damageValue = element * currentVector[j];
                result.push(damageValue);
            }
            previousVector = typesDamage[index];
        }
        return result;
    }
}

//===============================================================================================
const getAttackDamageTypeVectors = async (types) => {
    let vectors = [];
    types.forEach(element => {
        // read the row of the matrix base on types
        for (let index = 0; index < typeMatrix.length; index++) {
            const matrixVector = typeMatrix[index];
            if (element.type.name === matrixVector[0]) {
                vectors.push(matrixVector);
                break;
            }
        }
    })
    return vectors;
}
//===============================================================================================
const getDefendDamageTypeVectors = async (types) => {
    let vectors = [];
    types.forEach(element => {
        // read the column of the matrix base on type
        for (let index = 0; index < typeHead.length; index++) {
            const type = typeHead[index];
            if (type === element.type.name) {
                let vector = [type];
                typeMatrix.forEach(matrixRow => {
                    vector.push(matrixRow[index + 1]);
                });
                vectors.push(vector);
                break;
            }
        }
    })
    return vectors

}



//=================================================================================================

// map the typeHead and effective value in typeMatrix of the input pokemon type
const damageVectorToDamageObject = async (damageVector) => {
    const result = [];
    for (let index = 0; index < typeHead.length; index++) {
        const type = typeHead[index];
        const damageTypeObject = {
            type: type,
            effect: damageVector[index + 1]
        };
        result.push(damageTypeObject);
    }
    return result;
}


//===============================================================================================

// read the pokemon type array and calculate attack and defend damage from it
const damageCalculate = async (pokemonTypes) => {
    // get attack damage effect
    const attackDamageTypeVectors = await getAttackDamageTypeVectors(pokemonTypes);
    const combineAttackDamageVector = await combineDamageFromEachType(attackDamageTypeVectors);
    const resultAttackDamageVector = await damageVectorToDamageObject(combineAttackDamageVector);
    // get defend damage effect
    const defendDamageTypeVectors = await getDefendDamageTypeVectors(pokemonTypes);
    const combineDefendDamageVector = await combineDamageFromEachType(defendDamageTypeVectors);
    const resultDefendDamageVector = await damageVectorToDamageObject(combineDefendDamageVector);

    const resultDamageVector = [resultAttackDamageVector, resultDefendDamageVector];
    return resultDamageVector;
}
//===============================================================================================

export default damageCalculate;