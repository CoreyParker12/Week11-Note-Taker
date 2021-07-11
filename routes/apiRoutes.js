// Require db.json
const db = require('../db/db.json');

// ROUTES
module.exports = (app) => {

  // Get the notes database from the db.json file
  app.get('/api/notes', (req, res) => res.json(db));


  app.post('/api/notes', (req,res) => res.json(db));

}