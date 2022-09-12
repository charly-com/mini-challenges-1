/**
 * Implement the solution to brackets
 *
 * @param {string} str The string of brackets.
 * @returns {"valid" | "invalid"} Whether or not the string is valid.
 */
function isValid(str) {
    
    const stack = [];
    
    for (let i = 0; i < str.length; i++) {
        let c = str[i];
        if (c === "{" || c === "[" || c === "(") {
            stack.push(c)
        } else if (c === "}" && stack.pop() !== "{") {
            return "invalid";
        } else if (c === "]" && stack.pop() !== "[") {
            return "invalid";
        } else if (c === ")" && stack.pop() !== "(") {
            return "invalid";
        }

    }
    return stack.length > 0 ? "invalid" : "valid";
}


module.exports = isValid;
