import './Weather.css';
import React, { useEffect, useState } from "react";
import { lightBlue } from '@material-ui/core/colors';
// import { Dimmer, Loader } from 'semantic-ui-react';

function WeatherDisplay() {
  const [weather, setWeather] = useState({});
  const [locations, setLocations] = useState("Waterloo");
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    ifClicked();
  }, []);

  
  function ifClicked() {
    //api fetch call
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${locations}&APPID=db717f44a41533db611b21fb1eef31ce&units=metric`
    )
      .then((res) => {
        if (res.ok) {
          console.log(res.status);
          return res.json();
        } else {
          if (res.status === 404) {
            return alert("Oops, there seems to be an error!(wrong location)");
          }
          alert("Oops, there seems to be an error!");
          throw new Error("You have an error");
        }
      })
      .then((object) => {
        setWeather(object);
        console.log(weather);
      })
      .catch((error) => console.log(error));
    fetch(
      `https://api.unsplash.com/search/photos?query=${locations}&client_id=3cFsGiTb902Fco2QZulEcU4wSO7DupcUoF-ujzPldP4`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("You made a mistake");
        }
      })
      .then((data) => {
        console.log(data);
        setPhotos(data?.results[0]?.urls?.raw);
      })
      .catch((error) => console.log(error));
  }
  return (
    <div className="weather">
      <div className="wrapper">
        <div className="search">
          <input
            type="text"
            value={locations}
            onChange={(e) => setLocations(e.target.value)}
            placeholder="Enter location"
            className="location_input"
          />
          <button className="location_searcher" onClick={ifClicked} background-color={lightBlue}>
            Search Location
          </button>
        </div>
        <div className="app__data">
          <p className="temp">Current Temparature: {weather?.main?.temp} degrees</p>
        </div>
        <img className="app__image" src={photos} alt="" />
      </div>

    </div>
  );
}

export default WeatherDisplay;