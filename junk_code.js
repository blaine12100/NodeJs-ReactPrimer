// Find a single note with a noteId
// exports.findOne = (req, res) => {
//     Note.findById(req.params.noteId)
//         .then(note => {
//             if (!note) {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.noteId
//                 });
//             }
//             res.send(note);
//         }).catch(err => {
//             if (err.kind === 'ObjectId') {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.noteId
//                 });
//             }
//             return res.status(500).send({
//                 message: "Error retrieving note with id " + req.params.noteId
//             });
//         });
// };

// // Update a note identified by the noteId in the request
// exports.update = (req, res) => {
//     // Validate Request
//     if (!req.body.content) {
//         return res.status(400).send({
//             message: "Note content can not be empty"
//         });
//     }

//     // Find note and update it with the request body
//     Note.findByIdAndUpdate(req.params.noteId, {
//         title: req.body.title || "Untitled Note",
//         content: req.body.content
//     }, { new: true })
//         .then(note => {
//             if (!note) {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.noteId
//                 });
//             }
//             res.send(note);
//         }).catch(err => {
//             if (err.kind === 'ObjectId') {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.noteId
//                 });
//             }
//             return res.status(500).send({
//                 message: "Error updating note with id " + req.params.noteId
//             });
//         });
// };

// // Delete a note with the specified noteId in the request
// exports.delete = (req, res) => {
//     Note.findByIdAndRemove(req.params.noteId)
//         .then(note => {
//             if (!note) {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.noteId
//                 });
//             }
//             res.send({ message: "Note deleted successfully!" });
//         }).catch(err => {
//             if (err.kind === 'ObjectId' || err.name === 'NotFound') {
//                 return res.status(404).send({
//                     message: "Note not found with id " + req.params.noteId
//                 });
//             }
//             return res.status(500).send({
//                 message: "Could not delete note with id " + req.params.noteId
//             });
//         });
// };

// Create a new Note
// app.post('/notes', notes.create);

// Retrieve a single Note with noteId
// app.get('/notes/:noteId', notes.findOne);

// Update a Note with noteId
// app.put('/notes/:noteId', notes.update);

// Delete a Note with noteId
// app.delete('/notes/:noteId', notes.delete);

// Create and Save a new Note
// exports.create = (req, res) => {
//     // Validate request
//     if (!req.body.content) {
//         return res.status(400).send({
//             message: "Note content can not be empty"
//         });
//     }

//     // Create a Note
//     const note = new Note({
//         title: req.body.title || "Untitled Note",
//         content: req.body.content
//     });

//     // Save Note in the database
//     note.save()
//         .then(data => {
//             res.send(data);
//         }).catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while creating the Note."
//             });
//         });
// };

// // Retrieve and return all notes from the database.
// exports.findAll = (req, res) => {
//     Note.find()
//         .then(notes => {
//             res.send(notes);
//         }).catch(err => {
//             res.status(500).send({
//                 message: err.message || "Some error occurred while retrieving notes."
//             });
//         });
// };

// Retrieve all Notes
// app.get('/notes', notes.findAll);

// https://www.callicoder.com/node-js-express-mongodb-restful-crud-api-tutorial/