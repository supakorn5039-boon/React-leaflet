import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherLayer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {}, []);

  const loadData = async () => {
    const uri =
      '"https://data.tmd.go.th/api/WeatherToday/V2/?uid=api&ukey=api12345&format=json"';
    await axios.get(uri);
  };
  return <div></div>;
};

export default WeatherLayer;