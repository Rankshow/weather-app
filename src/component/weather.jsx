import React from 'react'
import { useState, useEffect } from 'react';
import WeatherDetails from './weatherDetails';

const Weather = () => {
  const [ current, setCurrent ] = useState([]);

 const weatherApi = () => {
   fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m,rain,precipitation,cloudcover"
   ).then(res => res.json()).then(data => {
    console.log(data)
    setCurrent(data)
  })
 }


  useEffect(() => {
      weatherApi()
  }, [])
  return (
    <div>
       <WeatherDetails 
       date={new Date(current.current_weather?.time).toLocaleDateString()}
       time={new Date(current.current_weather?.time).toLocaleTimeString()}
       current_weather={current.current_weather?.temperature + "" + current.hourly_units?.temperature_2m}

       latitude={current?.latitude + "" + current.hourly_units?.temperature_2m}
       longitude={current?.longitude + "" + current.hourly_units?.temperature_2m}

       hourly={current.hourly?.precipitation[22] + "" + current.hourly_units?.cloudcover }

      //  precipitation={current?.precipitation?.relativehumidty}
       humidity={current.hourly?.rain[0] + "" + current.hourly_units?.rain}
       />

    </div>
  )
}

export default Weather;