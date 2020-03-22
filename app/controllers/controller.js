/*Here we are exporting the functions to the routes So when that route gets called,the required
function gets called using the model(s) that we can import as we need*/

const Note = require('../models/model.js');

// Retrieve all distinct localtions where the battles have occured
exports.findRegion = (req, res) => {
    Note.find({}).distinct("location")
        .then(notes => {
            // console.log(notes)
            res.send({ "region": notes });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};


// Retrieve and return all battles from the database with a specific condition.
exports.search = (req, res) => {

    // console.log(req.query)

    var request_data = req.query

    if ("king" in request_data) {

        var king_data = request_data.king
        // console.log(king_data)
        delete request_data.king
        // console.log(request_data)

        Note.find({ "$or": [{ "attacker_king": king_data }, { "defender_king": king_data }], "$and": [request_data] }, { "_id": 0 }).then(notes => {
            // console.log(notes.length)
            res.send(notes)
        })
    }

    else {
        Note.find({ "$and": [request_data] }, { "_id": 0 }).then(notes => {
            // console.log(notes)
            res.send(notes)
        })
    }

};

// Retrieve and return all battles from the database with a specific condition.
exports.length_db = (req, res) => {
    Note.find({})
        .then(notes => {
            console.log(notes.length)
            res.send({ "length": notes.length });
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving notes."
            });
        });
};