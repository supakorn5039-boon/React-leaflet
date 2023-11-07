import React from "react";
import * as turf from "@turf/turf";
import poi from "../data/POI.json";

import { GeoJSON } from "react-leaflet";

const PointOFInterested = () => {
  const inLat = 18.78964257601938;
  const inLng = 98.98630142211915;

  const outLat = 18.323240460443397;
  const outLng = 99.55653107177507;

  const IsPoint = turf.point([outLng, outLat]);
  console.log(IsPoint);

  const style = {
    color: "red",
  };

  const CheckPOI = turf.booleanPointInPolygon(IsPoint, poi.geometry);
  console.log(CheckPOI);

  return <GeoJSON data={poi} style={style} />;
};

export default PointOFInterested;
