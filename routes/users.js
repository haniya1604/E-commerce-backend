// routers/userRouter.js
const express = require("express");
const router = express.Router();
const userController = require("../controller/users/userController");

router.post("/auth/register", userController.registerUser);

// User login
router.post("/auth/login", userController.loginUser);

module.exports = router;
