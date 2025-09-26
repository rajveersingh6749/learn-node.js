function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

// module.exports = add;
// module.exports = subtract; // This will not work as module.exports can export only one thing at a time.
// To export multiple things, we can use an object.
module.exports = {
    addFn: add, // we can rename as well like this
    subFn: subtract // we can rename as well like this
    // add,
    // subtract
};


// Another way to export is using exports keyword
// exports.add = (a, b) => a + b;
// exports.subtract = (a, b) => a - b;