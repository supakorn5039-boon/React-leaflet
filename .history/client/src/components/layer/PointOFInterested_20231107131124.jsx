import React from "react";
import * as turf from "@turf/turf";
import poi from "../data/POI.json";

import { GeoJSON } from "react-leaflet";

const PointOFInterested = () => {
  const inLat = 18.78964257601938;
  const inLng = 98.98630142211915;

  const IsPoint = turf.point([inLng, inLat]);

  console.log(IsPoint);

  const style = {
    color: "red",
  };
  return <GeoJSON data={poi} style={style} />;
};

export default PointOFInterested;
