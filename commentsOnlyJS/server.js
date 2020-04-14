// Setup empty JS object to act as endpoint for all routes
// Express to run server and routes


// Start up an instance of app


/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.


// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder

// Spin up the server
const port = 8080;
const server = app.listen(port, listening);
// Callback to debug

function listening() {
    console.log('Server is running');
    console.log(`running on localhost ${port}`);
}

app.get('/', function(req, res) {
    res.send('All set and running')
})

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route