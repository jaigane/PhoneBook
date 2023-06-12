const express = require('express');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set up static files directory
app.use(express.static('public'));

// Define the root route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/home.html');
});

// Define the index route
app.get('/index', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
