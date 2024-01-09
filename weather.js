let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

//let city = prompt("Please enter a city");
//city = city.toLowerCase();

//if (weather[city] !== undefined) {
//let temperature = weather[city].temp;
//let humidity = weather[city].humidity;
//let celsiusTemperature = Math.round(temperature);
//let fahrenheitTemperature = Math.round((temperature * 9) / 5 + 32);

//alert(
//`It is currently ${celsiusTemperature}°C (${fahrenheitTemperature}°F) in ${city}, with a humidity of ${humidity}%`;
// );
//} else {
//alert(
//`Sorry we don't know the weather for this city, try going to https://www.google.com/search?q=weather+${city}`
// );
//}

function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityName = document.querySelector("#current-city");
  cityName.innerHTML = searchInputElement.value;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
