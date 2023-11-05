import React from "react";

import {
  MapContainer,
  TileLayer,
  useMap,
} from "../../../node_modules/leaflet/src/layer/tile/TileLayer";

const MapContents = () => {
  return (
    <div>
      <MapContainer></MapContainer>
    </div>
  );
};

export default MapContents;
