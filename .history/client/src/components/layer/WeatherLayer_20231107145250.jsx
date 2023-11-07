import React, { useEffect, useState } from "react";
import axios from "axios";

const WeatherLayer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const uri =
      "https://data.tmd.go.th/api/WeatherToday/V2/?uid=api&ukey=api12345&format=json";
    await axios
      .get(uri)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return <div>WeatherLayer</div>;
};

export default WeatherLayer;
