import React, { useEffect } from "react";
import * as turf from "@turf/turf";
import poi from "../data/POI.json";

import { GeoJSON } from "react-leaflet";

const PointOFInterested = () => {
  useEffect(() => {
    getYourLocation();
  }, []);

  const getYourLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          //Code
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
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

  const IsPoint = turf.point([lng, lat]);
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
