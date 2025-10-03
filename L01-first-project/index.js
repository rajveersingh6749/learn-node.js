console.log("Hello, World!");

// console.log(window);// this will not work here. it only works in the browser.
// console.log(alert);// this will not work here. it only works in the browser.

//NOTE: this is because when V8 engine was emebeded with C++ to create Node.js then DOM related objects were removed from it. Becuase we have to work on server-side.
// So, inshort, lots of things were removed and lots of things were added.



// NOTE: this file can be run by using "node index.js or index" command. 
// OR if we have package.json file then we can run it by using "npm run scriptname" command. (if scriptname script is defined in package.json file)
// So run this project using 'npm run start' (already defined 'start' script in package.json file)