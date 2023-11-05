import React, { useState, useEffect } from "react";
import L from "leaflet";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapContents = () => {
  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng);
        map.flyTo(e.latlng, 10);
      },
    });

    return;
  };

  return (
    <div>
      <MapContainer style={{ height: "100vh" }} center={[13, 100]} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[13, 100]}>
          <Popup>555</Popup>
        </Marker>
        {/* EVENTS */}
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default MapContents;
