const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Setup Pug
app.set('view engine', 'pug');

// import Routes
const mainRoutes = require('./routes');
const projectRoutes = require('./routes/projects');

// Create static Route for public folder which contains CSS and JS
app.use('/static', express.static('public'));

app.use(mainRoutes);
app.use('/projects', projectRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error Handler
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error', err);
});

// Listen for the port that the server is running on and display a message in console
app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}`);
});
