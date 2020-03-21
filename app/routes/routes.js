/*Here we are exporting the routes to the app and we are assigning a single function to every route
which is then defined in our controller file.So when that route gets called,all the associated 
request params get passed to that function which can be used to make our DB queries*/

module.exports = (app) => {
    const notes = require('../controllers/controller.js');

    //Length of All Battles
    app.get("/count", notes.length_db);

    //Get Distinct Areas of Battles as a list
    app.get('/list', notes.findRegion);

    //Get Search results based on search parameters
    app.get('/search', notes.search);
}