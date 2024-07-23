import { useEffect, useState } from 'react';
import './App.css';
import { getWeatherData } from "./weatherAppConfig";

function App() {

  const [query,setQuery] = useState("");
  const [weatherData, setWeatherData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const updateData = async () =>{
      setWeatherData(await getWeatherData());
      setLoading(false);
    }
    updateData();
  }, []); 

  function handleChange(e){
    e.preventDefault();
    setQuery(e.target.value);
  }

  async function handleSubmit(){
    setLoading(true);
    setWeatherData(await getWeatherData(query));
    setLoading(false);
  }


  if(loading){
    return (
      <div className="container d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
      
  }

  if(weatherData){
    return (
      <div className='container'>
        <div className="row">
          <h1>Weather App</h1>
          <form action="">
            <input 
              type="text"
              name="query"
              placeholder="Type in a city..."
              className="form-control"
              value={query}
              onChange={handleChange}
              />
            <button className="btn btn-success" onClick={handleSubmit}>Search</button>
          </form>
        </div>

        <div className="row text-center location">
          <h4>{weatherData.location.country}: {weatherData.location.name}</h4>
          <p><strong>{weatherData.location.region}</strong></p>
          <p><b>Local time: </b>{weatherData.location.localtime}</p>
        </div>

        <div className="row p-1">
          <div className="col text-center">
            <img src={weatherData.current.condition.icon} className="img-fluid w-25"/>
            <p>{weatherData.current.condition.text}</p>
            <h2>{weatherData.current.temp_c}&deg;C</h2>
            <sub>Feels like: {weatherData.current.feelslike_c} &deg;C</sub>
          </div>
        </div>

        <div className="row p-1">
          <div className="col card m-1">
              <p><strong>Wind degree:</strong> {weatherData.current.wind_degree}</p>
              <p><strong>Wind direction:</strong> {weatherData.current.wind_dir}</p>
              <p><strong>Wind speed:</strong> {weatherData.current.wind_kph} km/h</p>
              <p><strong>Wind speed:</strong> {weatherData.current.gust_kph} km/h</p>
          </div>

          <div className="col card m-1">
            <p><strong>Humidity:</strong> {weatherData.current.humidity}</p>
            <p><strong>Visibility:</strong> {weatherData.current.vis_km} km</p>
            <p><strong>UV:</strong> {weatherData.current.uv}</p>
            <p><strong>Precipitation: </strong>{weatherData.current.precip_in} in</p>
          </div>
        </div>
        <div>
          <p><strong>Weather Last Updated:</strong> {weatherData.current.last_updated}</p>
        </div>
      </div>
    )
  }else{
    return <div>No weather data to show...</div>
  }
}

export default App