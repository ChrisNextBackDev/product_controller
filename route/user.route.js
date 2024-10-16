const express = require("express");
const {
  getAllUsers,
  getWelcomeMessage,
  getUserById,
  updateUser,
  deleteUser,
  createUser,
} = require("../controller/user.controller");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.get("/welcome", getWelcomeMessage);
router.route("/:userId").get(getUserById).patch(updateUser).delete(deleteUser);

module.exports = router;
