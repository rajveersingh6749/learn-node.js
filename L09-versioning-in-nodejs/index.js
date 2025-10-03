const express = require('express');
const app = express();

app.get('/', (req, res) => {
    return res.send('Hello from Express!');
});

app.get('/about', (req, res) => {
    return res.send(`Hey, ${req.query.name}`);
});

app.get('profile', (req, res) => {
    return res.send('This is the profile page');
});

app.listen(8000, () => {
    console.log('Server Started!');
})
