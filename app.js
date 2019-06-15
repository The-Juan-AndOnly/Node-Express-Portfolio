const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Setup Pug
app.set('view engine', 'pug');

const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/projects', projectRoutes);

// Listen for the port that the server is running on and display a message in console
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
