// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');


// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Serverconst port = 
const port = 8000;
const server = app.listen(port, listening);

function listening() {
    console.log('Server is running');
    console.log(`running on localhost ${port}`);
}


app.get('/get', (req, res) => {
        res.send(projectData);
    })
    // Post Route
app.post('/add', function(req, res) {
    projectData = req.body;
    console.log('post request: received');
    console.log(projectData);
    res.send('Post received');

});