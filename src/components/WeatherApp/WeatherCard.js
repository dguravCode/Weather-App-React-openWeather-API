import React, { useEffect, useState } from 'react'

const WeatherCard = ({ tempInfo}) => {
  const [weatherState, setWeatherState] = useState(null);

  const {
        temp,
        pressure,
        humidity,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      } = tempInfo;

    
  useEffect(() => {
    if (weatherMood) {
      switch (weatherMood) {
        case "Clouds": 
          setWeatherState("wi-day-cloudy");          
          break;
        case "Sunny": 
          setWeatherState("wi-day-sunny");          
          break;
        case "Haze": 
          setWeatherState("wi-day-fog");          
          break;
        case "Rain": 
          setWeatherState("wi-showers");          
          break;
        case "Mist": 
          setWeatherState("wi-dust");          
          break;      
        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  },[weatherMood])

  // converting in secconds
  const sunsetTime = new Date(sunset * 1000).toLocaleTimeString("en-US", { hour12: true });

  return (
    <>
      {/* temperature card */}
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherState}`}></i>
        </div>

        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}&deg;</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{weatherMood}</div>
            <div className="place">{name}, {country}</div>
          </div>
        </div>

        {/* TimeZone */}
        <div className="date">
          {tempInfo?.timezone !== undefined
            ? new Date(
                Date.now() +
                  (tempInfo.timezone + new Date().getTimezoneOffset() * 60) * 1000
              ).toLocaleString(navigator.language, { hour12: true })
            : "Loading..."}
        </div>

        {/* 4 column section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {sunsetTime} <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WeatherCard;
