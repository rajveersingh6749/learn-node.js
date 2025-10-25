const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
// const users = require("./MOCK_DATA.json");

const userRoutes = require("./routes/user");

const app = express();
const PORT = 8000;

mongoose.
connect("mongodb://127.0.0.1:27017/youtube-app-1")
.then(() => {
  console.log("MongoDB Connected");
})
.catch((err) => {
  console.log("MongoDB Connection Error", err);
});

app.use(express.urlencoded({ extended: false })); // to parse form data


app.use("/users", userRoutes);



app.listen(PORT, () => {
  console.log("Server Started at PORT", PORT);
});
