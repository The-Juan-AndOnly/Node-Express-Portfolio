const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
// app.use(express.static('public'));
// Setup Pug
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
});

// Listen for the port that the server is running on and display a message in console
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
