const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('<h5>Hello Douchebag</h5>');
});

// Listen for the port that the server is running on and display a message in console
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
