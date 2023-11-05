import React from "react";

import { MapContainer, TileLayer, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const MapContents = () => {
  return (
    <div>
      <MapContainer></MapContainer>
    </div>
  );
};

export default MapContents;
