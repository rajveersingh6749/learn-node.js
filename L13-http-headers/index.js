const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));


// REST API
app.get("/api/users", (req, res) => {
  res.setHeader("MyName", "Rajveer"); // Custom Header. We know about built-in hearder in req and res such as req.headers and res.headers
  // Best Practice: Always add X to custom header
  res.setHeader("X-YourName", "Ankit");
  return res.json(users);
});



app.listen(PORT, () => {
  console.log("Server Started at PORT", PORT);
});
