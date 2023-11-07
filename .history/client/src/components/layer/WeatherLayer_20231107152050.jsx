import React, { useEffect, useState } from "react";
import axios from "axios";
import weather from "../data/Weather.json";

import { Marker, Popup, Tooltip } from "react-leaflet";
const WeatherLayer = () => {
  const [data, setData] = useState(null);

  console.log(weather);
  return <div></div>;
};

export default WeatherLayer;
