import React from "react";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { getLocation } from "../functions/util.js";

const ClickOnMap = ({ setPosition, position, form, setForm }) => {
  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        map.flyTo(e.latlng, 10);
        setPosition(e.latlng);

        getLocation(e.latlng.lat, e.latlng.lng)
          .then((res) => {
            console.log(res);
            setForm({
              ...form,
              lat: e.latlng.lat,
              lng: e.latlng.lng,
              province: res.province,
              district: res.district,
              subdistrict: res.subdistrict,
            });
          })
          .catch((err) => console.log(err));
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
