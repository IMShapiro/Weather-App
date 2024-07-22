import { useEffect, useState } from 'react';
import './App.css';
import { weatherAPIKey } from './weatherAppConfig';

function App() {

  const url = `https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=London&aqi=no`;
  const [weatherData, setWeatherData] = useState({});

  useEffect(()=>{
    const getWeatherData = async () =>{
          await fetch(url)
            .then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              setWeatherData(response.json());
              console.log(weatherData);
            })
            .catch(error => {
              console.error('There was a problem fetching the data:', error);
            });
    }

    getWeatherData();
  }, []); 

  return (
    <div className='container'>
     <h1></h1>
     <p>City Name</p>
     <p>Condition</p>
     <p>0</p>
     <img src='#'/>
     <div>
      <p>Wind</p>
      <p>Humidity</p>
      <p>Visibility</p>
     </div>
    </div>
  )
}

export default App