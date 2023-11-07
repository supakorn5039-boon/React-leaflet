import React from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";

import axios from "axios";

const ClickOnMap = ({ setPosition, position, form, setForm }) => {
  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        map.flyTo(e.latlng, 10);
        setPosition(e.latlng);

        getLocation(e.latlng.lat, e.latlng.lng)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));

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

  const getLocation = async (lat, lng) => {
    const uri = `https://api.sphere.gistda.or.th/services/geo/address?lon=${lng}&lat=${lat}&local=t&key=${process.env.REACT_APP_SPHERE}`;

    const res = await axios.get(uri);

    return res.data;
  };
  return <LocationMarker />;
};

export default ClickOnMap;
