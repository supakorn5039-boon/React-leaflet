import React, { useEffect, useState } from "react";
import axios from "axios";
import weather from "../data/Weather.json";

import { Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";

const WeatherLayer = () => {
  const labelIcon = () => {
    return (labelIcon = new L.divIcon({
      className: "map-label",
      html: "<div>666</div>",
    }));
  };

  return (
    <div>
      {weather.Stations?.Station.map((item) => {
        return (
          <Marker icon={labelIcon} position={[item.Latitude, item.Longitude]}>
            <Tooltip>
              {Object.entries(item.Observation).map(([key, value]) => {
                if (typeof value === "object") {
                  return null;
                } else {
                  return (
                    <div>
                      <b>{key}</b>,{value}
                    </div>
                  );
                }
              })}
            </Tooltip>
          </Marker>
        );
      })}
    </div>
  );
};

export default WeatherLayer;
