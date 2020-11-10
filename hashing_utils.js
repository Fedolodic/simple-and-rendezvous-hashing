function hashString(string) {
    let hash = 0;
    if (string.length === 0) return hash;
    // Take the char code of every character, perform some operations it
    // return hash, which is an integer value
    for (let i = 0; i < string.length; i++) {
        charCode = string.charCodeAt(i);
        hash = (hash << 5) - hash + charCode;
        hash |= 0;
    }
    return hash;
}

// Hash both username and server, do some math
// return ranking
function computeScore(username, server) {
    const usernameHash = hashString(username);
    const serverHash = hashString(server);
    return (usernameHash * 13 + serverHash * 11) % 67;
}

module.exports.hashString = hashString;
module.exports.computeScore = computeScore;