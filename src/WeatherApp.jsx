import InfoBox from './InfoBox';
import SearchBox from './searchBox';
import { useState } from 'react';

export default function WeatherApp(){
    const[weatherInfo,setWeatherInfo]=useState({ 
        city: "Chandigarh",
        feelsLike:8.98,
        humidity: 49,
        temp: 8.98,
        tempMax: 8.98,
        tempMin:  8.98,
        weather: "clear sky",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return(
        <div>
           <h1>Weather App</h1>
           <SearchBox updateInfo={updateInfo}/>
           <InfoBox info={weatherInfo}/>
        </div>
    );
}