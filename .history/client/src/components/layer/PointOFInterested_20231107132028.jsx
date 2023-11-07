import React, { useEffect } from "react";
import * as turf from "@turf/turf";
import poi from "../data/POI.json";

import { GeoJSON } from "react-leaflet";

const PointOFInterested = () => {
  useEffect(() => {}, []);

  const getYourLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //Code
          console.log(position);
        },
        (err) => {
          //Err
          console.log("Cannot access your location", err);
        }
      );
    } else {
      console.log("Cannot access your location");
    }
  };
  const inLat = 18.78964257601938;
  const inLng = 98.98630142211915;

  const outLat = 18.323240460443397;
  const outLng = 99.55653107177507;

  const IsPoint = turf.point([inLng, inLat]);
  console.log(IsPoint);

  const style = {
    color: "red",
  };

  const CheckPOI = turf.booleanPointInPolygon(IsPoint, poi.geometry);
  console.log(CheckPOI);

  const finalStyle = CheckPOI ? { color: "green" } : style;

  return <GeoJSON data={poi} style={finalStyle} />;
};

export default PointOFInterested;
