const http = require('http');
const fs = require('fs');

const url = require('url'); // core module to handle and parse URLs.


// NOTE: IMPORTANT
// learning what is url and components of url.
// const myUrl = new URL('http://www.example.com:8000/about?name=Rajveer&age=20');
// NOTE: remember http does not parse req.url. for that we have to use 'url' module.


const myServer = http.createServer((req, res) => {
 
    if(req.url === '/favicon.ico') return res.end();

    const log = `${Date.now()}: ${req.url} New Req Received\n`;

    const myUrl = url.parse(req.url, true); // true means parse the query string as well.
    console.log(myUrl);
    // console.log(myUrl.pathname);

    fs.appendFile('log.txt', log, (err, data) => { // this callback is a 'requestHandler' here. it will be handling the requests coming to the server.

        switch (myUrl.pathname) {
            case '/':
                res.end("This is Home Page");
                break;
            case '/about':
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}. This is About Page`);
                break;
            case '/search':
                const search = myUrl.query.search_query;
                res.end("Here are your search results for " + search);
                break;

            default:
                res.end("404! Page Not Found");

        }
    })
});

myServer.listen(8000, () => console.log("Server Started!"));