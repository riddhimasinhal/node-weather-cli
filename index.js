#!/usr/bin/env node\
// #m

const city = process.argv[2] || 'London';

const geoUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`;

fetch(geoUrl)
  .then(res => res.json())
  .then(data => {
    if (data.length === 0) throw new Error('City not found');
    const lat = data[0].lat;
    const lon = data[0].lon;
    const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&hourly=relative_humidity_2m,windspeed_10m,precipitation_probability`;
    return fetch(weatherUrl);
  })
  .then(res => res.json())
  .then(data => {
    const current = data.current_weather;
    const humidity = data.hourly.relative_humidity_2m[0];
    const wind = data.hourly.windspeed_10m[0];
    const rain = data.hourly.precipitation_probability[0];
    console.log(`${city}: Temp: ${current.temperature}°C, Humidity: ${humidity}%, Wind: ${wind} km/h, Rain Chance: ${rain}%`);
  })
  .catch(err => console.error('Error fetching weather:', err.message));
 