import React from "react";

import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

import "leaflet/dist/leaflet.css";

const MapContents = () => {
  return (
    <div>
      <MapContainer style={{ height: "100vh" }} center={[13, 100]} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={[13, 100]}></Marker>
      </MapContainer>
    </div>
  );
};

export default MapContents;
