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


// Setup Serverconst port = 8080;
const port = 8000;
const server = app.listen(port, listening);

function listening() {
    console.log('Server is running');
    console.log(`running on localhost ${port}`);
}

app.get('/all', (req, res) => {
    res.send(projectData);
})

app.post('/add', (req, res) => {
    dataObj.date = req.body.date;
    dataObj.temp = req.body.temp;
    dataObj.content = req.body.content;

    projectData.push(dataObj);

    res.send(true);
})