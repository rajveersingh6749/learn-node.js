const express = require("express");
const mongoose = require("mongoose");
const fs = require("fs");
// const users = require("./MOCK_DATA.json");

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

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    }
});

const User = mongoose.model("User", userSchema);

app.use(express.urlencoded({ extended: false })); // to parse form data


app.post("/api/users", async (req, res) => {
  const body = req.body;
  if(
    !body ||
    !body.firstName ||
    !body.lastName ||
    !body.email ||
    !body.gender ||
    !body.jobTitle
  ) {
    return res.status(400).json({ msg: "All fields are required..."});
  }

  const result = await User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    gender: body.gender,
    jobTitle: body.jobTitle,
  });

  console.log("result:", result);

  return res.status(201).json({msg: "Success"});
})

// Routes
app.get("/users", async (req, res) => {
    const allDbUsers = await User.find({});
  const html = `
  <ul>
    ${allDbUsers.map((user) => `<li>${user.firstName} - ${user.email}</li>`).join('')}
  </ul>
  `;

  return res.send(html);
});

// REST API
app.get("/api/users", async (req, res) => {
    const allDbUsers = await User.find({});

  return res.json(allDbUsers);
});

app
  .route("/api/users/:id")
  .get(async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user) {
        return res.status(404).json({ msg: "User not found..."});
    }
    return res.json(user);
  })
  .patch(async (req, res) => {
    await User.findByIdAndUpdate(req.params.id,{ lastName: "Changed" });
    return res.json({ status: "Success" });
  })
  .delete(async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    return res.json({ status: "Success" });
  });



app.listen(PORT, () => {
  console.log("Server Started at PORT", PORT);
});
