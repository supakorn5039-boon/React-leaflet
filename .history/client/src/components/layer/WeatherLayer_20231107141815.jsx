import React from "react";
import keys from "./key.js";

const WeatherLayer = () => {
  const api = {
    key: keys.API_KEY,
    base: keys.BASE_URL,
  };

  const dataBuild = (d) => {
    let date = String(new window.Date());
    date = date.slice(3, 15);

    return date;
  };
  return <></>;
};

export default WeatherLayer;
