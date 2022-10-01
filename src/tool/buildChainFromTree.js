// The comment In this file is refer to tree structure in graph theory
//============================================================================================
const treeToChain = async (tree) => {
    const leafNode = await getLeafNode(tree)
    const chains = [];
    leafNode.forEach(async element => {
        const chain = await buildPathFromLeaf(element);
        chains.push(chain);
    })
    return chains
}

//============================================================================================

// Get all none children node
// Fact: the number of leaf node in tree is the number of path or evolution chain 
const getLeafNode = async (tree) => {
    let leafNode = [];
    await tree.forEach(element => {
        // leaf node is the node with out children
        if (element.children.length === 0) {
            leafNode.push(element)
        }
    });
    return leafNode
}

//============================================================================================

// get all parent of leaf node
// Fact the last node in this path is always the root node 
const buildPathFromLeaf = async (leaf) => {
    let chain = [];
    let currentNode = leaf;
    // Path traverse with while loop
    while (currentNode != null) {
        // formatting data to match the evoChain prob component
        const prepData = {
            pokemon: currentNode.pokemon,
            condition: currentNode.condition
        }
        // we push data in reverse order because the root node is alway the 1st evolution state
        chain = [prepData, ...chain];

        currentNode = currentNode.parent;
    }
    return chain;
}

export default treeToChain;