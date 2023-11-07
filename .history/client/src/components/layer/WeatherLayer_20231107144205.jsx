import React, { useEffect, useState } from "react";
import axios from "axios";
import weather from "../data/Weather.json";

const WeatherLayer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const uri = weather;

    await axios
      .get(weather)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return <div>WeatherLayer</div>;
};

export default WeatherLayer;
