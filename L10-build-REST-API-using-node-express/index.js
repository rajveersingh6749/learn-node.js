const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();

const PORT = 8000;

// Routes
app.get("/users", (req, res) => {
  const html = `
  <ul>
    ${users.map(user => `<li>${user.first_name} ${user.last_name}</li>`).join('')}
  </ul>
  `;

  return res.send(html);
});


// REST API
app.get("/api/users", (req, res) => {
  return res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("/api/users", (req, res) => {
  // TODO: Create a new user  
  return res.json({ status: "pending" });
});

app.patch("/api/users/:id", (req, res) => {
  // TODO: Update user with id
  return res.json({ status: "pending" });
});

app.delete("/api/users/:id", (req, res) => {
  // TODO: Delete user with id
  return res.json({ status: "pending" }); 
});

// NOTE: Since (/api/users/:id) this part is repeating in many routes so we can write is this way:
app.route("/api/users/:id")
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
