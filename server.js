process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// Import necessary modules
var express = require('./config/express');

// Create an Express.js application instance
var app = express();

// Export the Express app for use in other modules
module.exports = app;

// Start the server on port 5000
app.listen(5000, function () {
  console.log('Server running at http://localhost:5000/');
});