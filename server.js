// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');


// Setup empty JS Object to act as endpoint for all routes 
const projectData = {};


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

// GET route
app.get('/getProjectData', (req, res) => {
    res.send(projectData);
})

// empty JS object to enable adding new posts on page dynamically
const weatherData = [];

// Post Route
app.post('/add', (req, res) => {
    let dataObject = {}
    dataObject.date = req.body.date;
    dataObject.temp = req.body.temp;
    dataObject.cityInput = req.body.city;
    dataObject.country = req.body.country;
    dataObject.feelslike = req.body.feelslike;
    dataObject.description = req.body.description;
    dataObject.imgurl = req.body.postImage;
    dataObject.content = req.body.content;

    weatherData.push(dataObject);

    res.send(true);
    console.log('post has been received')
});

// Callback to complete GET '/all'
app.get('/get', (req, res) => {
    res.send(weatherData);
})