const cityFormEL = document.querySelector('#cityFormEl');
const citySearchInputEl = document.querySelector('#cityName');
const searchButton = document.querySelector('#searchBtn');
const cityPrimarySearch = document.querySelector("#searchedCityPrimary");
const cityPrimaryTemp = document.querySelector("#cityPrimaryTemp");
const cityPrimaryWind = document.querySelector("#cityPrimaryWind");
const cityPrimaryHumidity = document.querySelector("#cityPrimaryHumidity");
const cityPrimaryUV = document.querySelector("#cityPrimaryUV");
const cityUVButton = document.querySelector("#UVButton");
const mostRecentSearchContainerEL = document.querySelector('#mostRecentSearchContainer');
const citySearchedContainerEl = document.querySelector('#citySearchedContainer');
const apiKey = '41eb6956db0f8e0973687b41c218ffa0'

//Five Day Forecast Variables
const forecastDateOne = document.querySelector("#forecastOne");
const forecastTempOne = document.querySelector("#tempOne");
const forecastWindOne = document.querySelector("#windOne");
const forecastHumidityOne = document.querySelector("#humidityOne");

const forecastDateTwo = document.querySelector("#forecastTwo");
const forecastTempTwo = document.querySelector("#tempTwo");
const forecastWindTwo = document.querySelector("#windTwo");
const forecastHumidityTwo = document.querySelector("#humidityTwo");

const forecastDateThree = document.querySelector("#forecastThree");
const forecastTempThree = document.querySelector("#tempThree");
const forecastWindThree = document.querySelector("#windThree");
const forecastHumidityThree = document.querySelector("#humidityThree");

const forecastDateFour = document.querySelector("#forecastFour");
const forecastTempFour = document.querySelector("#tempFour");
const forecastWindFour = document.querySelector("#windFour");
const forecastHumidityFour = document.querySelector("#humidityFour");

const forecastDateFive = document.querySelector("#forecastFive");
const forecastTempFive = document.querySelector("#tempFive");
const forecastWindFive = document.querySelector("#windFive");
const forecastHumidityFive = document.querySelector("#humidityFive");


function getLatLon() {
    let city = citySearchInputEl.value.trim();
    console.log(city);
    let apiUrl = ('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey);
    console.log(apiUrl);

    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            let today = new Date().toLocaleDateString();
            cityPrimarySearch.textContent = data.name + ' (' + today + ')';
            let tempConversion = data.main.temp;
            cityPrimaryTemp.textContent = 'Temp: ' + ((tempConversion - 273.15) * 9 / 5 + 32).toFixed(2) + '\u00B0F';
            let primaryWind = data.wind.speed;
            console.log(primaryWind);
            cityPrimaryWind.textContent = 'Wind: ' + primaryWind + ' MPH';
            let primaryHumidity = data.main.humidity;
            cityPrimaryHumidity.textContent = 'Humidity: ' + primaryHumidity + ' %';

            let lat = data.coord.lat;
            let lon = data.coord.lon;
            getFiveDay(lat, lon);
        })
    })
}

searchButton.addEventListener('click', getLatLon)


function getFiveDay(lat, lon) {
    let apiUrl = ('https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey);
    console.log(apiUrl)

    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data);

            /*Forecast Card One*/
            //next day forecast adding date to card[0]
            let dateOne = data.daily[1].dt;
            let forecastDate = new Date(dateOne * 1000).toLocaleDateString();
            console.log(forecastDate)
            forecastDateOne.textContent = forecastDate
            //next day forecast adding temp to card[0]
            let tempConversionOne = data.daily[1].temp.day;
            forecastTempOne.textContent = 'Temp: ' + ((tempConversionOne - 273.15) * 9 / 5 + 32).toFixed(2) + '\u00B0F';
            //next day forecast adding wind to card[0]
            let windOne = data.daily[1].wind_speed;
            forecastWindOne.textContent = 'Wind: ' + windOne + ' MPH';
            //next day forecast adding humidity to card[0]
            let humidityOne = data.daily[1].humidity;
            forecastHumidityOne.textContent = 'Humidity: ' + humidityOne + ' %'

            /*Forecast Card Two*/
            //next day forecast adding date to card[1]
            let dateTwo = data.daily[2].dt;
            let forecastDateSecond = new Date(dateTwo * 1000).toLocaleDateString();
            forecastDateTwo.textContent = forecastDateSecond
            //next day forecast adding temp to card[1]
            let tempConversionTwo = data.daily[2].temp.day;
            forecastTempTwo.textContent = 'Temp: ' + ((tempConversionTwo - 273.15) * 9 / 5 + 32).toFixed(2) + '\u00B0F';
            //next day forecast adding wind to card[1]
            let windTwo = data.daily[2].wind_speed;
            forecastWindTwo.textContent = 'Wind: ' + windTwo + ' MPH';
            //next day forecast adding humidity to card[1]
            let humidityTwo = data.daily[2].humidity;
            forecastHumidityTwo.textContent = 'Humidity: ' + humidityTwo + ' %'

            /*Forecast Card Three*/
            //next day forecast adding date to card[2]
            let dateThree = data.daily[3].dt;
            let forecastDateThird = new Date(dateThree * 1000).toLocaleDateString();
            forecastDateThree.textContent = forecastDateThird
            //next day forecast adding temp to card[2]
            let tempConversionThree = data.daily[3].temp.day;
            forecastTempThree.textContent = 'Temp: ' + ((tempConversionThree - 273.15) * 9 / 5 + 32).toFixed(2) + '\u00B0F';
            //next day forecast adding wind to card[2]
            let windThree = data.daily[3].wind_speed;
            forecastWindThree.textContent = 'Wind: ' + windThree + ' MPH';
            //next day forecast adding humidity to card[2]
            let humidityThree = data.daily[3].humidity;
            forecastHumidityThree.textContent = 'Humidity: ' + humidityThree + ' %'

            /*Forecast Card Four*/
            //next day forecast adding date to card[3]
            let dateFour = data.daily[4].dt;
            let forecastDateFourth = new Date(dateFour * 1000).toLocaleDateString();
            forecastDateFour.textContent = forecastDateFourth
            //next day forecast adding temp to card[3]
            let tempConversionFour = data.daily[4].temp.day;
            forecastTempFour.textContent = 'Temp: ' + ((tempConversionFour - 273.15) * 9 / 5 + 32).toFixed(2) + '\u00B0F';
            //next day forecast adding wind to card[3]
            let windFour = data.daily[4].wind_speed;
            forecastWindFour.textContent = 'Wind: ' + windFour + ' MPH';
            //next day forecast adding humidity to card[3]
            let humidityFour = data.daily[4].humidity;
            forecastHumidityFour.textContent = 'Humidity: ' + humidityFour + ' %'

            /*Forecast Card Five*/
            //next day forecast adding date to card[4]
            let dateFive = data.daily[5].dt;
            let forecastDateFifth = new Date(dateFive * 1000).toLocaleDateString();
            forecastDateFive.textContent = forecastDateFifth
            //next day forecast adding temp to card[4]
            let tempConversionFive = data.daily[5].temp.day;
            forecastTempFive.textContent = 'Temp: ' + ((tempConversionFive - 273.15) * 9 / 5 + 32).toFixed(2) + '\u00B0F';
            //next day forecast adding wind to card[4]
            let windFive = data.daily[5].wind_speed;
            forecastWindFive.textContent = 'Wind: ' + windFive + ' MPH';
            //next day forecast adding humidity to card[4]
            let humidityFive = data.daily[5].humidity;
            forecastHumidityFive.textContent = 'Humidity: ' + humidityFive + ' %'

            //Add UV To Primary Forecast
            let primaryUV = data.daily[0].uvi;
            // cityPrimaryUV.textContent = 'UV Index: ';
            cityUVButton.textContent = primaryUV;
            cityUVButton.classList.remove('is-success', 'is-warning', 'is-danger');
            if (primaryUV < 2) {
                cityUVButton.classList.add('button', 'is-success', 'is-rounded');
            } else if (primaryUV < 4) {
                cityUVButton.classList.add('button', 'is-warning', 'is-rounded');
            } else {
                cityUVButton.classList.add('button', 'is-danger', 'is-rounded')
            }

        })
    })
}


function searchedCities() {
    // localStorage.removeItem('lastfm');
    for (let i = 0; i < localStorage.length; i++) {
        let cityButtonEl = document.createElement('button');
        let storedCities = JSON.parse(localStorage.getItem(localStorage.key(i)));
        cityButtonEl.textContent = storedCities;
        cityButtonEl.classList.add("button")
        cityButtonEl.classList.add("is-info")
        cityButtonEl.classList.add("is-light")
        cityButtonEl.setAttribute('id', 'newCityButton')
        citySearchedContainerEl.append(cityButtonEl);

        // together with the event listener below, this function allows the user to see searched-for artist's information again
        function searchedCityInfo() {
            let cityName = cityButtonEl.textContent;

            getCityInfo(cityName);
        }
        cityButtonEl.addEventListener('click', searchedCityInfo);
    }
}

// function call for searchedCities() on load
searchedCities();

// adds a new city button when a new search is executed
function addCity() {
    let cityButtonEl = document.createElement('button');
    cityButtonEl.textContent = citySearchInputEl.value;
    cityButtonEl.classList.add("button")
    cityButtonEl.classList.add("is-info")
    cityButtonEl.classList.add("is-light")
    cityButtonEl.setAttribute('id', 'newCityButton')
    mostRecentSearchContainerEL.appendChild(cityButtonEl);

    // together with the event listener below, this function allows the user to see a just-searched-for artist's information again if they click back to it after clicking on an older searched-for artist's button
    function newCityInfo() {
        let cityName = cityButtonEl.textContent;

        getCityInfo(cityName);
    }

    cityButtonEl.addEventListener('click', newCityInfo);
}

function getCityInfo(city) {

}


function formSubmitHandler(event) {
    event.preventDefault();

    let cityName = citySearchInputEl.value.trim();

    if (cityName) {
        localStorage.setItem(JSON.stringify(cityName), JSON.stringify(cityName));
        getCityInfo(cityName);
        addCity();
        citySearchInputEl.value = '';
    } else {
        console.log("Input a city name");
    }
}

cityFormEL.addEventListener('submit', formSubmitHandler);