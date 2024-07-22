export const weatherAPIKey = import.meta.env.VITE_WEATHER_API_KEY;

// export function getWeatherData(weatherData){
//     const url = `https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=London&aqi=no`;
//         fetch(url)
//           .then(response => {
//             if (!response.ok) {
//               throw new Error('Network response was not ok');
//             }
//             weatherData = response.json();
//           })
//           .catch(error => {
//             console.error('There was a problem fetching the data:', error);
//           });
          
//           return weatherData;
//         }
// console.log("Weather Data:", weatherData);