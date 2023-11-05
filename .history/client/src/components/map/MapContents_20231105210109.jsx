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
import "bootstrap/dist/css/bootstrap.css";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapContents = () => {
  const [position, setPosition] = useState(null);
  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        console.log(e.latlng);
        map.flyTo(e.latlng, 10);
        setPosition(e.latlng);
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here !</Popup>
      </Marker>
    );
  };

  return (
    <div className="row">
      <div className="col-md-10">
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
      <div className="col-md-2">
        FORM
        <form>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
              name="name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Detail</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
              name="detail"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Latitude</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
              name="lat"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Latitude</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
              name="lat"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MapContents;
