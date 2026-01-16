# Weather CLI

A simple Node.js CLI application that fetches weather data using Open-Meteo and Nominatim APIs.

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Usage

Run the application with a city name:

```bash
npm start [city]
```

Or directly:

```bash
node index.js [city]
```

If no city is provided, it defaults to London.

## Example

```bash
npm start New York
```

Output: `New York: Temp: 5.2°C, Humidity: 75%, Wind: 15 km/h, Rain Chance: 20%`

## API

This app uses Nominatim for geocoding (city to coordinates) and Open-Meteo for weather data (temperature, humidity, wind speed, precipitation probability). No API key required.i
hi
