// --------------------------------------------------
// Global variables
// --------------------------------------------------
const apikey = 'bbbec3ba75bc468635dca07422eb073f';
const baseURL = 'https://api.openweathermap.org/data/2.5/weather?';

const messageBody = document.getElementById('content');


const postImage = new Image();

// --------------------------------------------------
// Get API url and set the date
// --------------------------------------------------
const endpointUrl = city => finalApiUrl = `${baseURL}q=${city}&appid=${apikey}`;
let d = new Date();
let newDate = d.getMonth() + '/' + d.getDate() + '/' + d.getFullYear();

// --------------------------------------------------
// GET posts from server
// --------------------------------------------------

const getPosts = async(url = '') => {
    const posts = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    try {
        const records = await posts.json();
        return records;
    } catch (error) {
        console.error('getPosts');
    }
}

// --------------------------------------------------
// GET the Weather from API
// --------------------------------------------------

const getWeather = async(url = '') => {
    const res = await fetch(url);
    try {
        const data = await res.json();
        return data;

    } catch (error) {
        console.error('getWeather');
        alert('Please check your selection');
        return false;
    }
};
// --------------------------------------------------
// POST record to local server
// --------------------------------------------------

const postData = async(url = '', data = {}) => {
        const response = await fetch(url, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data),
        });
        try {
            const res = await response.json();
            return true;
        } catch (error) {
            console.error('postData');
            return false;
        }
    }
    // --------------------------------------------
    // Route posts, post on local server
    // --------------------------------------------
const addPost = () => {
    getPosts('/get').then(data => {
        updateUI(data);
    });
};

// --------------------------------------------------
// Event listener adds a new post
// --------------------------------------------------
const addRecordToPosts = (e) => {
    e.preventDefault();

    const city = document.getElementById('city').value;
    const feelings = document.getElementById('feelings').value;

    // Display new background image of choice
    fetch(`https://pixabay.com/api/?key=16180248-8ef6bbd5f7c532a0d387fef96&q=${city}&image_type=photo&pretty=true&category=travel`)
        .then(res => res.json())
        .then(
            result => {
                const imgurl = result.hits.map(
                    hit => hit.largeImageURL
                ).join('');
                postImage.src = imgurl[0];
                console.log(imgurl)
                document.body.style.background = "url(" + imgurl + ") no-repeat";
                document.body.style.backgroundSize = "cover";
            },
            error => {
                console.log(error);
            }
        );


    if (feelings.length < 5) {
        alert('please provide your input');
        return;
    }

    getWeather(endpointUrl(city))
        .then(data => {
            // variables to include in post
            if (data) {
                const newRecord = {}
                newRecord.date = newDate;
                newRecord.temp = data.main.temp;
                newRecord.content = feelings;
                newRecord.feelslike = data.main.feels_like;
                newRecord.city = data.name;
                newRecord.country = data.sys.country;
                newRecord.description = data.weather[0].description;
                newRecord.postImage = postImage;
                postData('/add', newRecord)
            }
        })
        .then(addPost)
        .then(clearInputFields)
        .catch((error) => console.log(error, window.alert("Can't find it. Is the city spelled right? Maybe try another option?")))
}

// --------------------------------------------------
// Update UI
// --------------------------------------------------

const updateUI = (items) => {
    let html = items.map((item => {
        return ` 
        <p>
        ${item.date} ${item.cityInput},${item.country}<br>
        ${Math.round(item.temp -273.15)}C 
        feels like ${Math.round(item.feelslike -273.15)}C, ${item.description}<br>
        ${item.content} 
        </p>`;

    })).join(" ");

    messageBody.innerHTML = html;

}

// --------------------------------------------
// Start execution
// --------------------------------------------
addPost();

// EVent lisetener 
document.getElementById('generate').addEventListener('click', addRecordToPosts);

// --------------------------------------------
// Clear Input Fields
// --------------------------------------------
function clearInputFields() {
    document.getElementById("myForm").reset();
}