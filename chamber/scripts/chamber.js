
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const forecastBox = document.getElementById('forecast');

const API_KEY = '4feb6b4e5e7d76f444327222cfcdb424';
const CITY = 'Cape Town';
const UNITS = 'metric';


getApiWeather();
getSpotlights();

// Hamburger menu
document.getElementById('ham-btn').addEventListener('click', () => {
  document.getElementById('nav-bar').classList.toggle('show');
  document.getElementById('ham-btn').classList.toggle('show');
});



async function getApiWeather() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=${UNITS}`;
  try {
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      displayResults(data);
    } else {
      throw Error(await res.text());
    }
  } catch (error) {
    console.log("Weather Error:", error);
  }
}

function displayResults(data) {
  const today = data.list[0];
  currentTemp.innerHTML = `${today.main.temp.toFixed(1)}&deg;C`;
  const iconSrc = `https://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`;
  captionDesc.textContent = today.weather[0].description;
  weatherIcon.setAttribute('src', iconSrc);
  weatherIcon.setAttribute('alt', today.weather[0].description);

  // Forecast for 3 upcoming days (filter 12:00:00 entries)
  const daily = data.list.filter(item => item.dt_txt.includes("12:00:00"));
  forecastBox.innerHTML = "";
  daily.slice(1, 4).forEach(day => {
    const date = new Date(day.dt_txt).toLocaleDateString("en-US", { weekday: 'short' });
    forecastBox.innerHTML += `
      <div class="forecast-item">
        <strong>${date}</strong>: ${day.main.temp.toFixed(1)}&deg;C
      </div>`;
  });
}


async function getSpotlights() {
    
  const response = await fetch("data/members.json");
  const data = await response.json();

  const silverGold = data.members.filter(m => m.membership === "Gold" || m.membership === "Silver");

  const shuffled = silverGold.sort(() => 0.5 - Math.random()).slice(0, 3);
  const spotlightContainer = document.querySelector(".spotlight-container");

  shuffled.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="images/${member.photo}" alt="${member.name} logo" loading="lazy">
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.url}" target="_blank">Visit Website</a>
      <p class="level">${member.membership} Member</p>
    `;
    spotlightContainer.appendChild(card);
  });
}


