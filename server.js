const express = require('express');

// Creating server
const app = express();

// Sets port
const PORT = process.env.PORT || 8000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Server listener
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});