// The code requires necessary packages and modules using require statements at the beginning
const createError = require('http-errors');
const express = require('express'); // create an Express application
const path = require('path'); // imported to handle file paths
const bodyParser = require('body-parser'); // imported to parse the request body
const cors = require('cors'); // imported to handle Cross-Origin Resource Sharing (CORS).
const { signupValidation, loginValidation } = require('./validation.js'); // middleware functions are imported from the validation.js file

const app = express(); // Creates An Express application
// Various middleware functions are then applied to the Express application 
app.use(express.json()); // parse JSON bodies.
app.use(bodyParser.json()); // parse request bodies as JSON.
app.use(bodyParser.urlencoded({ // parse URL-encoded bodies.
   extended: true
}));
app.use(cors()); // andle Cross-Origin Resource Sharing (CORS).
app.get('/', (req, res) => {
   res.send('Node js file upload rest apis');
});
// Two routes are defined below
app.post('/register', signupValidation, (req, res, next) => {
  // your registration code
  // handles user registration logic in the callback function.
});
app.post('/login', loginValidation, (req, res, next) => {
  // your login code
  // handles user login logic in the callback function.
});
// Handling Errors
// An error handling middleware function is defined below
app.use((err, req, res, next) => {
    // The error status code (statusCode) and error message are set if they are not already defined.
   // console.log(err);
   err.statusCode = err.statusCode || 500;
   err.message = err.message || "Internal Server Error";
   res.status(err.statusCode).json({
     message: err.message,
   });
});
// listens for incoming requests on port 3000
app.listen(3000,() => console.log('Server is running on port 3000'));

// In summary, the code sets up an Express server with routes for user registration and login. It uses middleware functions for request body parsing, validation using express-validator, and handles errors.