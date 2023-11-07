import React, { useEffect, useState } from "react";
import axios from "axios";
import weather from "../data/Weather.json";

import { Marker, Popup, Tooltip } from "react-leaflet";
const WeatherLayer = () => {
  const [data, setData] = useState(null);

  //   useEffect(() => {
  //     loadData();
  //   }, []);

  //   const loadData = async () => {
  //     const uri =
  //       "https://data.tmd.go.th/api/WeatherToday/V2/?uid=api&ukey=api12345&format=json";
  //     await axios
  //       .get(uri)
  //       .then((res) => {
  //         console.log(res);
  //         setData(res.data);
  //       })
  //       .catch((err) => console.log(err));
  //   };

  return (
    <div>
      {data.Stations?.Station.map((weather, item) => {
        console.log(item);
      })}
    </div>
  );
};

export default WeatherLayer;
