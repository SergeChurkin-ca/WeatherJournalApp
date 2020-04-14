//import { response } from "express";

//import { response } from "express";

/* Global Variables */
const apikey = 'bbbec3ba75bc468635dca07422eb073f';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';


const kelvinToCelsius = kelvins => Math.round(Number(kelvins) - 273.15);

const messageBody = document.getElementById('content');

const city = document.getElementById('city').value;

const feelings = document.getElementById('feelings').value;
const button = document.getElementById('generate');


const date = document.getElementById('date');
const temp = document.getElementById('temp');


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// ------------------------------------------
// Fetch functions 
// ------------------------------------------


/* fetch('https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=bbbec3ba75bc468635dca07422eb073f')
    .then(response => response.json())
    .then(data => generateMessage(data));
 */
// ------------------------------------------
// Helper functions 
// ------------------------------------------

function checkStatus(response) {
    if (response.ok) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}


/* 
API call:
api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key} */


// ------------------------------------------
// Event listener and generate url
// ------------------------------------------
button.addEventListener('click', generateMessage, false);
button.addEventListener('click', postData, false);


function generateMessage(e) {

    getUrl(baseURL, city, apikey)

}

const getUrl = async(baseURL, city, apikey) => {

    const res = await fetch(baseURL + 'q=' + city + '&appid=' + apikey)
    console.log(res)

    try {
        const data = await res.json();
        const html = `
    <p>${data.name},${data.sys.country} ${Math.round(data.main.temp -273.15)}C ${data.weather[0].description}. ${feelings}</p>
    `;
        messageBody.innerHTML = html;
        console.log(data);
        return data;
    } catch (error) {
        console.log("error", error);
        window.alert('please check your selection')
            // appropriately handle the error
    }
}

// ------------------------------------------
// Post Data
// ------------------------------------------
function postData(e) {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ city, feelings })
        })
        .then(checkStatus)
        .then(res => res.json())
        .then(data => console.log(data))
}