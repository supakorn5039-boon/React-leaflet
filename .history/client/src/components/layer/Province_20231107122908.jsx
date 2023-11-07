import React from "react";
import { GeoJSON } from "react-leaflet";
import data from "../data/thailand.json";
const Province = () => {
  return <GeoJSON data={data} style={{ color: "red" }} />;
};

export default Province;
