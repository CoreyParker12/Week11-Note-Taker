// Require db.json
const db = require('../db/db.json');
const { v4: uuidv4 } = require('uuid');

// ROUTES
module.exports = (app) => {

  // Get the notes database from the db.json file
  app.get('/api/notes', (req, res) => res.json(db));

  // app.get('/api/notes/:id', (req,res) => {
  //   deleteNote = req.params.id;
  //   console.log(deleteNote);

  //   for (let i = 0; i < db.length; i++) {
  //     if (deleteNote === db[i].id) {
  //       return res.json(db[i]);
  //     }
  //   }

  // })

  // POST

  app.post('/api/notes', (req,res) => {

    note = req.body;

    note.id = uuidv4();
    console.log(note);

    db.push(note);

    res.json(true);
  });

  app.delete('/api/notes/:id', (req,res) => {
    deleteNote = req.params.id;

    for (let i = 0; i < db.length; i++) {
      if (deleteNote === db[i].id) {
        return res.json(db.splice(i, 1));
      }
    }
  });

}