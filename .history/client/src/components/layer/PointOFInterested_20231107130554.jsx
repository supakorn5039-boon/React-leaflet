import React from "react";
import * as turf from "@turf/turf";
import poi from "../data/POI.json";

import { GeoJSON } from "react-leaflet";

const PointOFInterested = () => {
  const style = {
    color: "red",
  };
  return <GeoJSON data={poi} style={style} />;
};

export default PointOFInterested;
