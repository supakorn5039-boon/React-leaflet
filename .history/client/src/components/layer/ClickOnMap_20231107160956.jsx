import React from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

import { axios } from "axios";

const ClickOnMap = ({ setPosition, position, form, setForm }) => {
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

  const getLocation = async () => {
    const uri = `https://api.sphere.gistda.or.th/services/geo/address?lon=100.520670&lat=13.754267&local=t&key=YOUR-API-KEY`;
  };
  return <LocationMarker />;
};

export default ClickOnMap;
