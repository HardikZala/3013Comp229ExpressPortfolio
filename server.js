// Import necessary modules
var express = require('./config/express');
var app = express();

// Configure Express to serve static files from a "public" directory
app.use('/Content', express.static('public/Content'));

  console.log('Server running at http://localhost:5000/');
