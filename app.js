const express = require('express');
const app = express();
const route = require('./routes');

const PORT = process.env.PORT || 3000;
// app.use(express.static('public'));
// Setup Pug
app.set('view engine', 'pug');

// Listen for the port that the server is running on and display a message in console
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
