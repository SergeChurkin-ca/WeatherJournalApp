//import { response } from "express";

//import { response } from "express";

/* Global Variables */
const apikey = 'bbbec3ba75bc468635dca07422eb073f';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';



const kelvinToCelsius = kelvins => Math.round(Number(kelvins) - 273.15);

const messageBody = document.getElementById('content');

const feelings = document.getElementById('feelings').value;
const button = document.getElementById('generate');


const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// ------------------------------------------
// Fetch functions 
// ------------------------------------------
// fetch('https://api.openweathermap.org/data/2.5/forecast/?q=London&cnt=5&appid=bbbec3ba75bc468635dca07422eb073f')
//     .then(response => response.json())
//     .then(data => console.log(data))

/* fetch('https://api.openweathermap.org/data/2.5/weather?q=Kiev&appid=bbbec3ba75bc468635dca07422eb073f')
    .then(response => response.json())
    .then(data => generateMessage(data));
 */
// ------------------------------------------
// Helper functions 
// ------------------------------------------


function generateMessage(data) {
    const html = `
    <p>${data.name},${data.sys.country} ${Math.round(data.main.temp -273.15)}C</p>
    `;
    messageBody.innerHTML = html;
}


/* 
API call:
api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key} */


// ------------------------------------------
// Event listener
// ------------------------------------------

button.addEventListener('click', generateURL);

function generateURL(e) {
    const city = document.getElementById('city').value;
    getUrl(baseURL, city, apikey)

}

const getUrl = async(baseURL, city, apikey) => {

    const res = await fetch(baseURL + 'q=' + city + '&appid=' + apikey)
    console.log(res)
    try {
        const data = await res.json();
        const html = `
    <p>${data.name},${data.sys.country} ${Math.round(data.main.temp -273.15)}C</p>
    `;
        messageBody.innerHTML = html;
        console.log(data)
        return data;

    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }

}

// https: //samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02