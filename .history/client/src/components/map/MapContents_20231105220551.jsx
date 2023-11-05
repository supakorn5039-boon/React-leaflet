import React, { useState, useEffect, useRef } from "react";
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
import { FloatButton } from "antd";
import { ZoomInOutlined } from "@ant-design/icons";

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
  const [showTable, setShowTable] = useState(false);
  const [slideAnimation, setSlideAnimation] = useState(false);
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    lat: 0,
    lng: 0,
  });

  const mapRef = useRef(null);

  function toggleTable() {
    setShowTable(!showTable);
    setSlideAnimation(true);
  }

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    list()
      .then((res) => {
        setData(res.data);
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
        loadData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(form);

  const flyto = (lay, lng) => {
    console.log(lat, lng);
  };

  return (
    <div className="row">
      <div className="col-md-9">
        <MapContainer
          ref={mapRef}
          style={{ height: "100vh", zIndex: 1 }}
          center={[13, 100]}
          zoom={5}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[13, 100]}>
            <Popup>555</Popup>
          </Marker>
          {/* EVENTS */}

          <LocationMarker />

          {/* DATA */}

          {data
            ? data.map((item, index) => (
                <Marker key={index} position={[item.lat, item.lng]}>
                  <Popup>
                    {item.name}
                    <br />
                    {item.detail}
                  </Popup>
                </Marker>
              ))
            : null}
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
              name="name"
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
          <FloatButton className="float-button" onClick={toggleTable} />
        </form>
      </div>

      <div
        className={`content-table ${showTable ? "visible" : ""} ${
          slideAnimation ? "slide-up" : ""
        }`}
      >
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">name</th>
              <th scope="col">detail</th>
              <th scope="col">lat</th>
              <th scope="col">lng</th>
              <th scope="col">go to</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.detail}</td>
                <td>{item.lat}</td>
                <td>{item.lng}</td>
                <td>
                  <ZoomInOutlined style={{ cursor: "pointer" }} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MapContents;
