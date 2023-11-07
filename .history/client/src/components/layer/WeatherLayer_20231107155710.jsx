import React, { useEffect, useState } from "react";
import axios from "axios";
import weather from "../data/Weather.json";

import { Marker, Popup, Tooltip } from "react-leaflet";
import L from "leaflet";

const WeatherLayer = () => {
  const labelIcon = (temp) => {
    var iconColor = "map-label-content";
    if (temp > 32) {
      iconColor += " red";
    } else if (temp > 28) {
      iconColor += " orange";
    } else if (temp > 25) {
      iconColor += " yellow";
    }

    return new L.divIcon({
      className: "map-label",
      html: `<div class="map-label"><div class="map-label ${iconColor}">${temp}</div></div>`,
    });
  };

  return (
    <div>
      {weather.Stations?.Station.map((item) => {
        return (
          <Marker
            icon={labelIcon(item.Observation.MaxTemperature)}
            position={[item.Latitude, item.Longitude]}
          >
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
