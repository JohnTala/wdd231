

// const API_KEY = '4feb6b4e5e7d76f444327222cfcdb424'; // Replace with your OpenWeatherMap API key
// const CITY = 'Cape Town';
// const UNITS = 'metric'; // use 'metric' for Celsius

// // Hamburger menu
// document.getElementById('ham-btn').addEventListener('click', () => {
//   document.getElementById('nav-bar').classList.toggle('show');
//   document.getElementById('ham-btn').classList.toggle('show');
// });


// // Fetch current weather

// async function getWeather() {
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=${UNITS}`;

//   try {
//     const res = await fetch(url);
//     const data = await res.json();

//     const weatherBox = document.getElementById("weather");
//     weatherBox.innerHTML += `
//     <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon"  />
//     <div class="details">
//         <p><strong>${Math.round(data.main.temp)}°C</strong></p>
//         <p>${data.weather[0].main}</p>
//         <p>High: ${Math.round(data.main.temp_max)}°</p>
//         <p>Low: ${Math.round(data.main.temp_min)}°</p>
//         <p>Humidity: ${data.main.humidity}%</p>
//       </div
//   `;
  
//   } catch (error) {
//     console.log("Error loading current weather:", error);
//   }
// }
// // Fetch 3-day forecast
// async function getForecast() {
//   const url = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=${UNITS}`;
  
//  try{ const res = await fetch(url);
//   const data = await res.json();

//   const forecastBox = document.getElementById("forecast");
//   // forecastBox.innerHTML = "";

//    let count = 0;

//     for (let i = 0; i < data.list.length && count < 3; i++) {
//       if (data.list[i].dt_txt.includes("12:00:00")) {
//        const forecastDate = new Date(data.list[i].dt_txt);
//        const temp = Math.round(data.list[i].main.temp) + "°C";
     
//       const dayName = count === 0 ? "Today" : forecastDate.toLocaleDateString(undefined, { weekday: "long" });
      
//         const li = document.createElement("li");
//         li.innerHTML = `<p><strong>${dayName}:</strong>${temp}</p>`;
//         forecastBox.appendChild(li);

//         count++;
//       }
//     }
//   } catch (error) {
//     console.log("Error loading forecast:", error);
//   }

// }


// // DOM Elements
// const directory = document.getElementById('directory');
// const gridBtn = document.getElementById('grid-view');
// const listBtn = document.getElementById('list-view');

// // Toggle View Buttons
// gridBtn.addEventListener('click', () => {
//   directory.classList.add('grid');
//   directory.classList.remove('list','hide-images');
//    gridBtn.classList.add('active');
//   listBtn.classList.remove('active');
//   directory.style.marginBottom = '1rem'; // space between directory and footer

// });

// listBtn.addEventListener('click', () => {
//   directory.classList.add('list','hide-images');
//   directory.classList.remove('grid');
//    listBtn.classList.add('active');
//   gridBtn.classList.remove('active');
//   directory.style.marginBottom = '1rem'; // space between directory and footer

// });

// // Fetch and Display Members
// async function getMembers() {
//   try {
//     const response = await fetch('data/members.json');
//     if (!response.ok) throw new Error('Failed to fetch data');
//     const data = await response.json();
//     displayMembers(data.members);
//   } catch (error) {
//     console.error('Error loading members:', error);
//   }
// }

// function displayMembers(members) {
//   directory.innerHTML = ''; // Clear previous content

//   members.forEach(member => {
//     const card = document.createElement('div');
//     card.classList.add('card');

//     card.innerHTML = `
//       <img src="images/${member.photo}" alt="${member.name} logo">
//       <div><strong>${member.name}</strong></div>
//       <div>${member.address}</div>
//       <div>${member.phone}</div>
//        <a href="${member.url}" target="_blank" rel="noopener">Visit Website</a>
//       <div>Membership Level: ${['Member', 'Silver', 'Gold'][member.membershipLevel - 1]}</div>
//     `;

//     directory.appendChild(card);
//   });
// }


// window.addEventListener("DOMContentLoaded", () => {
//   // Set current year
//   document.getElementById("currentYear").textContent = new Date().getFullYear();

//   // Set last modified date and time
//   const modified = new Date(document.lastModified);
//   const options = {
//     year: 'numeric',
//     month: '2-digit',
//     day: '2-digit',
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit'
//   };
//   document.getElementById("lastModified").textContent = modified.toLocaleString(undefined, options);
// });


// // Initialize
// getMembers();

// // Run everything
// getWeather();
// getForecast();
// loadBusinesses();


const API_KEY = '4feb6b4e5e7d76f444327222cfcdb424';
const CITY = 'Cape Town';
const UNITS = 'metric';

// Hamburger menu
document.getElementById('ham-btn').addEventListener('click', () => {
  document.getElementById('nav-bar').classList.toggle('show');
  document.getElementById('ham-btn').classList.toggle('show');
});

// Fetch current weather
async function getWeather() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=${UNITS}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const weatherBox = document.getElementById("weather");
    weatherBox.innerHTML += `
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}" />
      <div class="details">
        <p><strong>${Math.round(data.main.temp)}°C</strong></p>
        <p>${data.weather[0].main}</p>
        <p>High: ${Math.round(data.main.temp_max)}°</p>
        <p>Low: ${Math.round(data.main.temp_min)}°</p>
        <p>Humidity: ${data.main.humidity}%</p>
      </div>
    `;
  } catch (error) {
    console.error("Error loading current weather:", error);
  }
}

// Fetch 3-day forecast
async function getForecast() {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=${UNITS}`;
  
  try {
    const res = await fetch(url);
    const data = await res.json();

    const forecastBox = document.getElementById("forecast");
    let count = 0;

    for (let i = 0; i < data.list.length && count < 3; i++) {
      if (data.list[i].dt_txt.includes("12:00:00")) {
        const forecastDate = new Date(data.list[i].dt_txt);
        const temp = `${Math.round(data.list[i].main.temp)}°C`;
        const dayName = count === 0 ? "Today" : forecastDate.toLocaleDateString(undefined, { weekday: "long" });

        const li = document.createElement("li");
        li.innerHTML = `<p><strong>${dayName}:</strong> ${temp}</p>`;
        forecastBox.appendChild(li);

        count++;
      }
    }
  } catch (error) {
    console.error("Error loading forecast:", error);
  }
}

// Toggle Directory View
const directory = document.getElementById('directory');
const gridBtn = document.getElementById('grid-view');
const listBtn = document.getElementById('list-view');

gridBtn.addEventListener('click', () => {
  directory.classList.add('grid');
  directory.classList.remove('list', 'hide-images');
  gridBtn.classList.add('active');
  listBtn.classList.remove('active');
  directory.style.marginBottom = '1rem';
});

listBtn.addEventListener('click', () => {
  directory.classList.add('list', 'hide-images');
  directory.classList.remove('grid');
  listBtn.classList.add('active');
  gridBtn.classList.remove('active');
  directory.style.marginBottom = '1rem';
});

// Load Directory Members
async function getMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Failed to fetch data');
    const data = await response.json();
    displayMembers(data.members);
  } catch (error) {
    console.error('Error loading members:', error);
  }
}

function displayMembers(members) {
  directory.innerHTML = '';

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('card');

    const membershipLevels = ['Member', 'Silver', 'Gold'];
    const levelText = membershipLevels[member.membershipLevel - 1] || 'Member';

    card.innerHTML = `
      <img src="images/${member.photo}" alt="${member.name} logo" loading="lazy">
      <div><strong>${member.name}</strong></div>
      <div>${member.address}</div>
      <div>${member.phone}</div>
      <a href="${member.url}" target="_blank" rel="noopener">Visit Website</a>
      <div><strong>Membership Level:</strong> ${levelText}</div>
    `;

    directory.appendChild(card);
  });
}

// Footer Date Logic
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  const modified = new Date(document.lastModified);
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  };
  document.getElementById("lastModified").textContent = modified.toLocaleString(undefined, options);
});

// Init App
getWeather();
getForecast();
getMembers();


