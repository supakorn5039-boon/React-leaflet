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

import { create, list } from "../functions/travel";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapContents = () => {
  const [position, setPosition] = useState(null);
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    list()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const LocationMarker = () => {
    const map = useMapEvents({
      click(e) {
        // console.log(e.latlng);
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

  const handleOnchange = (e) => {
    console.log(e.target.name, e.target.value);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    create(form)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(form);

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
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
              name="title"
              onChange={(e) => handleOnchange(e)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Detail</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
              onChange={(e) => handleOnchange(e)}
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
              value={form.lat}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Longitude</label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="title"
              name="lng"
              value={form.lng}
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default MapContents;
