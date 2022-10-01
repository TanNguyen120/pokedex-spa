const treeToChain = async (tree) => {
    const leafNode = await getLeafNode(tree)
    const chains = await buildPathFromLeaf(leafNode, tree)
    return chains
}

const getLeafNode = async (tree) => {
    let leafNode = [];
    await tree.forEach(element => {
        if (element.children.length === 0) {
            leafNode.push(element)
        }
    });
    return leafNode
}

const buildPathFromLeaf = async (leaf, tree) => {
    let chains = [];
    await leaf.forEach(async element => {
        let leafChain = [];
        leafChain.push(element);
        let parentNode = element.parent
        while (parentNode != null) {
            await tree.forEach(element => {
                if (element.data.name == parentNode.data.name) {
                    leafChain.push(element);
                    parentNode = element;
                }
            })
        }
    })
    return chains;
}
export default treeToChain;