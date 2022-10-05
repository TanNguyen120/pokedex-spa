// So to calculate type effectiveness We will use matrix to store data
// The matrix is just a simple two dimension array, because we are not do calculate operation on it 


// the matrix of type effectiveness
const typeMatrix = [
    ['normal', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 / 2, 0, 1, 1, 1 / 2, 1],
    ['fire', 1, 1 / 2, 1 / 2, 1, 2, 2, 1, 1, 1, 1, 1, 2, 1 / 2, 1, 1 / 2, 1, 2, 1],
]


// the header of the matrix
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

const damageCalculate = async (type) => {
    const result = [];
    typeMatrix.forEach(element => {
        if (type.type.name === element[0]) {
            for (let i = 1; i <= typeHead.length; i++) {
                const headType = typeHead[i];
                const typeValue = { type: headType, damage: element[i + 1] };
                result.push(typeValue);
            }
        }
    });
    console.log(result);
    return result;
}

export default damageCalculate;