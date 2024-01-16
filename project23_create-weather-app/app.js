//WEATHER APP

const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
let loading = false;
const card = document.querySelector(".card");

const apiKey = "686147d38e13e9f47868ef1104eeffb4";

//add event form
weatherForm.addEventListener("submit", async (event) => {

    event.preventDefault();// chan khong cho gui form di
    const city = cityInput.value;

    if(city && city.length > 0){
        //console.log(city);
        try{
            //get data
            const weatherData = await getWeatherData(city);
            console.log(weatherData);
            displayWeatherInfo(weatherData);


        }catch(err){
            console.error(err);
            displayError(err);
        }

    }else{
        displayError("Please enter a city");
    }

})

//get data
async function getWeatherData(city){
    //get data form weather api
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    //const data = response.json();
    //console.log(data);

    if(response.status !== 200) {
        throw new Error("Could not fetch weather data");
    }

    return await response.json();
}

//Weather info
function displayWeatherInfo(data){
    //console.log(data);
    const { name: city, 
            main:{temp, humidity}, 
            weather:[{description, id, icon}]} = data;

    card.textContent = "";
    card.style.display = "flex";

    const cityDisplay = document.createElement("h1");
    const tempDisplay = document.createElement("p");
    const humidityDisplay = document.createElement("p");
    const descDisplay = document.createElement("p");
    let weatherEmoji = document.createElement("img");
    let iconUrl = `https://openweathermap.org/img/wn/${icon}.png`;

    cityDisplay.textContent = city;
    cityDisplay.classList.add("cityDisplay");

    tempDisplay.textContent = `${(temp - 273.15).toFixed(0)}°C`;
    //tempDisplay.textContent = `${((temp - 273.15) * (9/5) + 32).toFixed(1)}°F`;
    tempDisplay.classList.add("tempDisplay");

    humidityDisplay.textContent = `Humidity: ${humidity}%`;
    humidityDisplay.classList.add("humidityDisplay");

    descDisplay.textContent = description;
    descDisplay.classList.add("descDisplay");

    weatherEmoji.src = iconUrl;
    weatherEmoji.classList.add("weatherEmoji");

    card.appendChild(cityDisplay);
    card.appendChild(tempDisplay);
    card.appendChild(humidityDisplay);
    card.appendChild(descDisplay);
    card.appendChild(weatherEmoji);

}

//Emoji
function getWeatherEmoji(weatherId, weatherIcon){

    let iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
    switch (true) {
        case (weatherId >= 200 && weatherId <= 300):
            return "⛈";
            break;
        case (weatherId >= 300 && weatherId < 400):
            return "🌨";
            break;
        case (weatherId >= 500 && weatherId < 600):
            return "☔";
            break;
        case (weatherId >= 600 && weatherId < 700):
            return "❄";
            break;
        case (weatherId >= 700 && weatherId < 800):
            return "🌫";
            break;
        case (weatherId === 800):
            return "🌞";
            break;
        case (weatherId >= 801):
            return "☁";
            break;
        default:
            return "?";
    }
}

//errer
function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay");
    
    //hide weather info
    card.textContent = "";
    //show card
    card.style.display = "flex";
    //append error in card
    card.appendChild(errorDisplay);
}