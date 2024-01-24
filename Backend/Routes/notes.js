const express = require("express");
const router = express.Router();
var fetchuser = require("Middleware\fetchuser.js");
const Note = require("ModelsNotes.js");
const { body, validationResult } = require("express-validator");

//----------------ROUTE 1------------------
//get all the notes using: GET "/api/auth/getuser". Login required

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured");
  }
});

//----------------ROUTE 2------------------
//adding new notes using: POST "/api/notes/addnote". Login required

router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Enter a valid title").isLength({ min: 5 }),
  ],
  async (req, res) => {
    try {
      const { title, description, tag } = req.body;

      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savedNote = await note.save();

      res.json(savedNote);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("INTERNAL SERVEE ERROR");
    }
  }
);

//----------------ROUTE 3------------------
//update notes using: PUT "/api/notes/updatenote". Login required

router.put(
    "/updatenote/:id",
    fetchuser,
    async (req, res) => {
      try {
        const { title, description, tag } = req.body;
        const newNote={};
        if(title){newNote.title=title};
        if(description){newNote.description=description};
        if(tag){newNote.tag=tag};

        //find the note to be updated
        let note= await Note.findById(req.params.id);
        if(!note){
            res.status(404).send("Not Found");
        }
        if(note.user.toString()!==req.user.id){ //to ensure you update ur own notes only
            return res.status(401).send("not allowed");
        }
        note= await Note.findByIdAndUpdate(req.params.id,{$set: newNote}, {new:true}) //if content is true
    } 
      catch (error) {
        console.error(error.message);
        res.status(500).send("INTERNAL SERVEE ERROR");
      }
    }
  );

  //----------------ROUTE 4------------------
//deleting notes using: DELETE "/api/notes/deletenote". Login required

router.delete(
    "/deletenote/:id",
    fetchuser,
    async (req, res) => {
      try {
        let note= await Note.findById(req.params.id);
        if(!note){
            res.status(404).send("Not Found");
        }
        if(note.user.toString()!==req.user.id){ //to ensure you update ur own notes only
            return res.status(401).send("not allowed");
        }
        note= await Note.findByIdAndDelete(req.params.id)
        res.json({"success": "Note has been deleted", note: note})
    } 
      catch (error) {
        console.error(error.message);
        res.status(500).send("INTERNAL SERVEE ERROR");
      }
    }
  );








module.exports = router;
