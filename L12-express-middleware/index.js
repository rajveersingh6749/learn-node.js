const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  next();
});

app.use((req, res, next) => {
  // Logging Middleware
  console.log("Creating a log file: log.txt");
  fs.appendFile("log.txt", `${Date.now()} : ${req.method} ${req.path}\n`, (err, data) => {
    next();
  });
});







// Home Route
app.get("/", (req, res) => {
  return res.send("<h1>Welcome to Home Page</h1>");
});

// REST API
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.post("/api/users", (req, res) => {
  // TODO: Create a new user
  const body = req.body;
  users.push({ body, id: users.length + 1 });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.json({ status: "success", id: users.length });
  });
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // TODO: Update user with id
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    // TODO: Delete user with id
    return res.json({ status: "pending" });
  });

app.listen(PORT, () => {
  console.log("Server Started at PORT", PORT);
});
