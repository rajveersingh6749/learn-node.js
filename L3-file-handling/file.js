const fs = require('fs');

// 1. WRITE A FILE
// Synchronous way
// fs.writeFileSync('./example.txt', 'Hey There!');// if i change the text/content then file will be overwritten

// Asynchronous way
// fs.writeFile('./example.txt', 'Hey There, How are you?', (err) => {});// if i change the text/content then file will be overwritten


// 2. READ A FILE
// Synchronous way
// const data = fs.readFileSync('./contact.txt', 'utf-8');
// console.log(data);

// Asynchronous way
// const result = fs.readFile('./contact.txt', 'utf-8'); // it will give an error becuase async does not return anything
// console.log(data);

// correct way to read a file asynchronously
// fs.readFile('./contact.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log("ERROR", err);
//         return;
//     }
//     else {
//         console.log(result);
//     }
// });


// 3. APPEND A FILE
// Synchronous way
// fs.appendFileSync('./example.txt', new Date().getDate().toLocaleString());
// fs.appendFileSync('./example.txt', `How's it goin'\n`);
// fs.appendFileSync('./example.txt', `${Date.now()} How's it goin'\n`);

// 4. COPY A FILE
// fs.cpSync('./example.txt', './example2.txt');

// 5. DELETE A FILE
// fs.unlinkSync('./example2.txt');

// 6. CHECK STATS OF A FILE
// console.log(fs.statSync('./example.txt'));// it will give the information about the file like size, createdAt, modifiedAt etc.

// 7. CHECK WHETHER IT IS A FILE OR DIRECTORY
// console.log(fs.statSync('./example.txt').isFile());
// console.log(fs.statSync('./example.txt').isDirectory());

// 8. MAKE A DIRECTORY/FOLDER
// fs.mkdirSync('my-docs');
fs.mkdirSync('your-docs/a/b', { recursive: true });// it will create all the folders if not present
