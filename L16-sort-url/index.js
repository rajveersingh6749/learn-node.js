const express = require('express');
const urlRoute = require('./routes/url');
const path = require('path');

const URL = require('./models/url');
const { connectToMongoDB } = require('./connect');

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(() => console.log("Connected to MongoDB"));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json()); 

app.get("/test", async (req, res) => {
    const allUrls = await URL.find({});
    res.render("home", {
        urls: allUrls
    });
});

app.use("/url", urlRoute);

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entity = await URL.findOneAndUpdate({ shortId }, { $push: { visitHistory: { timestamp: Date.now() } } });
    res.redirect(entity.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));   