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

export default toTitleCase