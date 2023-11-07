import React, { useEffect, useState } from "react";
import axios from "axios";
import weather from "../data/Weather.json";

import { Marker, Popup, Tooltip } from "react-leaflet";

const WeatherLayer = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    loadData();
  }, []);

  console.log(weather.Stations);
  const loadData = () => {
    try {
      setData(weather.Stations);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {weather.Stations?.Station.map((item) => {
        console.log(item);
      })}
    </div>
  );
};

export default WeatherLayer;
