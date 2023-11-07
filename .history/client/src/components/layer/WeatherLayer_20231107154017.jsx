import React, { useEffect, useState } from "react";
import axios from "axios";
import weather from "../data/Weather.json";

import { Marker, Popup, Tooltip } from "react-leaflet";

const WeatherLayer = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    loadData();
  }, []);

  console.log(weather.Stations);
  const loadData = () => {
    try {
      setData(weather.Stations);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      {weather.Stations?.Station.map((item) => {
        return (
          <Marker position={[item.Latitude, item.Longitude]}>
            <Tooltip>
              {/* Temperature:{item.Observation.Temperature} */}

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
