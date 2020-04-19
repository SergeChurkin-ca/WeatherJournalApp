/* Global Variables */
const apikey = 'bbbec3ba75bc468635dca07422eb073f';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';

const messageBody = document.getElementById('content');

const city = document.getElementById('city').value;

const feelings = document.getElementById('feelings').value;


document.getElementById('generate').addEventListener('click', performAction, false);
document.getElementById('generate').addEventListener('click', addPost, false);

// Event listener and rendering message on page
function performAction() {
    fetch(baseURL + 'q=' + city + '&appid=' + apikey)
        .then(res => res.json())
        .then(data => {
            console.log(data.name);
            messageBody.innerHTML = `${data.name},${data.sys.country} ${Math.round(data.main.temp -273.15)}C ${data.weather[0].description}, feels like ${Math.round(data.main.feels_like -273.15)}C. <br>${feelings}<br>`;
        })
        .catch(error => console.log(error))
}

// POST
function addPost(e) {
    e.preventDefault();

    let city = document.getElementById('city').value;
    let feelings = document.getElementById('feelings').value;

    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ city, feelings })
        })
        .then(res => res.json())
        .then((data) => console.log(data))
}

// GET posted messages