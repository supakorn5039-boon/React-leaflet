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

          const boon = handleChecked(lat, lng, poi);

          console.log(boon);
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

  const handleChecked = (lat, lng, poi) => {
    const IsPoint = turf.point([lng, lat]);
    const CheckPOI = turf.booleanPointInPolygon(IsPoint, poi.geometry);

    return CheckPOI;
  };

  const style = {
    color: "red",
  };

  //   const finalStyle = CheckPOI ? { color: "green" } : style;

  return <GeoJSON data={poi} style={style} />;
};

export default PointOFInterested;
