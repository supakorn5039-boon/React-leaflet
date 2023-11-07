import React from "react";
import { LayersControl } from "react-leaflet";

const BaseMapLayers = () => {
  return (
    <>
      <LayersControl.BaseLayer></LayersControl.BaseLayer>
    </>
  );
};

export default BaseMapLayers;
