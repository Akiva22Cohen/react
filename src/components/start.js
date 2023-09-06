import React, { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherInfo from "./weatherInfo";
import axios from "axios";

function Start() {
  const [info, setInfo] = useState();

  useEffect(() => {
    doApi('Netanya');
  }, []);

  const doApi = async city1 => {
    if (!city1) {
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&APPID=e9b63c1f83f8fb4ec6ec3f0411122dd6&units=metric`;
    try {
      const resp = await axios.get(url);
      setInfo(resp.data);
    } catch (error) {

    }
  }


  const appSetCity = city2 => {
    doApi(city2);
  }

  return (
    <div className="container-fluid p-0">
      <header style={{ minHeight: '10vh' }}>
        <WeatherForm
          appSetCity={appSetCity}
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
