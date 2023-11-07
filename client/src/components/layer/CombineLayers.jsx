import React from "react";
import { LayersControl, LayerGroup } from "react-leaflet";
import Province from "./Province";
import BaseMapLayers from "./BaseMapLayers";
import PointOFInterested from "./PointOFInterested";
import WeatherLayer from "./WeatherLayer";

const CombineLayers = () => {
  return (
    <LayersControl position="topright">
      {/* Layer 1 */}
      <LayersControl.Overlay name="Thailand" checked>
        <Province />
      </LayersControl.Overlay>

      {/* Layer 2 */}
      <BaseMapLayers />

      {/* Layer 3 */}
      <LayersControl.Overlay name="poi" checked>
        <PointOFInterested />
      </LayersControl.Overlay>

      {/* Layer 4 */}

      <LayersControl.Overlay name="Weather">
        <LayerGroup>
          <WeatherLayer />
        </LayerGroup>
      </LayersControl.Overlay>
    </LayersControl>
  );
};

export default CombineLayers;
