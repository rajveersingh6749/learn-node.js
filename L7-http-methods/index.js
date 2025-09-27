const http = require('http');
const fs = require('fs');
const url = require('url'); 


// HTTP METHODS - GET, POST, PUT, PATCH, DELETE
// GET - To get data from server
// POST - To send data to server
// PUT - To update/replace entire existing data/object
// PATCH - To update/modify specific field/s in existing data
// DELETE - To delete existing data

const myServer = http.createServer((req, res) => {
 
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;

    const myUrl = url.parse(req.url, true); 
    // console.log(myUrl);

    fs.appendFile('log.txt', log, (err, data) => { 

        switch (myUrl.pathname) {
            case '/':
                res.end("Home Page");
                break;
            case '/about':
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}. This is About Page`);
                break;
            case '/search':
                const search = myUrl.query.search_query;
                res.end("Here are your search results for " + search);
                break;
            case '/signup':
                if(req.method === 'GET') {
                    res.end("This is Signup Page. Please send a POST request to signup");
                }
                else if(req.method === 'POST') {
                    res.end("Data Received Successfully. User Signed Up");
                }
            default:
                res.end("404! Page Not Found");

        }
    })
});

myServer.listen(8000, () => console.log("Server Started!"));