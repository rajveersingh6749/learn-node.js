const fs = require('fs');


// 1. Blocking request/operation
// console.log("1")
// const result = fs.readFileSync('contacts.txt', 'utf-8'); // so this line/request have blocked a thread. it will be completed first then next statement will be executed.
// console.log(result);

// console.log("2")
// so what i'm expecting here, the output will be 1, result of file, 2 because the readFileSync is blocking the thread until it get completed.


// 2. Non-blocking request/operation
console.log("1")
fs.readFile('contacts.txt', 'utf-8', (err, result) => { // this line/request will not block the thread. it will be sent to the background and next statement will be executed.
    console.log(result);
});

console.log("2")
// so what i'm expecting here, the output will be 1, 2, result of file, because the readFile is non-blocking the thread. it will be sent to the background and next statement will be executed.


// NOTE: NO. OF THREADS IN THREAD POOL ARE 4 BY DEFAULT. BUT THEY CAN BE INCREASED BUT HOW MUCH? IT DEPENDS ON NO. OF CPU CORES YOUR SYSTEM HAVE.
// TO CHECK NO. OF CPU CORES YOUR SYSTEM HAVE, USE THIS CODE:
const os = require('os');
console.log(os.cpus().length); // this will give you no. of CPU cores your system have.