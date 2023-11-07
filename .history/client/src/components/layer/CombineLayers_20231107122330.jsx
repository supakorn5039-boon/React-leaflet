import React from "react";
import { LayersControl, LayerGroup } from "react-leaflet";

const CombineLayers = () => {
  return (
    <LayersControl position="topright">
      {/* Layer 1 */}
      <LayersControl.Overlay name="Thailand"></LayersControl.Overlay>
    </LayersControl>
  );
};

export default CombineLayers;
