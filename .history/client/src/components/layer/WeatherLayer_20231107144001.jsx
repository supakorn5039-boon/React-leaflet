import React, { useEffect, useState } from "react";
import axios from "axios";
import cors from "cors";

const WeatherLayer = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const uri = await axios
      .get(uri)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };
  return <div>WeatherLayer</div>;
};

export default WeatherLayer;
