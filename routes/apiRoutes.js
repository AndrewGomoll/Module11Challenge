const fs = require("fs");

const router = require("express").Router();
const path = require('path')

router.get("/notes", (req, res)=>{
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json')))
    res.json(notes)
})

router.post("/notes", (req, res)=>{
    const newNote = {
        title: req.body.title,
        text: req.body.text,
        id: Math.random()
      };
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json')))
    notes.push(newNote)
    fs.writeFileSync(path.join(__dirname,'../db/db.json'), JSON.stringify(notes))
    //const notes = JSON.parse(fs.readFileSync(path.join(__dirname,'../db/db.json')))
    res.json(newNote)
})

router.delete("/notes/:id", (req, res)=> {
    let id = parseInt(req.params.id);
    for(i = 0; i < note.length; i++)
    {
        if(id === notes[i].id)
        {
            notes.splice(i, 1);
            let noteJSON = JSON.stringify(notesData, null, 2);
            notes.push(noteJSON)
            fs.writeFileSync(path.join(__dirname,'../db/db.json'), JSON.stringify(notes))
        }
    }
});


module.exports= router;