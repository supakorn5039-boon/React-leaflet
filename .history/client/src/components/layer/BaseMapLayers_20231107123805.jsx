import React from "react";
import { LayersControl, TileLayer } from "react-leaflet";

const BaseMapLayers = () => {
  return (
    <>
      <LayersControl.BaseLayer>
        <TileLayer url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png" />
      </LayersControl.BaseLayer>
    </>
  );
};

export default BaseMapLayers;
