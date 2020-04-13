//import { response } from "express";

/* Global Variables */
const apikey = 'bbbec3ba75bc468635dca07422eb073f';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?';

const kelvinToCelsius = kelvins => Math.round(Number(kelvins) - 273.15);

const messageBody = document.getElementById('content');

const city = document.getElementById('city').value;
const feelings = document.getElementById('feelings').value;
const button = document.getElementById('generate');


const date = document.getElementById('date');
const temp = document.getElementById('temp');
const content = document.getElementById('content');


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();


// ------------------------------------------------
fetch('https://api.openweathermap.org/data/2.5/weather?q=Phuket&appid=bbbec3ba75bc468635dca07422eb073f')
    .then(response => response.json())
    .then(data => generateMessage(data));


function generateMessage(data) {

    const html = `
    <p>${data.name} ${data.main.temp -273.15}C</p>
    `;
    messageBody.innerHTML = html;
}

/* 
API call:
api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key} */