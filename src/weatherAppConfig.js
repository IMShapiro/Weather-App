const weatherAPIKey = import.meta.env.VITE_WEATHER_API_KEY;

export async function getWeatherData(query){
    let weatherData;
    
    if(query){
        localStorage.setItem("lastQuery",query);
    }
    else if(!query && localStorage.getItem("lastQuery")){
        query = localStorage.getItem("lastQuery");
    }
    else{
        query = "London";
    }

    
    let url = `https://api.weatherapi.com/v1/current.json?key=${weatherAPIKey}&q=${query}&aqi=no`;
    try{
        await fetch(url)
            .then(response => {
                if(!response.ok){
                    console.log("Error");
                }
                return response.json()
            })
            .then(data => {
                weatherData = data;
                return data;
            })
            .catch(error => console.error(error))
    }catch(error){
        console.error(error);
    }
    
    return weatherData;
}

