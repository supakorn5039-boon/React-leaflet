import React, { useEffect, useState } from "react";
import axios from "axios";
import weather from "../data/Weather.json";

import { Marker, Popup, Tooltip } from "react-leaflet";

const WeatherLayer = () => {
  const [data, setData] = useState(null);
  useEffect(() => {}, []);

  console.log(weather);
  const loadData = () => {
    try {
      setData(weather);
    } catch (err) {
      console.log(err);
    }
  };
  return <div></div>;
};

export default WeatherLayer;
