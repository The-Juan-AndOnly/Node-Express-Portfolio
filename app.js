const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Setup Pug
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// import Routes
const mainRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectRoute = require('./routes/projects');

// Create static Route for public folder which contains CSS and JS

app.use('/static', express.static('public'));

app.use(mainRoute);
app.use('/about', aboutRoute);
app.use('/project', projectRoute);

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
