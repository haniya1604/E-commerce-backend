const userService = require("../../service/userService");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const config = require("../../config");
let tokens = [];

function generateAccessToken(user) {
  return jwt.sign({ id: user.id }, config.jwt);
}

module.exports = {
  authenticatetoken: async (req, res, next) => {
    const authhead = req.headers["authorization"];
    console.log(authhead);
    const token = authhead && authhead.split(" ")[1];
    if (!token) {
      return res.sendStatus(404);
    }
    jwt.verify(token, config.jwtSecret, (err, user) => {
      console.log(err, user);
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  },
  registerUser: async (req, res) => {
    const { username, email, password } = req.body;

    try {
      // Check for an existing user with the same email
      const existingUser = await userService.getUserByEmail(email);
      if (existingUser) {
        return res.status(400).json({ error: "Email is already in use" });
      }

      const user = await userService.createUser({ username, email, password });
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      console.error("User registration error:", error);
      res.status(500).json({ error: "User registration failed" });
    }
  },
  loginUser: async (req, res) => {
    const { email, password } = req.body;

    try {
      // Get the user by email
      const user = await userService.getUserByEmail(email);

      if (
        !user ||
        !(await userService.comparePasswords(password, user.password))
      ) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      // Generate a JWT token
      const token = jwt.sign({ id: user.id }, config.jwtSecret, {
        expiresIn: "1h",
      });
      res.json({ token });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ error: "Login failed" });
    }
  },
};
