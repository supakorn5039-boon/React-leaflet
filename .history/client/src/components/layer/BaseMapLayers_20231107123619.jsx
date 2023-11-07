import React from "react";
import { LayersControl, TileLayer } from "react-leaflet";

const BaseMapLayers = () => {
  return (
    <>
      <LayersControl.BaseLayer></LayersControl.BaseLayer>
    </>
  );
};

export default BaseMapLayers;
