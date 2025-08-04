
import { places } from './places.mjs';

const myplaces = document.querySelector('.destination');

myplaces.innerHTML = places.map((place) => {
    return `
    <article itemscope itemtype="https://schema.org/TouristAttraction">
        <img 
            src="images/${place.image_url}" 
            alt="Photo of ${place.name}" 
            loading="lazy" 
            width="300" height="200"
            itemprop="image"
        >
        <h2 itemprop="name">${place.name}</h2>
        <address itemprop="address">${place.address}</address>
        <p itemprop="description">${place.description}</p>
        <a 
            href="${place.url}" 
            target="_blank" 
            rel="noopener noreferrer" 
            itemprop="url"
            aria-label="Learn more about ${place.name}"
        >
            Learn More
        </a>
    </article>`;
}).join(" ");

const visitMessage = document.querySelector('.visit-message');

const lastVisit = localStorage.getItem('lastVisit');
const currentVisit = Date.now();
const oneDay = 1000 * 60 * 60 * 24;

let message = '';

if (!lastVisit) {
  message = 'Welcome! Let us know if you have any questions.';
} else {
  const daysPassed = Math.floor((currentVisit - Number(lastVisit)) / oneDay);
  if (daysPassed < 1) {
    message = 'Back so soon! Awesome!';
  } else if (daysPassed === 1) {
    message = 'You last visited 1 day ago.';
  } else {
    message = `You last visited ${daysPassed} days ago.`;
  }
}

visitMessage.textContent = message;
localStorage.setItem('lastVisit', currentVisit);
