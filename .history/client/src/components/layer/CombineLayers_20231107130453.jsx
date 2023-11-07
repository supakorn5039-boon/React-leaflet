import React from "react";
import { LayersControl, LayerGroup } from "react-leaflet";
import Province from "./Province";
import BaseMapLayers from "./BaseMapLayers";
import PointOFInterested from "./PointOFInterested";

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
      <LayersControl.Overlay name="poi" checked></LayersControl.Overlay>
      <PointOFInterested />
    </LayersControl>
  );
};

export default CombineLayers;
