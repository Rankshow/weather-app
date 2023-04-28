import React from 'react';
import "./weatherDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faCloudSun} from "@fortawesome/free-solid-svg-icons";
import {faUmbrella} from "@fortawesome/free-solid-svg-icons";
import {faDroplet} from "@fortawesome/free-solid-svg-icons";

const WeatherDetails = ({current_weather, hourly, latitude,longitude, elevation, date, time, precipitation, humidity}) => {
  return (
    <div>
      <h1><FontAwesomeIcon icon={faLocationDot} beatFade style={{color: "#e70d0d"}}/> Nigeria, Lagos</h1>
        <h3>{date}</h3>
        <h3>{time}</h3>

          <FontAwesomeIcon icon={faCloudSun} beat style={{color: "#2374AB", fontSize:"50px"}} />
          <h2 style={{color: "#594236", fontSize:"30px"}}>{current_weather}</h2>
        
        <h4><FontAwesomeIcon icon={faUmbrella} fade style={{color: "#ed3e12", marginRight: ".4em", fontSize:"20px"}} /> {hourly}</h4>
        <h2><FontAwesomeIcon icon={faDroplet} fade style={{color: "#0960f6", marginRight: ".4em"}} />{humidity}</h2>
        <p><span>Lat:</span> {latitude}</p>
        <p><span>Long:</span> {longitude}</p>
        <h6>{precipitation}</h6>
        <h6>{elevation}</h6>

    </div>
  )
}

export default WeatherDetails;