const express = require('express');
const bodyParser = require('body-parser');

// Configuring the database
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose')

mongoose.Promise = global.Promise;

// create express app
const app = express();

/*Allow our node app to use the routes defined(We can also define a file which imports routes for different)
components to make the management of the routes easier*/

require('./app/routes/routes.js')(app);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

// define a simple route
// app.get('/', (req, res) => {
//     res.json({ "message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes." });
// });

// listen for requests
app.listen(3001, () => {
    console.log("Server is listening on port 3001");
});