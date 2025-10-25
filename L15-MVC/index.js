const express = require("express");


const { connectMongoDB } = require("./connection")

const userRoutes = require("./routes/user");

const app = express();
const PORT = 8000;


connectMongoDB("mongodb://127.0.0.1:27017/youtube-app-1");


app.use(express.urlencoded({ extended: false })); // to parse form data
app.use("/users", userRoutes);


app.listen(PORT, () => {
  console.log("Server Started at PORT", PORT);
});
