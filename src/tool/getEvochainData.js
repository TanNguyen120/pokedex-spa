// Okay so we use graph theory and data structure to do this \ > _ < /

import axios from "axios";


class TreeNode {
    constructor(parent, children, data) {
        this.parent = parent;
        this.children = children;
        this.data = data
    }
}


const getSimpleData = async (name) => {
    const singlePokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    // we just want retrieve basic info of this single pokemon
    const simplePokeData = {
        name: singlePokemon.data.species.name,
        sprite: singlePokemon.data.sprites.front_default,
        orderInNationalDex: singlePokemon.data.id,
        type: singlePokemon.data.types
    };

    return simplePokeData;
}

const buildTree = async (chainData) => {
    let evoTree = [];

    // WE USE DFS Algorithm to build The evoTree
    // create root node
    const pokeSimpleData = await getSimpleData(chainData.species.name)
    const rootNode = new TreeNode(null, chainData.evolves_to, pokeSimpleData)
    // The Next Verticals Array have one element
    const nextVerticals = [rootNode];
    // The Loop to build The evolution Tree :()
    while (nextVerticals.length > 0) {
        let currentNode = nextVerticals.pop();
        // add the node to the tree
        evoTree = [...evoTree, currentNode];
        // check if current node have children
        if (currentNode.children.length > 0) {
            // find all children of node
            for (const element of currentNode.children) {
                // get the poke data of this node
                const pokeData = await getSimpleData(element.species.name);
                const node = new TreeNode(currentNode, element.evolves_to, pokeData);
                // check if current ventricles have children
                // and add any children to the nextVertical stack
                if (node.children.length > 0) {
                    node.children.forEach(element => {
                        nextVerticals.push(element)
                    });
                }
            };
        }
        // go through all the child node of root
    }
    // After all of that we return the tree
    return evoTree;

}

export default buildTree