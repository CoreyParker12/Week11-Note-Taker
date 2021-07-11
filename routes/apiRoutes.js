// Require db.json
const db = require('../db/db.json');

// Require unique id generator
const { v4: uuidv4 } = require('uuid');

// GET, POST, and DELETE
module.exports = (app) => {

  // Get the notes database from the db.json file
  app.get('/api/notes', (req, res) => res.json(db));

  // Posts the note to the application
  app.post('/api/notes', (req,res) => {

    note = req.body;

    // Adds a unique id to the end of the object
    note.id = uuidv4();

    // Pushes the note
    db.push(note);
    res.json(true);
  });

  app.delete('/api/notes/:id', (req,res) => {
    
    // Grabs the id
    deleteNote = req.params.id;

    // Logic to find the note associated with the id and deletes it
    for (let i = 0; i < db.length; i++) {
      if (deleteNote === db[i].id) {
        return res.json(db.splice(i, 1));
      }
    }
  });
};