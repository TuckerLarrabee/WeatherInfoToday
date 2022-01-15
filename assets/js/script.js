const cityFormEL = document.querySelector('#cityFormEl');
const citySearchInputEl = document.querySelector('#cityName');
const searchButton = document.querySelector('#searchBtn');
// const artistsSimilarToEl = document.querySelector('#artistsSimilarToEl');
const mostRecentSearchContainerEL = document.querySelector('#mostRecentSearchContainer');
// const searchedArtistURL = document.querySelector('#searchedArtistURL');
const citySearchedContainerEl = document.querySelector('#citySearchedContainer');
const apiKey = '41eb6956db0f8e0973687b41c218ffa0'



function getLatLon() {
    let city = citySearchInputEl.value;
    console.log(city)
    let apiUrl = ('api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
    console.log(apiUrl)

    fetch(apiUrl).then(function (response) {
        response.json().then(function (data) {
            console.log(data)

        })

    }
    )
}

searchButton.addEventListener('click', getLatLon)



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