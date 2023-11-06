import React, { useState, useEffect } from "react";
import { read } from "../functions/travel";

const FormEdit = ({
  handleCancel,
  id,
  setForm,
  form,
  handleOnchange,
  handleSubmitEdit,
}) => {
  useEffect(() => {
    loadData(id);
  }, []);

  const loadData = (id) => {
    read(id)
      .then((res) => {
        console.log(res);
        setForm(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="col-md-2" enctype="multipart/form-data">
      Form Edit
      <form onSubmit={(e) => handleSubmitEdit(e)}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="title"
            name="name"
            value={form.name}
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
            value={form.detail}
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
        <button onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default FormEdit;
