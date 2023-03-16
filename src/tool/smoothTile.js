const smoothTile = (uglyTile) => {
    // use regex to replace hyphen with space
    let smoothTile = uglyTile.replace(/-/g, " ");
    return smoothTile
}

export default smoothTile;