import React from "react";
import { GeoJSON } from "react-leaflet";
import data from "../data/thailand.json";
const Province = () => {
  const styleProvince = {
    color: "orange",
    fieldcolor: "green",
  };
  return <GeoJSON data={data} style={styleProvince} />;
};

export default Province;
