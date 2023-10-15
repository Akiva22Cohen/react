import React, { useEffect, useState } from "react";
import WeatherForm from "./weatherForm";
import WeatherInfo from "./weatherInfo";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import Map from "./map";

function Start() {
  const [info, setInfo] = useState();
  const [query] = useSearchParams();

  useEffect(() => {
    doApi(query.get('q') || 'israel');
  }, [query]);

  const doApi = async city1 => {
    if (!city1) {
      return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city1}&APPID=e9b63c1f83f8fb4ec6ec3f0411122dd6&units=metric`;
    try {
      const resp = await axios.get(url);
      console.log(resp);
      setInfo(resp.data);
    } catch (error) {
      setInfo({ error: 'No information exists in the system' });
    }
  }

  return (
    <>
      <header>
        <WeatherForm />
      </header>
      <div className="container-fluid">
        <div className="container">
          <div>
            {
              info ?
                (info.error &&
                  <h2 className="text-center p-0 mt-5">{info.error}</h2>) ||
                (<WeatherInfo info={{ ...info }} /> &&
                  <Map info={{ ...info }} />) :
                <div className="h2 text-center">Loading...</div>
            }
          </div>
        </div>
      </div >
    </>
  );
}

export default Start;
