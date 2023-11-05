import React from "react";

import { MapContainer, TileLayer, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const MapContents = () => {
  return (
    <div>
      <MapContainer style={{ height: "100vh" }}></MapContainer>
    </div>
  );
};

export default MapContents;
