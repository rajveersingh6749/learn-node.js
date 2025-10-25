const express = require("express");

const { 
  handleGetAllUsers,
  handleGetUserById, 
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser, 
} = require("../controllers/user");


const router = express.Router();

// NOTE: removed /users from every route to refactor and setup in index.js
// router.get("/", handleGetAllUsers);
// router.post("/", handleCreateNewUser);
router.route("/")
.get(handleGetAllUsers)
.post(handleCreateNewUser);


router
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleUpdateUserById)
  .delete(handleDeleteUserById);


// router.post("/", handleCreateNewUser);


module.exports = router;

