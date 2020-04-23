// import { response } from "express";

/* Global Variables */
const apikey = 'bbbec3ba75bc468635dca07422eb073f';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';



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
// -----------------------------------------
const fetchWeather = async(baseURL, city, apikey) => {
    try {
        const request = await fetch(
            `${baseURL}q=${city}&appid=${apikey}`,
        )
        const result = await request.json()
            // destructuring of the result object
        const {
            main: { temp },
        } = result
        return temp
    } catch (error) {
        throw error
    }
}

// ------------------------------------------
// Helper functions 
// ------------------------------------------


// ------------------------------------------
// Post Request to store data, temp and user input
// ------------------------------------------
const saveData = async() => {
    try {
        await fetch('/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
    } catch (error) {
        throw error
    }
}

// ------------------------------------------
// Update UI
// ------------------------------------------
const updateUI = async() => {
    date.innerHTML = newDate;
    temp.innerHTML = `${temp}`
    content.innerHTML = feelings
}

// ------------------------------------------
// Event listener
// ------------------------------------------
button.addEventListener('click', () => {
    fetchWeather(baseURL, city.value, apikey)
        .then(temp => {
            return { date: newDate, temp, content: feelings.value }
        })
        .then(data => {
            saveData('/add', data)
            return data
        })
        .then(({ temp, date, content }) => updateUI(temp, date, content))
        .catch(error => {
            console.log(error)
        })
})

// fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=bbbec3ba75bc468635dca07422eb073f')