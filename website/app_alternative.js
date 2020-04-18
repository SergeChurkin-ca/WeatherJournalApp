/* Global Variables */
const apikey = 'bbbec3ba75bc468635dca07422eb073f';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';

const messageBody = document.getElementById('content');

const city = document.getElementById('city').value;

const feelings = document.getElementById('feelings').value;


document.getElementById('generate').addEventListener('click', performAction);

// Event listener and rendering message on page
function performAction() {
    fetch(baseURL + 'q=' + city + '&appid=' + apikey)
        .then(res => res.json())
        .then(data => {
            console.log(data.name);
            messageBody.innerHTML = `${data.name},${data.sys.country} ${Math.round(data.main.temp -273.15)}C ${data.weather[0].description}, feels like ${Math.round(data.main.feels_like -273.15)}C. <br>${feelings}`;
        })
        .catch(error => console.log(error))
}