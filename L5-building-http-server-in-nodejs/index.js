const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    // console.log(req)
    // console.log(req.headers)


    const log = `${Date.now()}: ${req.url}, New Req Received\n`

    fs.appendFile('log.txt', log, (err, data) => { // this callback is a 'requestHandler' here. it will be handling the requests coming to the server.

        switch (req.url) {
            case '/':
                res.end("This is Home Page");
                break;
            case '/about':
                res.end("This is About Page");
                break;
            default:
                res.end("404! Page Not Found");


        }
        // res.end("Hello from server, Again!");
    })


    // console.log("New Req Rec.");
    // res.end("This is my first response from server");
});

myServer.listen(8000, () => console.log("Server Started!"));