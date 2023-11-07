import React from "react";
import { LayersControl, LayerGroup } from "react-leaflet";
import Province from "./Province";

const CombineLayers = () => {
  return (
    <LayersControl position="topright">
      {/* Layer 1 */}
      <LayersControl.Overlay name="Thailand" checked>
        <Province style={{ color: "green" }} />
      </LayersControl.Overlay>
    </LayersControl>
  );
};

export default CombineLayers;
