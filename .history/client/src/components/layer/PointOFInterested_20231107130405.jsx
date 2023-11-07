import React from "react";
import * as turf from "@turf/turf";
import poi from "../data/POI.json";

import { GeoJSON } from "react-leaflet";

const PointOFInterested = () => {
  return <GeoJSON data={poi} />;
};

export default PointOFInterested;
