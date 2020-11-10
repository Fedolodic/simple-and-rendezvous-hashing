const utils = require('./hashing_utils');

const serverSet1 = [
    'server0',
    'server1',
    'server2',
    'server3',
    'server4',
    'server5',
];

// serverSet1 with 1 server removed
const serverSet2 = [
    'server0',
    'server1',
    'server2',
    'server3',
    'server4',
];

// These are our clients
const usernames = [
    'username0',
    'username1',
    'username2',
    'username3',
    'username4',
    'username5',
    'username6',
    'username7',
    'username8',
    'username9',
]


// Implements the naive hashing function
function pickServerSimple(username, servers) {
    const hash = utils.hashString(username);
    return servers[hash % servers.length]  // return server at position of hash
}

function pickServerRendezvous(username, servers) {
    let maxServer = null;
    let maxScore = null;
    // For every server calculate a score, and keep updating the max score and max (best) server
    // return the best server
    for (const server of servers) {
        const score = utils.computeScore(username, server);
        if (maxScore === null || score > maxScore) {
            maxScore = score;
            maxServer = server;
        }
    }
    return maxServer;
}

// Iterate through all the usernames, pick a server using the simple method on serverSet1, pick another server using the
// simple method from serverSet2 (basically ask, what would our server be if 1 server was removed?), then check if
// servers are equal, and log them
console.log('Simple Hashing Strategy:');
for (const username of usernames) {
    const server1 = pickServerSimple(username, serverSet1);
    const server2 = pickServerSimple(username, serverSet2);
    const serversAreEqual = server1 === server2;
    console.log(`${username}: ${server1} => ${server2} | equal: ${serversAreEqual}`);
}

// Do the exact same thing as above except using the rendezvous method
console.log('Rendezvous Hashing Strategy:');
for (const username of usernames) {
    const server1 = pickServerRendezvous(username, serverSet1);
    const server2 = pickServerRendezvous(username, serverSet2);
    const serversAreEqual = server1 === server2;
    console.log(`${username}: ${server1} => ${server2} | equal: ${serversAreEqual}`);
}