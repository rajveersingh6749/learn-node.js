const express = require('express');
const path = require('path');
const cookieParser = require("cookie-parser");
const URL = require('./models/url');

const urlRoute = require('./routes/url');
const staticRoute = require('./routes/staticRouter');
const userRoute = require('./routes/user');

const { connectToMongoDB } = require('./connect');
const { restrictToLoggedinUserOnly, checkAuth } = require("./middlerware/auth");

const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://localhost:27017/short-url')
.then(() => console.log("Connected to MongoDB"));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(checkAuth);

// app.get("/test", async (req, res) => {
//     const allUrls = await URL.find({});
//     res.render("home", {
//         urls: allUrls
//     });
// });

app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use("/user", userRoute);
app.use("/", staticRoute);

app.get('/url/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entity = await URL.findOneAndUpdate({ shortId }, { $push: { visitHistory: { timestamp: Date.now() } } });
    res.redirect(entity.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));   