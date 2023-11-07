import React from "react";
import { GeoJSON } from "react-leaflet";
import data from "../data/thailand.json";
const Province = () => {
  const styleProvince = {
    color: "orange",
  };
  return <GeoJSON data={data} />;
};

export default Province;
