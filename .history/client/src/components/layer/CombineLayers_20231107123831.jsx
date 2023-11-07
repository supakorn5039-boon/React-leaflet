import React from "react";
import { LayersControl, LayerGroup } from "react-leaflet";
import Province from "./Province";
import BaseMapLayers from "./BaseMapLayers";

const CombineLayers = () => {
  return (
    <LayersControl position="topright">
      {/* Layer 1 */}
      <LayersControl.Overlay name="Thailand" checked>
        <Province />
      </LayersControl.Overlay>

      {/* Layer 2 */}
      <BaseMapLayers />
    </LayersControl>
  );
};

export default CombineLayers;
