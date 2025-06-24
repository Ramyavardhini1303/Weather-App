const apiKey = "e082c608ddae568de253251acfb7b43a";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status === 404) {
    alert("City not found");
    return;
  }
  const data = await response.json();

  // Update text
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  // Update icon based on weather condition
  const condition = data.weather[0].main;
  if (condition === "Clouds") {
    weatherIcon.src = "images/images/clouds.png";
  } else if (condition === "Clear") {
    weatherIcon.src = "images/images/clear.png";
  } else if (condition === "Rain") {
    weatherIcon.src = "images/images/rain.png";
  } else if (condition === "Drizzle") {
    weatherIcon.src = "images/imagesdrizzle.png";
  } else if (condition === "Mist") {
    weatherIcon.src = "images/images/mist.png";
  } else {
    // Fallback icon if unknown condition
    weatherIcon.src = "images/images/snow.png";
  }
}

// Search button click event
searchBtn.addEventListener("click", () => {
  if (searchBox.value.trim() !== "") {
    checkWeather(searchBox.value.trim());
  }
});
