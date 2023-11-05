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
import { formatNum } from "../../../node_modules/leaflet/src/core/Util";

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
    // console.log(e.target.name, e.target.files[0]);
    if (e.target.name === "file") {
      setForm({
        ...form,
        [e.target.name]: e.target.files[0],
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    create(formData)
      .then((res) => {
        console.log(res);
        loadData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const flyto = (lat, lng) => {
    console.log(lat, lng);
    mapRef.current.flyTo([lat, lng], 10);
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

          {/* EVENTS */}
          <LocationMarker />

          {/* DATA */}
          {data
            ? data.map((item, index) => (
                <Marker
                  eventHandlers={{ click: () => flyto(item.lat, item.lng) }}
                  key={index}
                  position={[item.lat, item.lng]}
                >
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
      <div className="col-md-2" enctype="multipart/form-data">
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

          <div className="mb-3">
            <label className="form-label">File</label>
            <input
              type="file"
              name="file"
              className="form-control"
              id="exampleFormControlInput1"
              onChange={(e) => handleOnchange(e)}
              placeholder="title"
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
              <th scope="col">file</th>
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

                <td>
                  <img src={"http://localhost:5001/img/" + item.file} />
                  {item.file}
                </td>

                <td>{item.lat}</td>
                <td>{item.lng}</td>
                <td>
                  <ZoomInOutlined
                    onClick={() => flyto(item.lat, item.lng)}
                    style={{ cursor: "pointer" }}
                  />
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
