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
import editicon from "leaflet/dist/images/edit-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import { FloatButton, Avatar } from "antd";
import {
  ZoomInOutlined,
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

import "leaflet/dist/leaflet.css";
import "bootstrap/dist/css/bootstrap.css";

import { create, list, remove, update } from "../functions/travel";
import FormEdit from "../form/FormEdit";
import CombineLayers from "../layer/CombineLayers";
import ClickOnMap from "../layer/ClickOnMap";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

let EditIcon = L.icon({
  iconUrl: editicon,
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

  const [fileold, setFileOld] = useState(null);

  //Edit

  const [id, setId] = useState(null);
  const [drag, setDrag] = useState(false);
  const [edit, setEdit] = useState(false);

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
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    console.log("form", form);
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }
    formData.append("fileold", fileold);
    update(id, formData)
      .then((res) => {
        console.log(res);
        loadData();
        setEdit(false);
        setDrag(!drag);
        setId(null);
      })
      .catch((err) => console.log(err));
  };

  const flyto = (lat, lng) => {
    console.log(lat, lng);
    mapRef.current.flyTo([lat, lng], 10);
  };

  const handleRemove = (id) => {
    console.log(id);
    remove(id)
      .then((res) => {
        console.log(res);
        loadData();
      })
      .catch((err) => [console.log(err)]);
  };

  const handleEdit = (id, lat, lng) => {
    flyto(lat, lng);
    setId(id);
    setDrag(!drag);
    setEdit(true);
  };

  const handleDragend = (e) => {
    const newLat = e.target.getLatLng().lat;
    const newLng = e.target.getLatLng().lng;
    console.log(newLat, newLng);

    setForm({
      ...form,
      lat: newLat,
      lng: newLng,
    });
    updatedArrayData(id, newLat, newLng);
  };

  const updatedArrayData = (id, lat, lng) => {
    setData((prevData) =>
      prevData.map((item) => (item._id === id ? { ...item, lat, lng } : item))
    );
  };

  const handleCancel = () => {
    setEdit(false);
    setId(null);
    setDrag(!drag);
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
          <CombineLayers />

          {/* EVENTS */}
          <ClickOnMap
            setPosition={setPosition}
            position={position}
            form={form}
            setForm={setForm}
          />
          {/* DATA */}
          {data
            ? data.map((item, index) => (
                <Marker
                  eventHandlers={{
                    click: () => flyto(item.lat, item.lng),
                    dragend: (e) => handleDragend(e),
                  }}
                  key={index}
                  position={[item.lat, item.lng]}
                  draggable={id === item._id ? drag : false}
                  icon={id === item._id ? EditIcon : DefaultIcon}
                >
                  <Popup>
                    {item.name}
                    <br />
                    {item.detail}
                    <img
                      alt=""
                      src={process.env.REACT_APP_IMG + "/" + item.file}
                    />
                  </Popup>
                </Marker>
              ))
            : null}
        </MapContainer>
      </div>
      {edit ? (
        <FormEdit
          setFileOld={setFileOld}
          handleSubmitEdit={(e) => handleSubmitEdit(e)}
          handleCancel={handleCancel}
          id={id}
          form={form}
          setForm={setForm}
          handleOnchange={handleOnchange}
        />
      ) : (
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
              <label className="form-label">Province</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Province"
                name="province"
                value={form.province}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">District</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="District"
                name="province"
                value={form.province}
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
          </form>
        </div>
      )}

      <div>
        <FloatButton className="float-button" onClick={toggleTable} />
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
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.detail}</td>

                <td>
                  <Avatar
                    size={50}
                    src={process.env.REACT_APP_IMG + "/" + item.file}
                  />

                  {item.file}
                </td>

                <td>{item.lat}</td>
                <td>{item.lng}</td>
                <td>
                  <ZoomInOutlined
                    onClick={() => flyto(item.lat, item.lng)}
                    style={{ cursor: "pointer" }}
                  />{" "}
                  <EditOutlined
                    onClick={() => handleEdit(item._id, item.lat, item.lng)}
                    style={{
                      color: "blue",
                      paddingLeft: "10px",
                      cursor: "pointer",
                    }}
                  />{" "}
                  <DeleteOutlined
                    onClick={() => handleRemove(item._id)}
                    style={{
                      color: "red",
                      paddingLeft: "10px",
                      cursor: "pointer",
                    }}
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
