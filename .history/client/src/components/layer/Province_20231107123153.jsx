import React from "react";
import { GeoJSON } from "react-leaflet";
import data from "../data/thailand.json";
const Province = () => {
  const styleProvince = {
    color: "orange",
    fillColor: "green",
    fillOpacity: "0",
  };
  return <GeoJSON data={data} style={styleProvince} />;
};

export default Province;
