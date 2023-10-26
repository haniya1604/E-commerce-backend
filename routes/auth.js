const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const authController = require("../controller/common/authController");

// Route for user registration
router.post(
  "/register",
  [
    check("username")
      .isLength({ min: 3 })
      .withMessage("Username must be at least 3 characters"),
    check("email").isEmail().withMessage("Invalid email"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // If there are no validation errors, the request is passed to the authController for user registration.
    authController.registerUser(req, res);
  }
);

module.exports = router;
