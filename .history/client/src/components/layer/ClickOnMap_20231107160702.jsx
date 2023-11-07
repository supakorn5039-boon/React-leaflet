import React from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

const ClickOnMap = ({ setPosition }) => {
  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        map.flyTo(e.latlng, 10);
        setPosition(e.latlng);
        setForm({
          ...form,
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        });
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here !</Popup>
      </Marker>
    );
  };
  return <LocationMarker />;
};

export default ClickOnMap;
