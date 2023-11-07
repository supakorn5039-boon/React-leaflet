import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherLayer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  const loadData = async () => {
    await axios.get(
      "https://data.tmd.go.th/api/WeatherToday/V2/?uid=api&ukey=api12345&format=json"
    );
  };
  return <div></div>;
};

export default WeatherLayer;
