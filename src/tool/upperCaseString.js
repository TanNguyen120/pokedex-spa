/*
    I copy this code from stack overflow 
    It use regex to replace first letter and first letter after white space of a string to Upper Case
    Explanation:

    ^\w : first character of the string
    | : or
    \s\w : first character after whitespace
    (^\w|\s\w) Capture the pattern.
    g Flag: Match all occurrences.

*/

const toTitleCase = str => str.replace(/(^\w|\s\w)(\S*)/g, (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase())

const snakeToTileCase = (s) =>
    s.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase())       // Initial char (after -/_)
        .replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase()) // First char after each -/_


export default toTitleCase

export { snakeToTileCase }