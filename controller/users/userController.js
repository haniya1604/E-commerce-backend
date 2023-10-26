const User = require("../../models/definitions/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userService = require("../../service/userService");
// Define and export the functions for user registration and login
module.exports = {
  // User registration function
  registerUser: async (req, res) => {
    try {
      // Extract username, email, and password from the request body
      const { username, email, password } = req.body;

      // Hash the password before storing it securely in the database
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create a new user with the hashed password
      const user = await User.create({
        username,
        email,
        password: hashedPassword, // Store the hashed password in the database
      });

      // Respond with a 201 status code and the newly created user
      res.status(201).json(user);
    } catch (error) {
      // Handle errors and respond with a 500 error status if registration fails
      console.error(error);
      res.status(500).json({ error: "Failed to register user" });
    }
  },

  // User login function
  loginUser: async (req, res) => {
    try {
      // Extract email and password from the request body
      const { email, password } = req.body;

      // Find the user with the provided email in the database
      const user = await User.findOne({ where: { email } });

      // If no user is found, return a 401 error (Unauthorized)
      if (!user) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Compare the provided password with the hashed password stored in the database
      const passwordMatch = await bcrypt.compare(password, user.password);

      // If passwords do not match, return a 401 error (Unauthorized)
      if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
      }

      // Generate a JSON Web Token (JWT) for authentication
      const token = jwt.sign(
        { userId: user.id }, // Payload of the token
        "0eb2fd3daf7be09969deb5af212c88ab", // Secret key for signing the token (replace with a secure key)
        {
          expiresIn: "1h", // Token expiration time (1 hour in this example)
        }
      );

      // Respond with the JWT token for the authenticated user
      res.json({ token });
    } catch (error) {
      // Handle errors and respond with a 500 error status if login fails
      console.error(error);
      res.status(500).json({ error: "Failed to log in" });
    }
  },
};
