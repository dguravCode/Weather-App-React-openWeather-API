import React, { useEffect, useState } from 'react'
import WeatherCard from './WeatherCard';
import './style.css';

const Temperature = () => {
  const initialVal = "Goa";
  const [searchVal, setSearchVal] = useState(initialVal);
  const [tempInfo, setTempInfo] = useState({});

  const getWeatherInfo = async () => {
    try {
      const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&units=metric&appid=${apiKey}`;

      const result = await fetch(url);
      const data = await result.json();
      
      const {temp,pressure,humidity} = data.main;
      const {main:weatherMood} = data.weather[0];
      const {name} = data;
      const {speed} = data.wind;
      const {country,sunset} = data.sys;
      const timezone = data.timezone;

      const myNewWeatherInfo = {
        temp,
        pressure,
        humidity,
        weatherMood,
        name,
        speed,
        country,
        sunset,
        timezone,
      };  

      setTempInfo (myNewWeatherInfo);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => { //by default this fun should run at once
    getWeatherInfo();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input type="search"
           id="search" 
           className='searchTerm' 
           placeholder='search city..' 
           autoFocus 
           value={searchVal}
           onChange={(e) => setSearchVal(e.target.value) }
         />

          <button className="searchButton" type='button' onClick={() => getWeatherInfo()}>Search</button>
        </div>
      </div>

      {/* WeatherCard Component */}
      <WeatherCard tempInfo={tempInfo} />
    </>
  )
}

export default Temperature

//3:35
