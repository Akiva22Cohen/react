import React, { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherInfo from "./weatherInfo";
import axios from "axios";

function Start() {
  const [info, setInfo] = useState();
  const [city, setCity] = useState('Netanya');

  useEffect(() => {
    doApi(city);
    console.log(setCity);
  }, []);

  const doApi = async city => {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},&APPID=e9b63c1f83f8fb4ec6ec3f0411122dd6&&units=metric`;
    const resp = await axios.get(url);
    setInfo(resp.data);
  }

  return (
    <div className="container-fluid p-0">
      <header style={{ minHeight: '10vh' }}>
        <WeatherForm
          setCity={setCity}
        />
      </header>
      <div className="container">
        <div>
          {(info && <WeatherInfo info={{ ...info }} />) || (<div className="h2 text-center">Loading...</div>)}
        </div>
      </div>
    </div>
  );
}

export default Start;
